import React, { Component } from 'react';
import './App.css';

import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from './lib/todoHelpers';
import {pipe, partial} from './lib/util';
import {TodoForm, TodoList, Footer} from './components/todo';

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

  handleRemove = (id, evt) => {
    const todos = removeTodo(this.state.todos, id);    
    this.setState({todos: todos});
  }
  
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todo List</h2>
        </div>
        <div className="Todo">
          {this.state.errorMessage}
          <TodoForm 
            onChange={this.onChangeInput} 
            currentTodo={this.state.currentTodo }
            handleSubmit={submitHandler }/>
          <TodoList 
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove} 
            todos={this.state.todos}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;