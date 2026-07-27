function TodoList(props){

    return props.todos.map((item,index)=> <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.dueDate}</p>
        <p>{item.priority}</p>
      </div>
    )
}

export default TodoList;