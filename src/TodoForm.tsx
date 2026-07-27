import {useState} from "react";

function TodoForm(props){
  const[title,setTitle]= useState("")
  const[description,setDescription]=useState("")
  const[dueDate,setDueDate]=useState("")
  const[priority,setPriority]=useState("");

  function handleSubmit(e){
    e.preventDefault();
    const newTodo={title:title, description:description, dueDate:dueDate, priority:priority}
    props.addTodo(newTodo)
    setTitle("")
    setDescription("")
    setDueDate("")
    setPriority("")
    }


return <form onSubmit={handleSubmit}>
    <h2>Add Todo</h2>
    <div>
    <input value={title} placeholder="Add title" onChange={(e)=>setTitle(e.target.value)}/>
    </div>
    <div>
    <textarea placeholder="Add description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </div>
    <div>
    <input type="date" placeholder="Add due date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
    </div>
    <div>
    <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
    </select>
    </div>

    <button type="submit" >Add Todo</button>
</form>
}


export default TodoForm;


