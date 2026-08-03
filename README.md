# Full-Stack Todo App

A simple full-stack Todo application built with **React**, **FastAPI**, and **SQLite**.

## Features

- Create a todo
- View all todos
- Update a todo
- Delete a todo
- Frontend and backend integration
- Error handling for API requests

## Tech Stack

### Frontend
- React
- Vite
- JavaScript

### Backend
- FastAPI
- SQLAlchemy
- SQLite

## Project Structure

```
todo-app/
├── src/                 # React frontend
└── todo-backend/        # FastAPI backend
```

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

### Backend

```bash
cd todo-backend
.\venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload
```

Runs on:

```
http://127.0.0.1:8000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a todo |
| PUT | `/todos/{id}` | Update a todo |
| DELETE | `/todos/{id}` | Delete a todo |

## Author

Ajay
