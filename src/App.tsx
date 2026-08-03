import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  async function fetchTodos() {
    const response = await fetch("http://localhost:8000/todos/");
    const data = await response.json();
    setTodos(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo(newTodo) {
    const response = await fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    const todo = await response.json();

    setTodos([...todos, todo]);
  }

  async function deleteTodo(todoId) {
    await fetch(`http://localhost:8000/todos/${todoId}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((item) => item.id !== todoId));
  }

  function editTodo(todo) {
    setEditingTodo(todo);
  }

  async function updateTodo(updatedTodo) {
    const response = await fetch(
      `http://localhost:8000/todos/${editingTodo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      }
    );

    const todo = await response.json();

    const newArray = todos.map((item) => {
      if (item.id === todo.id) {
        return todo;
      }
      return item;
    });

    setTodos(newArray);
    setEditingTodo(null);
  }

  return (
    <div>
      <TodoForm
        addTodo={addTodo}
        editingTodo={editingTodo}
        updateTodo={updateTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;