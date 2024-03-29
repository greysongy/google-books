import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className='btn btn-primary'>
        {props.children}
    </button>
    )

}

export default Button;