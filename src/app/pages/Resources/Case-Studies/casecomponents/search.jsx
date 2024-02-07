import React, { useState } from 'react';


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
          placeholder="What are you looking for?..."
          value={searchText}
          onChange={handleChange}
        />
      </div>
    );
  };

export default SearchBox;
