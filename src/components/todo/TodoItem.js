import React from 'react';
import PropTypes from 'prop-types';
import {partial} from '../../lib/util';

const TodoItem = props => {
    // const handleToggle = props.handleToggle.bind(null, props.id);
    const handleToggle = partial(props.handleToggle, props.id);
    return(
        <li>
            <input 
                type="checkbox"
                onChange={() => props.handleToggle(props.id)}
                checked={props.isComplete}/>
            { props.name }
        </li>
    );
}

TodoItem.PropTypes = {
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default TodoItem;