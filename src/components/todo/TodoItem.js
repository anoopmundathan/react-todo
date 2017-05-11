import React from 'react';
import PropTypes from 'prop-types';
import {partial} from '../../lib/util';

const TodoItem = props => {
    // const handleToggle = props.handleToggle.bind(null, props.id);
    // const handleRemove = props.handleRemove.bind(null, props.id);
    const handleToggle = partial(props.handleToggle, props.id);
    const handleRemove = partial(props.handleRemove, props.id);
    return(
        <li>
            <span className='delete-item'>
                <a href="#" onClick={handleRemove}>X</a>
            </span>
            <input 
                type="checkbox"
                onChange={handleToggle}
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