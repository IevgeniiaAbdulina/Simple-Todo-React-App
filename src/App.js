// import { useState, useEffect } from 'react';

import './App.css';
import Title from './components/Title';
import Filters from './components/Filters';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="app">
      <Title />
      <Filters />
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
