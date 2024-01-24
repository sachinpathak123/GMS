import React, { useState } from 'react';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      
      <input
        type="text"
        id="searchInput"
        placeholder="Type here..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
