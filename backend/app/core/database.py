import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from app.core.config import settings

db_url = settings.DATABASE_URL or "sqlite:///./jansetu.db"

# Cloud providers (Supabase, Railway, Neon, Heroku) often use postgres://
# SQLAlchemy 2.0+ requires postgresql://
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

if db_url.startswith("sqlite"):
    connect_args = {"check_same_thread": False}
    engine = create_engine(
        db_url,
        connect_args=connect_args,
        echo=False
    )
else:
    # Cloud PostgreSQL (Supabase, Railway PostgreSQL, Neon, AWS RDS)
    engine = create_engine(
        db_url,
        pool_pre_ping=True,  # Auto-reconnect dead connections
        pool_recycle=300,    # Recycle connections every 5 mins
        pool_size=10,
        max_overflow=20,
        echo=False
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

