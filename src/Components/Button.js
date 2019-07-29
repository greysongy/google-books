import React from 'react';

Button = (props) => {
    <button onClick={props.onClick} className='btn btn-primary'>
        {props.children}
    </button>
}

export default Button;