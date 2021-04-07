import Todo from './Todo';

const ListTodos = ({todos, handleCompleted }) => {
    return ( 
        <div>
            {todos.map((todo, index) => <Todo key= {index} 
                todo={todo} 
                handleCompleted={handleCompleted}
            />)}
        </div>
     );
}
 
export default ListTodos;