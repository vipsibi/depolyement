# HotelHub backend

## PostgreSQL setup

1. Create a database named `hotelhub` in pgAdmin or `psql`:

```sql
CREATE DATABASE hotelhub;
```

2. Copy `.env.example` to `.env` and replace `YOUR_PASSWORD` with the password created during PostgreSQL installation.

3. Start the API:

```powershell
npm run dev
```

The API runs at `http://localhost:5000`. The `hotels` table and six starter hotels are created automatically on first start.

The frontend expects the API at `http://localhost:5000/api`. Set `VITE_USE_MOCK=true` in the frontend environment only when practicing without PostgreSQL.

## Production environment

For a Supabase PostgreSQL database, configure the backend host with:

```env
NODE_ENV=production
DB_SSL=true
DATABASE_URL=your-supabase-postgresql-connection-string
FRONTEND_URLS=https://your-vercel-domain.vercel.app
```

`FRONTEND_URLS` may contain multiple comma-separated frontend origins. The database pool uses TLS for Supabase, including when running locally. Keep `DATABASE_URL` server-side and never add it to frontend or `VITE_*` environment variables.

## Deploy this backend to Vercel

Set the Vercel project Root Directory to `backend`. Vercel will use `api/index.js` as the serverless entrypoint. Add these Vercel environment variables:

```env
NODE_ENV=production
DB_SSL=true
DATABASE_URL=your-supabase-postgresql-connection-string
FRONTEND_URLS=https://your-frontend.vercel.app
```

The API health endpoint is:

```text
https://your-backend.vercel.app/api/health
```

Vercel filesystems are temporary. Uploaded images are written to `/tmp` in the serverless runtime and should be moved to Supabase Storage or another persistent object store for production.