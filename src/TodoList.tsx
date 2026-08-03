function TodoList(props){

    return props.todos.map((item,index)=> <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.dueDate}</p>
        <p>{item.priority}</p>
        <button onClick={() => props.deleteTodo(item.id)}>Delete</button>
        <button onClick={() => props.editTodo(item)}>Edit</button>
      </div>  
    )
}


export default TodoList;