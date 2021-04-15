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
}));

const NewTodo = ({ getTodo }) => {
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
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} sm={8}>
                    <TextField 
                        variant="outlined"
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
     );
}
 
export default NewTodo;