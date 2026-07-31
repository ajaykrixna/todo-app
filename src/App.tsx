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

  function deleteTodo(clickedIndex) {
    setTodos(todos.filter((item, index) => index !== clickedIndex));
  }

  function editTodo(todo) {
    setEditingTodo(todo);
  }

  function updateTodo(updatedTodo) {
    const newArray = todos.map((item) => {
      if (item === editingTodo) {
        return updatedTodo;
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