import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.core.database import Base, engine, SessionLocal
from app.db.seed import seed_database
from app.api.v1.api import api_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application startup and shutdown events.
    Ensures database tables are initialized and default seed data exists.
    """
    # Startup: create tables and seed
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
    
    yield
    # Shutdown logic (if any)


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="JanSetu AI-Powered Civic Intelligence Backend API - Grievance Triage, Evidence Tracking, Participatory Budgeting, and Analytics",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan
)

# Setup CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Uploads directory for static access
app.mount("/uploads", StaticFiles(directory=settings.UPLOAD_DIR), name="uploads")

# Include v1 API Router
app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/")
def root():
    return {
        "app": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "healthy",
        "documentation": "/docs",
        "api_v1": settings.API_V1_STR
    }


@app.get("/health")
def health_check():
    return {
        "status": "online",
        "database": "connected"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
