const Filters = ({ selectAllTodos, selectActiveTodos, selectCompletedTodos }) => {
    return ( 
        <div style={{display: 'flex', margin: '20px'}}>
           <div className='tab active'
               style={{margin: '0 20px'}}
               onClick={selectAllTodos}
            >All</div>
           <div className='tab active'
               style={{margin: '0 20px'}}
               onClick={selectActiveTodos}
            >Active</div>
           <div className='tab active'
               style={{margin: '0 20px'}}
               onClick={selectCompletedTodos}
            >Completed</div>
        </div>
     );
}
 
export default Filters;