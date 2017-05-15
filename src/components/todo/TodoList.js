import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export const TodoList = props => {
    return(
        <div className="todo-list">
            <ul>
                {props.todos.map(todo => <TodoItem 
                    handleToggle={props.handleToggle} 
                    handleRemove={props.handleRemove}
                    {...todo} 
                    key={todo.id}/>)}
            </ul>
        </div>
    );
}

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired,
}