import { useState } from "react";

const NewTodo = () => {
    const [todo, setTodo] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo(value);
        setValue('');
    }

    return ( 
        <div style={{margin: '20px'}}>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}type='text' value={value} />
                <input type="submit" value='Add New' />
            </form>
            {'Todo: ', todo}
        </div>
     );
}
 
export default NewTodo;