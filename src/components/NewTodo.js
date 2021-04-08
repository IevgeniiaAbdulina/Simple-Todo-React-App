import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";

const NewTodo = ({ getTodo }) => {
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
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <TextField 
                        variant="outlined"
                        fullWidth
                        size="small"
                        onChange={handleChange} 
                        type='text' 
                        value={value} />
                </Grid>
                <Grid item xs={4}>
                    <Button 
                        type="submit" 
                        variant='contained' 
                        color='primary'
                        size="medium"
                        >
                        Add New
                    </Button>
                </Grid>
                
            </Grid>
        </form>
     );
}
 
export default NewTodo;