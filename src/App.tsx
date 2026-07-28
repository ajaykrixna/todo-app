import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function App(){

  const[todos, setTodos] = useState([]);

  function addTodo(newtodo){
    setTodos([...todos, newtodo])
  }

  function deleteTodo(clickedIndex){
    setTodos(todos.filter((item, index) => index !== clickedIndex));
  }

  return <div>

    <TodoForm addTodo={addTodo}/>

    <TodoList 
    todos={todos}
    deleteTodo={deleteTodo}
    />

    
  </div>
}

export default App;
