import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = props => {
    return (
        <div className="Todo-App">
            <form onSubmit={props.handleSubmit}>
                <input type="text" 
                onChange={props.onChange} 
                value={props.currentTodo} />
            </form>
        </div>
    )
}

TodoForm.PropTypes = {
    onChange: PropTypes.func.isRequired,
    currentTodo: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}