const Todo = () => {
    return ( 
        <div style={{display: 'flex', margin: '20px'}}>
            <div className='checkbox' style={{margin: '0 20px'}}>[]</div>
            <h2 style={{margin: '0 20px'}}>Todo</h2>
            <div className="delete" style={{margin: '0 20px'}}>X</div>
        </div>
     );
}
 
export default Todo;