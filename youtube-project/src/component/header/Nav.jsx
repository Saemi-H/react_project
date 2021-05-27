import React, { useState } from 'react';

const Nav = ({handleChange, handleSearch}) => {
    
    return (
        <div className="searchEngine">
            <input type="text" onChange={handleChange}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Nav;