import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => {
    return(
        <li>
            <input type="checkbox" defaultChecked={props.isComplete}/>{ props.name }
        </li>
    );
}

TodoItem.PropTypes = {
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default TodoItem;