import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = props => {
    return(
        <div className="todo-list">
            <ul>
                {props.todos.map(todo => <TodoItem {...todo} key={todo.id}/>)}
            </ul>
        </div>
    );
}

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;