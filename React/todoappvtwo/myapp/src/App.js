import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toogleTodoHandler = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}
    ))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;
  console.log(completedTodoCount)
  
  return (
    <div className="App">
      <h1>Todo App</h1>
     <TodoForm addTodo={addTodoHandler}/>
     {!!todos.length && <><TodosActions resetTodos={resetTodosHandler} deleteCompletedTodos={deleteCompletedTodosHandler}/>
     <TodoList todos={todos} deleteTodo={deleteTodoHandler} toogleTodo={toogleTodoHandler} completedTodosExist={!!completedTodoCount}/></>}
    </div>
  );
}

export default App;
