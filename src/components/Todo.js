const Todo = ({todo, handleCompleted, showDeleteButton, deleteOneTodo}) => {
    return ( 
        <div style={{display: 'flex', margin: '20px'}}>

            <div className='checkbox' onClick={() => handleCompleted(todo)}>
                {!todo.completed ? "[]" : "[@]"}
            </div>

            <h2 style={{margin: '0 20px'}}>{todo.title}</h2>
            {showDeleteButton && <div 
                    className="delete" 
                    style={{margin: '0 20px'}}
                    onClick={() => deleteOneTodo(todo)}
                >X</div>}
            
        </div>
     );
}
 
export default Todo;