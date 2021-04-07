const Todo = ({todo, handleCompleted}) => {
    return ( 
        <div style={{display: 'flex', margin: '20px'}}>

            <div className='checkbox' onClick={() => handleCompleted(todo)}>
                {!todo.completed ? "[]" : "[@]"}
            </div>

            <h2 style={{margin: '0 20px'}}>{todo.title}</h2>
            <div className="delete" style={{margin: '0 20px'}}>X</div>
        </div>
     );
}
 
export default Todo;