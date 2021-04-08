import { Button, ButtonGroup } from "@material-ui/core";

const Filters = ({ selectAllTodos, selectActiveTodos, selectCompletedTodos }) => {
    return ( 
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" >
           <Button className='tab active'
               onClick={selectAllTodos}
            >All</Button>
           <Button className='tab active'
               onClick={selectActiveTodos}
            >Active</Button>
           <Button className='tab active'
               onClick={selectCompletedTodos}
            >Completed</Button>
        </ButtonGroup>
     );
}
 
export default Filters;