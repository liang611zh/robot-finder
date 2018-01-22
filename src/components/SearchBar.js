import React from 'react';

const SearchBar = ({onSearching})=>{
    return(
        <div className='pa2'>
            <input 
            type='search' 
            placeholder='Enter Name' 
            className='pa3 ba b--green bg-ligh-green' 
            onChange={onSearching}
            />
        </div>
    );
}

export default SearchBar;