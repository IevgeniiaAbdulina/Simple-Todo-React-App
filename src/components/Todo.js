import { Box, CardActionArea, Checkbox, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'nowrap',
        margin: {
            margin: theme.spacing(1, 0),
          }
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    typography: {
        margin: '0 20',
        alignSelf: 'center',
    },
    box: {
        overflow: 'hidden'
    },
  }));

const Todo = ({todo, handleCompleted, showDeleteButton, deleteOneTodo }) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if(!todo.completed) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    }, [todo.completed])
   
  
    return ( 
        <CardActionArea style={{ padding: 0}}>
            <Paper className={classes.root}>
                <Box display="flex" p={1} bgcolor="background.paper" className={classes.box}>
                    <Checkbox
                        color="primary"
                        checked={checked}
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                        onChange={() => handleCompleted(todo)}
                    />
                    <Typography 
                        className={classes.typography}
                        variant="h5" 
                        component="h2"
                    >
                        {todo.title}
                    </Typography>
                </Box>
                <Box p={1}>
                    {showDeleteButton && 
                    <IconButton 
                        onClick={() => deleteOneTodo(todo)} 
                        aria-label="delete" 
                        className={classes.margin}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>}
                </Box>
            </Paper>
        </CardActionArea>
    );
}
 
export default Todo;