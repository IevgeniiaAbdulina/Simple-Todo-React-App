import './App.css';
import Title from './components/Title';
import Filters from './components/Filters';
import NewTodo from './components/NewTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <div className="App">
      <Title />
      <Filters />
      <NewTodo />
      <ListTodos />
    </div>
  );
}

export default App;
