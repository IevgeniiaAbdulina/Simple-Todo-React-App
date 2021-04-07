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
        <div style={{margin: '20px'}}>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}type='text' value={value} />
                <input type="submit" value='Add New' />
            </form>
        </div>
     );
}
 
export default NewTodo;