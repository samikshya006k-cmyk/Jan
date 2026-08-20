import os
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "JanSetu Civic Intelligence API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security / JWT
    SECRET_KEY: str = os.getenv("SECRET_KEY", "jansetu-super-secret-jwt-key-change-in-production-2026")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    # Database (Default: SQLite file in backend root)
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./jansetu.db")
    
    # CORS
    CORS_ORIGINS: List[str] = [
        "*",
        "http://localhost",
        "http://localhost:3000",
        "http://localhost:5500",
        "http://localhost:8000",
        "http://localhost:8080",
        "http://127.0.0.1:5500",
        "http://127.0.0.1:8000",
        "http://127.0.0.1:8080",
    ]
    
    # Uploads
    UPLOAD_DIR: str = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "uploads")
    MAX_UPLOAD_SIZE_MB: int = 15

    model_config = SettingsConfigDict(case_sensitive=True, extra="allow")


settings = Settings()

# Ensure uploads directory exists
os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
