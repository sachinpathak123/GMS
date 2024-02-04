import React from 'react';
import './Card.css'

interface CardProps {
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card Image" className="card-image" />
    </div>
  );
};

export default Card;

