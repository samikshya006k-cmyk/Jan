from typing import Any, List, Optional
from datetime import datetime
import random
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_, desc

from app.core.database import get_db
from app.models.user import User, UserRole
from app.models.grievance import Grievance, GrievanceStatusHistory, GrievanceSupport, GrievanceStatus
from app.schemas.grievance import GrievanceCreate, GrievanceOut, GrievanceDetail, GrievanceStatusUpdate
from app.services.ai_triage import AITriageService
from app.services.duplicate_finder import DuplicateFinderService
from app.services.notification_mgr import NotificationManager
from app.api.deps import get_current_user, get_current_officer, get_optional_current_user

router = APIRouter()


def generate_ticket_id(db: Session) -> str:
    """Generate a unique human-readable ticket ID like JS-20481."""
    while True:
        num = random.randint(20000, 99999)
        ticket = f"JS-{num}"
        if not db.query(Grievance).filter(Grievance.ticket_id == ticket).first():
            return ticket


@router.post("/", response_model=GrievanceOut, status_code=status.HTTP_201_CREATED)
def create_grievance(
    grievance_in: GrievanceCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
) -> Any:
    """
    Submit a new civic grievance.
    Automatically triggers AI classification, department assignment, and severity detection.
    """
    # Run AI triage
    ai_result = AITriageService.classify_grievance(
        text=grievance_in.description,
        user_category=grievance_in.category
    )
    
    ticket_id = generate_ticket_id(db)
    title = grievance_in.title or (grievance_in.description[:60].strip() + "...")

    # Check for potential duplicates to calculate initial community impact count
    dup_analysis = DuplicateFinderService.find_duplicates(
        db=db,
        description=grievance_in.description,
        category=ai_result["category"],
        latitude=grievance_in.latitude,
        longitude=grievance_in.longitude
    )

    impact_count = dup_analysis.get("cluster_size", 0) + 1

    grievance = Grievance(
        ticket_id=ticket_id,
        title=title,
        description=grievance_in.description,
        category=ai_result["category"],
        status=GrievanceStatus.PENDING.value,
        priority=ai_result["priority"],
        language=grievance_in.language or "en",
        latitude=grievance_in.latitude,
        longitude=grievance_in.longitude,
        address=grievance_in.address,
        landmark=grievance_in.landmark,
        ward=grievance_in.ward or current_user.ward or "Ward 12",
        department=ai_result["suggested_department"],
        ai_confidence=ai_result["confidence"],
        ai_summary=ai_result["summary"],
        community_impact_count=impact_count,
        citizen_id=current_user.id
    )

    db.add(grievance)
    db.commit()
    db.refresh(grievance)

    # Add initial history entry
    history = GrievanceStatusHistory(
        grievance_id=grievance.id,
        old_status=None,
        new_status=GrievanceStatus.PENDING.value,
        changed_by_user_id=current_user.id,
        comments="Grievance submitted by citizen with automated AI triage."
    )
    db.add(history)
    db.commit()

    # Send citizen notification
    NotificationManager.notify_user(
        db=db,
        user_id=current_user.id,
        title="Grievance Received",
        message=f"Your grievance #{grievance.ticket_id} has been registered and routed to {grievance.department}.",
        notification_type="status_update",
        link="/citizendashboard.html#reports"
    )

    return grievance


@router.get("/", response_model=List[GrievanceOut])
def list_grievances(
    status: Optional[str] = Query(None, description="Filter by status: Pending, In Progress, Resolved, Rejected"),
    category: Optional[str] = Query(None, description="Filter by category"),
    priority: Optional[str] = Query(None, description="Filter by priority: Critical, High, Medium, Low"),
    ward: Optional[str] = Query(None, description="Filter by ward"),
    search: Optional[str] = Query(None, description="Search query across ticket ID, title, description, landmark"),
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db)
) -> Any:
    """
    List civic grievances with comprehensive filtering and search capabilities.
    """
    query = db.query(Grievance)

    if status and status.lower() != "all":
        query = query.filter(Grievance.status.ilike(status))
    if category and category.lower() != "all":
        query = query.filter(Grievance.category.ilike(category))
    if priority and priority.lower() != "all":
        query = query.filter(Grievance.priority.ilike(priority))
    if ward and ward.lower() != "all":
        query = query.filter(Grievance.ward.ilike(ward))
    if search:
        search_fmt = f"%{search.lower()}%"
        query = query.filter(
            or_(
                Grievance.ticket_id.ilike(search_fmt),
                Grievance.title.ilike(search_fmt),
                Grievance.description.ilike(search_fmt),
                Grievance.landmark.ilike(search_fmt),
                Grievance.address.ilike(search_fmt),
                Grievance.ward.ilike(search_fmt),
            )
        )

    return query.order_by(desc(Grievance.created_at)).offset(skip).limit(limit).all()


