from app.models.todo import Todo
from app.repositories.todo_repository import TodoRepository
from app.schemas.todo import TodoCreate


class TodoService:
    def __init__(self, repository: TodoRepository):
        self.repository = repository

    def create(self, todo_data: TodoCreate):
        todo = Todo(
            title=todo_data.title,
            description=todo_data.description,
            completed=todo_data.completed,
        )

        return self.repository.create(todo)

    def get_all(self):
        return self.repository.get_all()

    def get_by_id(self, todo_id: int):
        todo = self.repository.get_by_id(todo_id)

        if todo is None:
            raise Exception("Todo not found")

        return todo

    def update(self, todo_id: int, todo_data: TodoCreate):
        todo = self.repository.get_by_id(todo_id)

        if todo is None:
            raise Exception("Todo not found")

        todo.title = todo_data.title
        todo.description = todo_data.description
        todo.completed = todo_data.completed

        return self.repository.update(todo)

    def delete(self, todo_id: int):
        todo = self.repository.get_by_id(todo_id)

        if todo is None:
            raise Exception("Todo not found")

        self.repository.delete(todo)