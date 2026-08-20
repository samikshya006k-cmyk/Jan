from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, ConfigDict
from app.schemas.user import UserOut


class GrievanceBase(BaseModel):
    title: Optional[str] = None
    description: str
    category: Optional[str] = "Road & Infrastructure"
    language: Optional[str] = "en"
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    address: Optional[str] = None
    landmark: Optional[str] = None
    ward: Optional[str] = "Ward 12"


class GrievanceCreate(GrievanceBase):
    pass


class GrievanceStatusHistoryOut(BaseModel):
    id: int
    old_status: Optional[str]
    new_status: str
    comments: Optional[str]
    created_at: datetime
    changed_by_user_id: Optional[int]

    model_config = ConfigDict(from_attributes=True)


class EvidenceOut(BaseModel):
    id: int
    file_name: str
    file_url: str
    file_type: str
    evidence_type: str
    is_verified: bool
    verification_notes: Optional[str]
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class GrievanceOut(BaseModel):
    id: int
    ticket_id: str
    title: str
    description: str
    category: str
    status: str
    priority: str
    language: str
    latitude: Optional[float]
    longitude: Optional[float]
    address: Optional[str]
    landmark: Optional[str]
    ward: Optional[str]
    department: Optional[str]
    ai_confidence: Optional[float]
    ai_summary: Optional[str]
    resolution_notes: Optional[str]
    community_impact_count: int
    citizen_id: int
    assigned_officer_id: Optional[int]
    created_at: datetime
    updated_at: datetime
    resolved_at: Optional[datetime]
    
    citizen: Optional[UserOut] = None
    assigned_officer: Optional[UserOut] = None

    model_config = ConfigDict(from_attributes=True)


class GrievanceDetail(GrievanceOut):
    history: List[GrievanceStatusHistoryOut] = []
    evidence: List[EvidenceOut] = []


class GrievanceStatusUpdate(BaseModel):
    status: str  # Pending, In Progress, Resolved, Rejected
    comments: Optional[str] = None
    assigned_officer_id: Optional[int] = None
    resolution_notes: Optional[str] = None
    priority: Optional[str] = None
