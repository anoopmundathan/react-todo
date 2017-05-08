import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = props => {
    return (
        <div className="todo-app">
            <form>
                <input 
                    type="text" 
                    onChange={props.onChangeInput} 
                    value={props.currentTodo} />
            </form>
        </div>
    )
}

TodoForm.PropTypes = {
    onChange: PropTypes.func.isRequired,
    currentTodo: PropTypes.string.isRequired
}

export default TodoForm;
