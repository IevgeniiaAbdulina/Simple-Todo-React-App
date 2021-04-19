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
        },
    },
    button: {
        background:  'linear-gradient(to right top, #D65DB1, #FF6F91, #FF9671)',
        borderRadius: 24,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 111, 145, .3)',
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
            <Button 
                className={classes.button}
                type="submit" 
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