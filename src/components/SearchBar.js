import React from 'react';

const SearchBar = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                type='search' 
                placeholder='Search Robos' 
                className='pa3 ba b--green bg-lighest-blue'
                onChange={searchChange}
            />
        </div>
        
    )
}
export default SearchBar;