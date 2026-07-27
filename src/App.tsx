import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function App(){

  const[todos, setTodos] = useState([]);

  function addTodo(newtodo){
    setTodos([...todos, newtodo])
  }

  return <div>

    <TodoForm addTodo={addTodo}/>

    <TodoList todos={todos}/>

    
  </div>
}

export default App;
