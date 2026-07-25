import {useState} from 'react';
import TodoForm from './TodoForm';

<TodoForm/>


function App(){

  const[text,setText]=useState("")
  const[todos, setTodos] = useState([]);

  function addTodo(){
    setTodos([...todos, text])
    setText("")

  }

  return <div>
    <h1>Todo App</h1>
    <input type="text" placeholder="Add todo" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={addTodo}>Add Todo</button>
    <ul>
      {todos.map((item,index)=> <li key={index}>{item} </li>)}
    </ul>

    <TodoForm/>
  </div>
}

export default App;
