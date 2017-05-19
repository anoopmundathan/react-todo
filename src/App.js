import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/todoHelpers';
import {pipe, partial} from './lib/util';
import {TodoForm, TodoList, Footer} from './components/todo';
import {fetchTodos, createTodo, saveTodo} from './lib/todoService';

class App extends Component {

  // ES6 Property initializer
  state = {
      todos: [],
      currentTodo: '',
      errorMessage: '',
      message: ''
  }

  static contextTypes = {
    route: PropTypes.string
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
    createTodo(newTodo)
      .then(this.showMessage('Todo added'));
  }

  showMessage = msg => {
    this.setState({message: msg});
    setTimeout(() => this.setState({message: ''}), 2000); 
  }

  handleEmptySubmit = evt => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please enter a todo'
    });
  }

  handleToggle = (id) => {
    const getToggleTodo = pipe(findById, toggleTodo);
    const updated = getToggleTodo(id, this.state.todos);
    const getUpdatedTodos = partial(updateTodo, this.state.todos);
    const updatedTodos = getUpdatedTodos(updated);
    this.setState({todos: updatedTodos});
    saveTodo(updated)
      .then(() => this.showMessage('Todo Updated'))
  }

  handleRemove = (id, evt) => {
    const todos = removeTodo(this.state.todos, id);    
    this.setState({todos: todos});
  }
  
  componentDidMount() {
    fetchTodos()
      .then(todos => this.setState({todos}));
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todo List</h2>
        </div>
        <div className="Todo">
          {this.state.errorMessage}
          {this.state.message}
          <TodoForm 
            onChange={this.onChangeInput} 
            currentTodo={this.state.currentTodo }
            handleSubmit={submitHandler }/>
          <TodoList 
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove} 
            todos={displayTodos}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;