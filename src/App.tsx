import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function App(){

  const[todos, setTodos] = useState([]);
  const[editingTodo,setEditingTodo] = useState(null);

  function addTodo(newtodo){
    setTodos([...todos, newtodo])
  }

  function deleteTodo(clickedIndex){
    setTodos(todos.filter((item, index) => index !== clickedIndex));
  }

  function editTodo(todo){
    setEditingTodo(todo);
  }

  function updateTodo(updatedTodo){
    const newArray = todos.map((item, index) => {
      if(item === editingTodo){
        return updatedTodo;
      }
      else{
        return item;
      }
    });
    setTodos(newArray);
    setEditingTodo(null);
  }


  return <div>

    <TodoForm addTodo={addTodo}
    editingTodo={editingTodo}
    updateTodo={updateTodo}
    />

    <TodoList 
    todos={todos}
    deleteTodo={deleteTodo}
    editTodo={editTodo}
    />

    
  </div>
}

export default App;
