import { Tab, Tabs } from "@material-ui/core";
import { useState } from "react";

const Filters = ({ selectAllTodos, selectActiveTodos, selectCompletedTodos }) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
    return ( 
        <Tabs 
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            centered
        >
            <Tab label='All' onClick={selectAllTodos} />
            <Tab label='Active' onClick={selectActiveTodos} />
            <Tab label='Completed' onClick={selectCompletedTodos} />
        </Tabs>
     );
}
 
export default Filters;