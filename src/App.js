import { useEffect, useState } from 'react';

import './App.css';
import Title from './components/Title';
import Filters from './components/Filters';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    setTodoList(todos);
  }, [todos])

  const getTodo = (todo) => {
    setTodos([
      ...todos,
      {
        title: todo,
        completed: false,
        id: Math.floor(Math.random() * 100)
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
    setShowDeleteButton(false);
  }

  const selectActiveTodos = () => {
    setTodoList([...todos.filter(item => item.completed === false)]);
    setShowDeleteButton(false);
  }

  const selectCompletedTodos = () => {
    setTodoList([...todos.filter(item => item.completed === true)]);
    setShowDeleteButton(true);
  }

  const deleteOneTodo = (todo) => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }

  const deleteAllTodos =() => {
    setTodos([...todos.filter(item => item.completed === false)]);
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
        showDeleteButton={showDeleteButton}
        deleteAllTodos={deleteAllTodos}
        deleteOneTodo={deleteOneTodo}
      />
    </div>
  );
}

export default App;
