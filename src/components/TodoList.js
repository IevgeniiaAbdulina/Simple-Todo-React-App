import { Box, Button, makeStyles } from '@material-ui/core';
import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        marginBottom: theme.spacing(4),
        '& > *': {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        overflow: 'hidden'
        },
    }
}))

const ListTodos = ({todos, handleCompleted, showDeleteButton, deleteAllTodos, deleteOneTodo }) => {
    const classes = useStyles(); 
    
    return ( 
        <Box flexGrow={1} className={classes.root}>
            {todos.map((todo) => 
                <Todo key= {todo.id} 
                    todo={todo} 
                    handleCompleted={handleCompleted}
                    deleteOneTodo={deleteOneTodo}
                    showDeleteButton={showDeleteButton}
                />)}
            {showDeleteButton && 
            <Button type="submit" 
                variant='contained' 
                color='primary' 
                onClick={deleteAllTodos}
            >
                Delete All Completed Todos
            </Button>}
        </Box>
     );
}
 
export default ListTodos;