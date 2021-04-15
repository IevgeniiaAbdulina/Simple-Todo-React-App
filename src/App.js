import { useEffect, useState } from 'react';

import './App.css';
import Title from './components/Title';
import Filters from './components/Filters';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Attribution from './components/Attribution';
import { Container } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showNewTodo, setShowNewTodo] = useState(true);

  useEffect(() => {
    const localStorageList = localStorage.getItem('todo-list');
    if(!localStorageList) {
      return null
    } else {
      setTodos(JSON.parse(localStorageList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
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
    setShowNewTodo(true);
  }

  const selectActiveTodos = () => {
    setTodoList([...todos.filter(item => item.completed === false)]);
    setShowDeleteButton(false);
    setShowNewTodo(true);
  }

  const selectCompletedTodos = () => {
    setTodoList([...todos.filter(item => item.completed === true)]);
    setShowDeleteButton(true);
    setShowNewTodo(false);
  }

  const deleteOneTodo = (todo) => {
    setTodos(todos.filter(item => item.id !== todo.id));
    selectAllTodos();
  }

  const deleteAllTodos =() => {
    setTodos([...todos.filter(item => item.completed === false)]);
    selectAllTodos();
  }


  return (
    <Container component="main" maxWidth="sm">
      <div style={{ marginTop: '10%'}}>
        <Title />
        <Filters 
          selectAllTodos={selectAllTodos}
          selectActiveTodos={selectActiveTodos}
          selectCompletedTodos={selectCompletedTodos}
        />
        <NewTodo 
          getTodo={getTodo} 
          showNewTodo={showNewTodo}
        />
        <TodoList 
          todos={todoList}
          handleCompleted={handleCompleted} 
          showDeleteButton={showDeleteButton}
          deleteAllTodos={deleteAllTodos}
          deleteOneTodo={deleteOneTodo}
        />
        <Attribution />
      </div>
    </Container>
  );
}

export default App;
