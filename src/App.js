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

  return (
    <div className="app">
      <Title />
      <Filters />
      <NewTodo getTodo={getTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
