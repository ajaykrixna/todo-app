from sqlalchemy.orm import Session
from app.models.todo import Todo


class TodoRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, todo: Todo):
        self.db.add(todo)
        self.db.commit()
        self.db.refresh(todo)
        return todo

    def get_all(self):
        return self.db.query(Todo).all()

    def get_by_id(self, todo_id: int):
        return self.db.query(Todo).filter(Todo.id == todo_id).first()

    def delete(self, todo: Todo):
        self.db.delete(todo)
        self.db.commit()

