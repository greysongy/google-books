import React from 'react';
// import Button from '../Components/Button'
// import './style.css'

function ResultCard(props) {
    return (

        <div>
            <div className='row'>
                <h3 className='col-3'>{props.title}</h3>
                <span className='col-3 offset-6'>
                    <a href=
                        {props.link}
                    >View
                </a>
                    <button
                        onClick={() => props.saveBook(props.id) }
                    >Save
                </button>
                </span>
            </div>
            <div className='row'>
                <small>
                    <br />Written by {props.author}</small>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className='col-9'>
                    {props.description}
                </div>
            </div>
        </div>
    )

}

export default ResultCard;