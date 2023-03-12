import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

// import { bake_cookie, read_cookie } from 'sfcookies';

class App extends Component {
  
  state = {

     todos: [
       {id: 1, content: 'Buy some milk'},
       {id: 2, content: 'Do my homework'}
     ]
  }




   componentDidMount() {
    
    //localStorage.getItem('todos');
   }

  

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    //localStorage.setItem('todos', JSON.stringify(todos));


    this.setState({
      todos
    });

  }



  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });


  }
  
  
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1 style={{color: "blue"}}>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
