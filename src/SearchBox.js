import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2 tc'>
        <input 
        className='pa2 br3 ba b--gray shadow-5 dib'
        type='search' 
        placeholder='Search Contact'
        onChange={searchChange}
        />
        </div>
        );
}

export default SearchBox;