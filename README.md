# HotelHub

HotelHub is a full-stack hotel discovery and management application. It includes a React and Vite frontend for browsing, filtering, viewing, adding, editing, and deleting hotels, plus an Express API backed by PostgreSQL.

## Features

- Browse hotels with pagination
- Search hotels by name
- Filter by price range and stay type
- View hotel details, ratings, images, and map locations
- Add, edit, and delete hotels
- Upload hotel images
- PostgreSQL persistence with automatic table creation and starter data
- Mock API mode for running the frontend without a database

## Screenshots

### Home

![HotelHub Home page](documentimage/page%201.png)

### Manage Hotels

![HotelHub Manage Hotels page](documentimage/page%202.png)

### Add Hotel

![HotelHub Add Hotel page](documentimage/page%203.png)

## Tech stack

- **Frontend:** React, Vite, Redux Toolkit, React Router, React Leaflet
- **Backend:** Node.js, Express, PostgreSQL, Multer
- **Database:** PostgreSQL

## Project structure

```text
hotelhub/
├── frontend/       # React/Vite application
├── backend/        # Express API and PostgreSQL integration
└── README.md
```

## Requirements

- Node.js 18 or newer
- npm
- PostgreSQL 14 or newer

## Installation

Install dependencies for both applications:

```powershell
cd frontend
npm install

cd ../backend
npm install
```

## Database setup

1. Make sure PostgreSQL is running.
2. Create a database named `hotelhub`:

   ```sql
   CREATE DATABASE hotelhub;
   ```

3. Create `backend/.env` from `backend/.env.example` and set your PostgreSQL connection string:

   ```env
   PORT=5000
   DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/hotelhub
   ```

The backend creates the `hotels` table and inserts six starter hotels automatically the first time it starts.

## Run locally

Start the backend in one terminal:

```powershell
cd backend
npm run dev
```

The API runs at [http://localhost:5000](http://localhost:5000).

Start the frontend in a second terminal:

```powershell
cd frontend
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

The frontend uses `http://localhost:5000/api` by default. To use a different API URL, create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

## Deploy with Vercel and Supabase

Deploy the `frontend` directory as a Vercel project and keep the Express API deployed on a Node-compatible host. In the Vercel project settings, set:

```env
VITE_API_URL=https://your-api-host.example.com/api
VITE_USE_MOCK=false
```

Set these variables on the backend host:

```env
NODE_ENV=production
DATABASE_URL=your-supabase-postgresql-connection-string
FRONTEND_URLS=https://your-vercel-domain.vercel.app
```

`FRONTEND_URLS` accepts a comma-separated list when both a Vercel preview domain and a custom domain need access. The backend enables PostgreSQL TLS in production for Supabase connections. Do not expose `DATABASE_URL` or Supabase service-role credentials in Vercel `VITE_*` variables. Uploaded images currently use the backend's local `uploads` directory; use persistent storage or object storage if the backend host has an ephemeral filesystem.

## Run without PostgreSQL

The frontend includes a mock API with sample hotel data. Create `frontend/.env` with:

```env
VITE_USE_MOCK=true
```

Then start only the frontend:

```powershell
cd frontend
npm run dev
```

Mock data is stored in `frontend/src/app/data/mockHotels.js`.

## Frontend scripts

Run these commands from `frontend`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## API endpoints

The backend exposes the following routes:

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Check API health |
| `GET` | `/api/hotels` | List, search, filter, and paginate hotels |
| `GET` | `/api/hotels/:id` | Get a hotel by ID |
| `GET` | `/api/hotels/slug/:slug` | Get a hotel by URL slug |
| `POST` | `/api/hotels` | Create a hotel with an image upload |
| `PUT` | `/api/hotels/:id` | Update a hotel |
| `DELETE` | `/api/hotels/:id` | Delete a hotel |

Uploaded images are served from `/uploads`.

## License

This project is for learning and demonstration purposes.