@router.get("/my", response_model=List[GrievanceOut])
def list_my_grievances(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
) -> Any:
    """
    List grievances submitted by the currently logged-in citizen.
    """
    return db.query(Grievance).filter(
        Grievance.citizen_id == current_user.id
    ).order_by(desc(Grievance.created_at)).all()


@router.get("/{grievance_id_or_ticket}", response_model=GrievanceDetail)
def get_grievance_detail(
    grievance_id_or_ticket: str,
    db: Session = Depends(get_db)
) -> Any:
    """
    Fetch grievance details by numeric ID or ticket string (e.g. JS-20481).
    """
    if grievance_id_or_ticket.isdigit():
        grievance = db.query(Grievance).filter(Grievance.id == int(grievance_id_or_ticket)).first()
    else:
        grievance = db.query(Grievance).filter(Grievance.ticket_id.ilike(grievance_id_or_ticket)).first()

    if not grievance:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Grievance record not found."
        )
    return grievance


@router.patch("/{grievance_id}/status", response_model=GrievanceDetail)
def update_grievance_status(
    grievance_id: int,
    update_data: GrievanceStatusUpdate,
    current_officer: User = Depends(get_current_officer),
    db: Session = Depends(get_db)
) -> Any:
    """
    Update grievance status, assign officer, and add resolution remarks.
    Only available to municipal officers and administrators.
    """
    grievance = db.query(Grievance).filter(Grievance.id == grievance_id).first()
    if not grievance:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Grievance record not found."
        )

    old_status = grievance.status
    new_status = update_data.status

    grievance.status = new_status
    if update_data.assigned_officer_id:
        grievance.assigned_officer_id = update_data.assigned_officer_id
    elif not grievance.assigned_officer_id:
        grievance.assigned_officer_id = current_officer.id

    if update_data.priority:
        grievance.priority = update_data.priority

    if update_data.resolution_notes:
        grievance.resolution_notes = update_data.resolution_notes

    if new_status == GrievanceStatus.RESOLVED.value:
        grievance.resolved_at = datetime.utcnow()

    # Record history
    history = GrievanceStatusHistory(
        grievance_id=grievance.id,
        old_status=old_status,
        new_status=new_status,
        changed_by_user_id=current_officer.id,
        comments=update_data.comments or f"Status changed to {new_status} by officer {current_officer.full_name}."
    )
    db.add(history)
    db.commit()
    db.refresh(grievance)

    # Send citizen notification
    NotificationManager.notify_grievance_status_change(
        db=db,
        citizen_id=grievance.citizen_id,
        ticket_id=grievance.ticket_id,
        title=grievance.title,
        old_status=old_status,
        new_status=new_status
    )

    return grievance


@router.post("/{grievance_id}/support", response_model=dict)
def support_grievance(
    grievance_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
) -> Any:
    """
    Citizen 'Upvote / Me-Too' support for a grievance, boosting community impact score.
    """
    grievance = db.query(Grievance).filter(Grievance.id == grievance_id).first()
    if not grievance:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Grievance not found."
        )

    existing = db.query(GrievanceSupport).filter(
        GrievanceSupport.grievance_id == grievance.id,
        GrievanceSupport.user_id == current_user.id
    ).first()

    if existing:
        # Toggle / un-support
        db.delete(existing)
        grievance.community_impact_count = max(1, grievance.community_impact_count - 1)
        db.commit()
        return {
            "supported": False,
            "community_impact_count": grievance.community_impact_count,
            "message": "Support removed."
        }
    else:
        support = GrievanceSupport(grievance_id=grievance.id, user_id=current_user.id)
        db.add(support)
        grievance.community_impact_count = (grievance.community_impact_count or 1) + 1
        db.commit()
        return {
            "supported": True,
            "community_impact_count": grievance.community_impact_count,
            "message": "Thank you for corroborating this civic issue."
        }
