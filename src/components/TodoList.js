import Todo from './Todo';

const ListTodos = ({todos}) => {
    return ( 
        <div>
            {todos.map((todo, index) => <Todo key= {index} todo={todo} />)}
        </div>
     );
}
 
export default ListTodos;