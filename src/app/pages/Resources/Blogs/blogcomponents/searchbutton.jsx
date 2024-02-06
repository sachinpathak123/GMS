import React, { useState } from 'react';
import '../blog.css';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');
  
    const handleChange = (event) => {
      setSearchText(event.target.value);
    };
  
    return (
      <div className="search-box-container">
        <input
          type="text"
          id="searchInput"
          placeholder="What are you looking for?...     &#x1F50E;&#xFE0E;"
          value={searchText}
          onChange={handleChange}
        />
      </div>
    );
  };

export default SearchBox;
