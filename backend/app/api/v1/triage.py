from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.triage import (
    TriagePreviewRequest, 
    TriagePreviewResponse, 
    DuplicateCheckRequest, 
    DuplicateCheckResponse
)
from app.services.ai_triage import AITriageService
from app.services.duplicate_finder import DuplicateFinderService

router = APIRouter()


@router.post("/preview", response_model=TriagePreviewResponse)
def triage_preview(request: TriagePreviewRequest) -> Any:
    """
    Real-time AI classification and triage preview for text/voice input.
    Provides instant category, suggested department, urgency, and severity.
    """
    result = AITriageService.classify_grievance(
        text=request.description
    )
    return result


@router.post("/check-duplicates", response_model=DuplicateCheckResponse)
def check_duplicates(
    request: DuplicateCheckRequest,
    db: Session = Depends(get_db)
) -> Any:
    """
    Real-time geo-spatial and semantic duplicate detection.
    Finds existing active complaints in the area and calculates cluster impact.
    """
    result = DuplicateFinderService.find_duplicates(
        db=db,
        description=request.description,
        latitude=request.latitude,
        longitude=request.longitude,
        radius_meters=request.radius_meters or 1000.0
    )
    return result
