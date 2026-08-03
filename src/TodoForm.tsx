import { useEffect, useState } from "react";

function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
  console.log(props.editingTodo);

  if (props.editingTodo) {
    setTitle(props.editingTodo.title);
    setDescription(props.editingTodo.description);
    setDueDate(props.editingTodo.dueDate || "");
    setPriority(props.editingTodo.priority || "Low");
  }
  }, [props.editingTodo]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      completed: false,
    };

    if (props.editingTodo) {
      props.updateTodo(newTodo);
    } else {
      props.addTodo(newTodo);
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>{props.editingTodo ? "Update Todo" : "Add Todo"}</h2>

      <div>
        <input
          value={title}
          placeholder="Add title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <textarea
          value={description}
          placeholder="Add description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button type="submit">
        {props.editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default TodoForm;