import { useEffect, useState } from 'react';

import './App.css';
import Title from './components/Title';
import Filters from './components/Filters';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(todos);
  }, [todos])

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

  const selectAllTodos = () => {
    setTodoList([...todos]);
  }

  const selectActiveTodos = () => {
    setTodoList([...todos.filter(item => item.completed === false)]);
  }

  const selectCompletedTodos = () => {
    setTodoList([...todos.filter(item => item.completed === true)]);
  }


  return (
    <div className="app">
      <Title />
      <Filters 
        selectAllTodos={selectAllTodos}
        selectActiveTodos={selectActiveTodos}
        selectCompletedTodos={selectCompletedTodos}
      />
      <NewTodo getTodo={getTodo} />
      <TodoList 
        todos={todoList}
        handleCompleted={handleCompleted} 
      />
    </div>
  );
}

export default App;
