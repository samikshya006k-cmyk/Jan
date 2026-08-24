# ☁️ JanSetu Cloud Deployment & Production Configuration Guide

This guide details how to configure **JanSetu** with a secure **Cloud PostgreSQL Database** (Railway, Supabase, Neon, AWS RDS), configure production environment variables, and deploy to cloud platforms.

---

## 1. 📋 Environment Variables Overview

Create or configure a `.env` file in the root directory (or inject via your Cloud Provider's Dashboard):

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `DATABASE_URL` | Cloud PostgreSQL or Local SQLite Connection URI | `postgresql://user:pass@host:5432/dbname` or `sqlite:///./jansetu.db` |
| `SECRET_KEY` | High-entropy secret string for JWT HS256 encryption | `jansetu-production-secret-jwt-key-2026-xyz` |
| `GEMINI_API_KEY` | Google Gemini API Key for AI Triage & Vision Analysis | `AIzaSy...` |
| `GEMINI_MODEL` | Gemini Model identifier | `gemini-1.5-flash` |
| `GOOGLE_MAPS_API_KEY` | Optional Google Maps JS API key for Satellite view | `AIzaSy...` (Falls back to Leaflet/OSM) |
| `PORT` | Web server listening port | `8000` |

---

## 2. 🗄️ Cloud PostgreSQL Setup Options

JanSetu automatically normalizes `postgres://` URLs into SQLAlchemy 2.0-compliant `postgresql://` strings, manages connection health checks (`pool_pre_ping=True`), and auto-initializes all tables and seed records on first launch.

### Option A: Railway PostgreSQL
1. Create a project on [Railway.app](https://railway.app).
2. Click **+ New** $\rightarrow$ **Database** $\rightarrow$ **Add PostgreSQL**.
3. In the PostgreSQL service, navigate to the **Variables** tab and copy `DATABASE_URL`.
4. In your JanSetu application service, add the environment variable `DATABASE_URL` with the copied URI.

### Option B: Supabase PostgreSQL
1. Create a database on [Supabase.com](https://supabase.com).
2. Navigate to **Project Settings** $\rightarrow$ **Database** $\rightarrow$ **Connection String** (URI mode, Transaction or Session pooler port `5432` or `6543`).
3. Set `DATABASE_URL` in your environment:
   ```bash
   DATABASE_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres"
   ```

### Option C: Neon Serverless PostgreSQL
1. Create a project on [Neon.tech](https://neon.tech).
2. Copy the connection string from the dashboard and set `DATABASE_URL`.

---

## 3. 🚀 One-Click Deployment to Railway

1. Push your repository to GitHub (`git push origin main`).
2. Go to [Railway Dashboard](https://railway.app) $\rightarrow$ **+ New Project** $\rightarrow$ **Deploy from GitHub repo**.
3. Select your `JanSetu` repository.
4. Add the following **Variables** in the Railway service settings:
   - `DATABASE_URL`: *(Your cloud PostgreSQL URI or attach Railway PostgreSQL)*
   - `SECRET_KEY`: *(Generate a 32+ character random string)*
   - `GEMINI_API_KEY`: *(Optional: your Gemini API key)*
5. Railway will automatically detect the `Dockerfile`, build the container, and deploy your live URL.

---

## 4. 🐳 Running Locally or on VPS with Docker Compose

To run JanSetu and a production-grade PostgreSQL database on your local machine or Linux VPS:

```bash
# 1. Clone repository
git clone https://github.com/samikshya006k-cmyk/Jan.git
cd JanSetu-main

# 2. Build and start containers
docker compose up -d --build

# 3. Check logs & status
docker compose logs -f jansetu-app

# 4. Open in browser
http://localhost:8000
```

---

## 5. 🔒 Security & Email Verification Highlights

- **Bcrypt Password Hashing**: Passwords are never stored in plaintext (`bcrypt.hashpw(..., gensalt())`).
- **Strict Registration Check (`POST /api/v1/auth/signup`)**:
  - Validates RFC-compliant email structure.
  - Returns `400 Bad Request` if email is already registered.
- **Strict Login Verification (`POST /api/v1/auth/login`)**:
  - Returns `404 Not Found` if the email is not registered.
  - Returns `401 Unauthorized` if password is incorrect.
- **Email Verification Endpoint (`POST /api/v1/auth/verify-email`)**:
  - Returns `{ "email": "...", "is_valid_format": bool, "exists_in_database": bool, "message": "..." }`.

---

## 6. 🧪 Running Backend Automated Tests

```bash
cd backend
./venv/bin/pytest test_backend.py -v
```
