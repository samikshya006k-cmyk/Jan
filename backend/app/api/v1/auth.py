import re
from typing import Any
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import verify_password, get_password_hash, create_access_token
from app.models.user import User, UserRole
from app.schemas.user import (
    UserCreate, UserLogin, UserOut, Token, UserUpdate,
    EmailVerifyRequest, EmailVerifyResponse
)
from app.api.deps import get_current_user

router = APIRouter()

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")


def validate_email_format(email: str) -> bool:
    if not email or not isinstance(email, str):
        return False
    clean_email = email.strip()
    if len(clean_email) < 5 or len(clean_email) > 255:
        return False
    return bool(EMAIL_REGEX.match(clean_email))


@router.post("/verify-email", response_model=EmailVerifyResponse)
def verify_email(payload: EmailVerifyRequest, db: Session = Depends(get_db)) -> Any:
    """
    Validates email format and checks whether it already exists in the database.
    """
    clean_email = (payload.email or "").strip().lower()
    is_valid = validate_email_format(clean_email)
    
    if not is_valid:
        return {
            "email": clean_email,
            "is_valid_format": False,
            "exists_in_database": False,
            "message": "Invalid email address format."
        }
    
    existing = db.query(User).filter(User.email.ilike(clean_email)).first()
    if existing:
        return {
            "email": clean_email,
            "is_valid_format": True,
            "exists_in_database": True,
            "message": "Email is already registered. Please log in."
        }
    
    return {
        "email": clean_email,
        "is_valid_format": True,
        "exists_in_database": False,
        "message": "Email format is valid and available for registration."
    }


@router.post("/signup", response_model=Token, status_code=status.HTTP_201_CREATED)
def signup(user_in: UserCreate, db: Session = Depends(get_db)) -> Any:
    """
    Register a new user (Citizen or Officer).
    """
    clean_email = user_in.email.strip().lower()
    if not validate_email_format(clean_email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email format. Please provide a valid email address."
        )

    existing = db.query(User).filter(User.email.ilike(clean_email)).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email address already exists. Please log in."
        )
    
    user = User(
        email=clean_email,
        hashed_password=get_password_hash(user_in.password),
        full_name=user_in.full_name,
        role=user_in.role or UserRole.CITIZEN,
        phone=user_in.phone,
        ward=user_in.ward or "Ward 12",
        department=user_in.department
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    token = create_access_token(subject=user.id)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }


@router.post("/login", response_model=Token)
def login(user_in: UserLogin, db: Session = Depends(get_db)) -> Any:
    """
    JSON-based login for web clients with strict email existence check.
    """
    clean_email = user_in.email.strip().lower()
    user = db.query(User).filter(User.email.ilike(clean_email)).first()
    
    # Explicitly verify email existence first
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No account found with this email address. Please sign up first."
        )
    
    # Verify password
    if not verify_password(user_in.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password. Please verify and try again."
        )
    
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user account. Please contact municipal administrator."
        )

    token = create_access_token(subject=user.id)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }


@router.post("/login-form", response_model=Token)
def login_form(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)) -> Any:
    """
    OAuth2 standard password form login for Swagger docs.
    """
    clean_email = form_data.username.strip().lower()
    user = db.query(User).filter(User.email.ilike(clean_email)).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No account found with this email address. Please sign up first."
        )
    if not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password. Please verify and try again."
        )
    token = create_access_token(subject=user.id)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }


@router.get("/me", response_model=UserOut)
def read_current_user(current_user: User = Depends(get_current_user)) -> Any:
    """
    Get current logged-in user profile.
    """
    return current_user


@router.put("/me", response_model=UserOut)
def update_current_user(
    update_data: UserUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
) -> Any:
    """
    Update profile details for the current user.
    """
    if update_data.full_name is not None:
        current_user.full_name = update_data.full_name
    if update_data.phone is not None:
        current_user.phone = update_data.phone
    if update_data.ward is not None:
        current_user.ward = update_data.ward
    if update_data.department is not None:
        current_user.department = update_data.department

    db.commit()
    db.refresh(current_user)
    return current_user
