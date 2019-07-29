import React from 'react';
import Button from '../Button'
import './style.css'

SearchForm = (props) => {
    <div>
        <p className='lead'>Book Search</p>

        <label
            for='title'
        >   Book
            </label>
        <input name='title'
            placeholder='Search for a book...'
            type='text'></input>
        <input
            onClick={props.handleFormSubmit}
            type='submit'
            value='Submit'></input>
    </div>
}