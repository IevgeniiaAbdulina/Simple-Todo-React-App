import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        margin: theme.spacing(3, 0),
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
}));

const NewTodo = ({ getTodo, showNewTodo }) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) {
            return
        } else {
            getTodo(value);
        }
        setValue('');
    }

    return ( 
        <>
            {showNewTodo && 
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} className={classes.container}>
                        <Grid item xs={12} sm={8}>
                            <TextField 
                                variant="outlined"
                                style={{backgroundColor: 'white'}}
                                fullWidth
                                size="small"
                                onChange={handleChange} 
                                type='text' 
                                value={value}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button 
                                fullWidth
                                type="submit" 
                                variant='contained' 
                                color='primary'
                                size="medium"
                                className={classes.button}
                            >
                                Add new
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            }
        </>
     );
}
 
export default NewTodo;