import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: 'Learn React', isComplete: false},
        { id: 2, name: 'Learn Vue', isComplete: true},
        { id: 3, name: 'Learn Redux', isComplete: false}
      ],
      currentTodo: ''
    }
  }

  onChangeInput(evt) {
    console.log('onchange');
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <TodoForm 
          onChangeInput={ this.onChangeInput.bind(this)} 
          currentTodo={ this.state.currentTodo }/>
        <TodoList todos={ this.state.todos}/>
      </div>
    );
  }
}

export default App;
