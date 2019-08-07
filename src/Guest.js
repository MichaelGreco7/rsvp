import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props => 
    <li>
        <GuestName 
        isEdting={props.isEdting}
        handleNameEdits={e => props.setName(e.target.value)}>
        {props.name}
        </GuestName>
        <label>
            <input
                type="checkbox" 
                checked={props.isConfirmed} 
                onChange={props.handleConfirmation} /> Confirmed
        </label>
        <button onClick={props.handleToggleEditing}>edit</button>
        <button>remove</button>
    </li>

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEdting: PropTypes.bool.isRequired, 
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
}

export default Guest;