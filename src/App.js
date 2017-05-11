import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/todoHelpers.js';
import {pipe, partial} from './lib/util';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';

class App extends Component {

  // ES6 Property initializer
  state = {
      todos: [
        { id: 1, name: 'Learn React', isComplete: false},
        { id: 2, name: 'Learn Vue', isComplete: true},
        { id: 3, name: 'Learn Redux', isComplete: false}
      ],
      currentTodo: '',
      errorMessage: ''
  }

  onChangeInput = evt => {
    this.setState({currentTodo: evt.target.value, errorMessage: ''});
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {id: newId,name: this.state.currentTodo,isComplete: false}
    const updatedTodo = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodo,
      currentTodo: ''
    });
  }

  handleEmptySubmit = evt => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please enter a todo'
    });
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({todos: updatedTodos});
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        {this.state.errorMessage}
        <TodoForm 
          onChangeInput={this.onChangeInput} 
          currentTodo={this.state.currentTodo }
          handleSubmit={submitHandler } />
        <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
