from typing import Optional, List
from pydantic import BaseModel


class TriagePreviewRequest(BaseModel):
    description: str
    language: Optional[str] = "en"
    latitude: Optional[float] = None
    longitude: Optional[float] = None


class TriagePreviewResponse(BaseModel):
    category: str
    suggested_department: str
    priority: str
    severity: str
    confidence: float
    summary: str
    key_entities: List[str] = []
    urgency_reason: Optional[str] = None


class DuplicateCheckRequest(BaseModel):
    description: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    radius_meters: Optional[float] = 1000.0  # 1km default


class DuplicateMatch(BaseModel):
    id: int
    ticket_id: str
    title: str
    category: str
    status: str
    similarity_score: float
    distance_meters: Optional[float] = None
    created_at: str


class DuplicateCheckResponse(BaseModel):
    is_duplicate_likely: bool
    potential_matches: List[DuplicateMatch] = []
    cluster_size: int = 0
    estimated_impact_multiplier: int = 1
