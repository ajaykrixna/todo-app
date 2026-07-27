import {useState} from 'react';
import TodoForm from './TodoForm';


function App(){

  const[todos, setTodos] = useState([]);

  function addTodo(newtodo){
    setTodos([...todos, newtodo])
  }

  return <div>

    <TodoForm addTodo={addTodo}/>
    
    <ul>
      {todos.map((item,index)=> <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.dueDate}</p>
        <p>{item.priority}</p>
      </div>
    )}
    </ul>
    
  </div>
}

export default App;
