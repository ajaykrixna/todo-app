import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

async function fetchTodos() {
  try {
    const response = await fetch("http://localhost:8000/todos/");
    const data = await response.json();
    setTodos(data);
  } 
  catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo(newTodo) {
    try {
      const response = await fetch("http://localhost:8000/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const todo = await response.json();

      setTodos([...todos, todo]);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTodo(todoId) {
    try {
      const response = await fetch(`http://localhost:8000/todos/${todoId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      setTodos(todos.filter((item) => item.id !== todoId));
    } catch (error) {
      console.log(error);
    }
  }

  function editTodo(todo) {
    setEditingTodo(todo);
  }

  async function updateTodo(updatedTodo) {
    try {
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

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      const todo = await response.json();

      const newArray = todos.map((item) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      });

      setTodos(newArray);
      setEditingTodo(null);
    } catch (error) {
      console.log(error);
    }
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