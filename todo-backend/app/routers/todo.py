from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.repositories.todo_repository import TodoRepository
from app.schemas.todo import TodoCreate
from app.services.todo_service import TodoService


router = APIRouter(prefix="/todos", tags=["Todos"])


def get_todo_service(db: Session = Depends(get_db)):
    repository = TodoRepository(db)
    return TodoService(repository)


@router.post("/")
def create_todo(
    todo_data: TodoCreate,
    service: TodoService = Depends(get_todo_service),
):
    return service.create(todo_data)


@router.get("/")
def get_all_todos(
    service: TodoService = Depends(get_todo_service),
):
    return service.get_all()


@router.get("/{todo_id}")
def get_todo_by_id(
    todo_id: int,
    service: TodoService = Depends(get_todo_service),
):
    return service.get_by_id(todo_id)


@router.put("/{todo_id}")
def update_todo(
    todo_id: int,
    todo_data: TodoCreate,
    service: TodoService = Depends(get_todo_service),
):
    return service.update(todo_id, todo_data)


@router.delete("/{todo_id}")
def delete_todo(
    todo_id: int,
    service: TodoService = Depends(get_todo_service),
):
    service.delete(todo_id)
    return {"message": "Todo deleted successfully"}