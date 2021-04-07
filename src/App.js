import { useState } from 'react';

import './App.css';
import Title from './components/Title';
import Filters from './components/Filters';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodo = (todo) => {
    setTodos([
      ...todos,
      {
        title: todo,
        completed: false
      }
    ]);
  }

  const handleCompleted =(todo) => {
    console.log('handleCompleted', todo);
    setTodos(todos.map(item => {
      if(item === todo) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="app">
      <Title />
      <Filters />
      <NewTodo getTodo={getTodo} />
      <TodoList 
        todos={todos}
        handleCompleted={handleCompleted} 
      />
    </div>
  );
}

export default App;
