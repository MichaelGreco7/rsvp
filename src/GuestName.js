import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
    if (props.isEdting) {
        return (
            <input 
            type="text" 
            value={props.children}
            onChange={props.handleNameEdits} />
        );
    }

    return (
        <span>
            {props.children}
        </span>
    );
};
   
GuestName.propTypes = {
    isEdting: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
};

export default GuestName;