import React from 'react';
// import Button from '../Components/Button'
// import './style.css'

function SearchForm(props) {
    
    return(
    <div>

        <p className='lead'>Book Search</p>

        <label
            for='title'
        >   Book
            </label>
        <input name='title'
            placeholder='Search for a book...'
            type='text'></input>
        <button
            onClick={props.handleFormSubmit}
            type='submit'
            value='Submit'>Submit</button>
    </div>
    )
}

export default SearchForm