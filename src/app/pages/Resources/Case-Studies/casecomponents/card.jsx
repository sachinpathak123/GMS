
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="cardd">
      <img src={imageUrl} alt={title} />
      <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;