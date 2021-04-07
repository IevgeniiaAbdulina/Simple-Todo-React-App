import Todo from './Todo';

const ListTodos = ({todos, handleCompleted, showDeleteButton, deleteAllTodos, deleteOneTodo }) => {
    return ( 
        <div>
            {todos.map((todo) => <Todo key= {todo.id} 
                todo={todo} 
                handleCompleted={handleCompleted}
                deleteOneTodo={deleteOneTodo}
                showDeleteButton={showDeleteButton}
            />)}
            {showDeleteButton && <button type="submit" onClick={deleteAllTodos}>Delete All</button>}
            

        </div>
     );
}
 
export default ListTodos;