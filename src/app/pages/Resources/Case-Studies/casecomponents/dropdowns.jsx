
import React from 'react';

const Dropdown = ({ options }) => {
  return (
    <select className="dropdown">
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};

export default Dropdown;
