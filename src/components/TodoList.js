import { Button, makeStyles } from '@material-ui/core';
import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        '& > *': {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        width: theme.spacing(58),
        height: theme.spacing(10),
        overflow: 'hidden'
        },
    }
}))

const ListTodos = ({todos, handleCompleted, showDeleteButton, deleteAllTodos, deleteOneTodo }) => {
    const classes = useStyles(); 
    
    return ( 
        <div className={classes.root}>
            {todos.map((todo) => <Todo key= {todo.id} 
                todo={todo} 
                handleCompleted={handleCompleted}
                deleteOneTodo={deleteOneTodo}
                showDeleteButton={showDeleteButton}
            />)}
            {showDeleteButton && <Button type="submit" 
                        variant='contained' 
                        color='primary' 
                        onClick={deleteAllTodos}>Delete All Todos</Button>}
            

        </div>
     );
}
 
export default ListTodos;