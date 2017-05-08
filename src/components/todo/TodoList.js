import React from 'react';
import PropTypes from 'prop-types';

const TodoList = props => {
    return(
        <div className="todo-list">
            <ul>
                {props.todos.map(todo => 
                    <li key={todo.name}>
                        <input 
                            type="checkbox" 
                            defaultChecked={todo.isComplete}/>
                        { todo.name }
                    </li>)}
            </ul>
        </div>
    );
}

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;