import React from 'react';
import Button from '../Button'
import './style.css'

ResultCard = ({
    title,
    viewButton,
    deleteButton,
    subtitle,
    image,
    description
}) => {
    <div>
        <div className='row'>
            <h3 className='col-3'>{title}</h3>
            <span className='col-3 offset-6'>
                <Button
                    onClick={viewButton}
                >View
                </Button>
                <Button
                    onClick={deleteButton}
                >View
                </Button>
            </span>
        </div>
        <div className='row'>
            <small>{subtitle}
                <br />Written by {author}</small>
        </div>
        <div className='row'>
            <div className='col-3'>
                <img src={image} alt={title} />
            </div>
            <div className='col-9'>
                {description}
            </div>
        </div>
    </div>
}