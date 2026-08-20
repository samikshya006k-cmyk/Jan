import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.core.database import Base, get_db
from app.db.seed import seed_database
from main import app

# Setup in-memory SQLite database for testing
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

test_engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=test_engine)


def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db


@pytest.fixture(scope="module", autouse=True)
def setup_test_db():
    Base.metadata.create_all(bind=test_engine)
    db = TestingSessionLocal()
    seed_database(db)
    db.close()
    yield
    Base.metadata.drop_all(bind=test_engine)


@pytest.fixture
def client():
    return TestClient(app)


def test_root_and_health(client):
    res = client.get("/")
    assert res.status_code == 200
    assert "JanSetu" in res.json()["app"]

    res_health = client.get("/health")
    assert res_health.status_code == 200
    assert res_health.json()["status"] == "online"


def test_auth_login_citizen(client):
    res = client.post("/api/v1/auth/login", json={
        "email": "citizen@jansetu.in",
        "password": "password123"
    })
    assert res.status_code == 200
    data = res.json()
    assert "access_token" in data
    assert data["user"]["email"] == "citizen@jansetu.in"
    assert data["user"]["role"] == "citizen"


def test_auth_login_officer(client):
    res = client.post("/api/v1/auth/login", json={
        "email": "officer@jansetu.in",
        "password": "password123"
    })
    assert res.status_code == 200
    data = res.json()
    assert "access_token" in data
    assert data["user"]["role"] == "officer"


def test_auth_signup_new_user(client):
    res = client.post("/api/v1/auth/signup", json={
        "email": "newcitizen@jansetu.in",
        "password": "strongpassword123",
        "full_name": "Ramesh Patnaik",
        "role": "citizen",
        "ward": "Ward 14"
    })
    assert res.status_code == 201
    data = res.json()
    assert data["user"]["email"] == "newcitizen@jansetu.in"
    assert data["user"]["ward"] == "Ward 14"


def test_ai_triage_preview(client):
    # Test Road Pothole in Hindi/English
    res = client.post("/api/v1/triage/preview", json={
        "description": "यूनिट 4 मार्केट के पास बड़ा गड्ढा है, dangerous pothole on main road",
        "language": "hi"
    })
    assert res.status_code == 200
    data = res.json()
    assert data["category"] == "Road & Infrastructure"
    assert "Road" in data["suggested_department"]
    assert data["priority"] in ["Critical", "High"]

    # Test Water Leak
    res_water = client.post("/api/v1/triage/preview", json={
        "description": "Drinking water pipeline leakage flooding the street for 2 days",
        "language": "en"
    })
    assert res_water.status_code == 200
    data_water = res_water.json()
    assert data_water["category"] == "Water Supply"


def test_grievance_workflow(client):
    # 1. Login as citizen
    login_res = client.post("/api/v1/auth/login", json={
        "email": "citizen@jansetu.in",
        "password": "password123"
    })
    token = login_res.json()["access_token"]
    auth_headers = {"Authorization": f"Bearer {token}"}

    # 2. Submit new grievance
    grievance_payload = {
        "title": "Broken sewage drain near market",
        "description": "Sewage drain line is overflowing with dirty wastewater near Sector 5 market entrance.",
        "category": "Drainage",
        "latitude": 20.2950,
        "longitude": 85.8230,
        "landmark": "Sector 5 Market",
        "ward": "Ward 12"
    }
    create_res = client.post("/api/v1/grievances/", json=grievance_payload, headers=auth_headers)
    assert create_res.status_code == 201
    g_data = create_res.json()
    assert g_data["ticket_id"].startswith("JS-")
    assert g_data["category"] == "Drainage"
    assert g_data["status"] == "Pending"
    grievance_id = g_data["id"]

    # 3. Retrieve list and verify filtering
    list_res = client.get("/api/v1/grievances/?category=Drainage")
    assert list_res.status_code == 200
    assert len(list_res.json()) >= 1

    # 4. Fetch detail
    detail_res = client.get(f"/api/v1/grievances/{grievance_id}")
    assert detail_res.status_code == 200
    assert detail_res.json()["ticket_id"] == g_data["ticket_id"]
    assert len(detail_res.json()["history"]) >= 1

    # 5. Officer status update
    officer_login = client.post("/api/v1/auth/login", json={
        "email": "officer@jansetu.in",
        "password": "password123"
    })
    officer_token = officer_login.json()["access_token"]
    officer_headers = {"Authorization": f"Bearer {officer_token}"}

    update_res = client.patch(
        f"/api/v1/grievances/{grievance_id}/status",
        json={
            "status": "In Progress",
            "comments": "Sewer cleaning squad scheduled for inspection.",
            "resolution_notes": "Inspection in progress."
        },
        headers=officer_headers
    )
    assert update_res.status_code == 200
    assert update_res.json()["status"] == "In Progress"

    # 6. Citizen Upvote / Support
    support_res = client.post(f"/api/v1/grievances/{grievance_id}/support", headers=auth_headers)
    assert support_res.status_code == 200
    assert support_res.json()["supported"] is True


def test_participatory_budget_and_voting(client):
    # Login citizen
    login_res = client.post("/api/v1/auth/login", json={
        "email": "citizen@jansetu.in",
        "password": "password123"
    })
    token = login_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # List projects
    res = client.get("/api/v1/budget/projects", headers=headers)
    assert res.status_code == 200
    projects = res.json()
    assert len(projects) >= 4
    project_id = projects[0]["id"]
    initial_votes = projects[0]["vote_count"]

    # Vote on project
    vote_res = client.post(f"/api/v1/budget/projects/{project_id}/vote", json={"vote_type": "support"}, headers=headers)
    assert vote_res.status_code == 200
    assert vote_res.json()["vote_count"] == initial_votes + 1

    # Get budget summary
    summary_res = client.get("/api/v1/budget/summary")
    assert summary_res.status_code == 200
    assert summary_res.json()["total_projects"] >= 4


def test_civic_map_and_hotspots(client):
    # Map points
    res = client.get("/api/v1/map/points")
    assert res.status_code == 200
    data = res.json()
    assert data["type"] == "FeatureCollection"
    assert len(data["features"]) >= 1

    # Hotspots
    hotspots_res = client.get("/api/v1/map/hotspots")
    assert hotspots_res.status_code == 200
    assert "hotspots" in hotspots_res.json()


def test_analytics_endpoints(client):
    # Citizen analytics
    res_citizen = client.get("/api/v1/analytics/citizen")
    assert res_citizen.status_code == 200
    c_data = res_citizen.json()
    assert "reports_submitted" in c_data
    assert "community_impact" in c_data

    # Officer analytics
    res_officer = client.get("/api/v1/analytics/officer")
    assert res_officer.status_code == 200
    o_data = res_officer.json()
    assert "total_grievances" in o_data
    assert "resolution_rate_percent" in o_data


def test_notifications(client):
    login_res = client.post("/api/v1/auth/login", json={
        "email": "citizen@jansetu.in",
        "password": "password123"
    })
    token = login_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    res = client.get("/api/v1/notifications/", headers=headers)
    assert res.status_code == 200
    notifs = res.json()
    assert len(notifs) >= 1
    notif_id = notifs[0]["id"]

    # Mark as read
    patch_res = client.patch(f"/api/v1/notifications/{notif_id}/read", headers=headers)
    assert patch_res.status_code == 200
    assert patch_res.json()["is_read"] is True
