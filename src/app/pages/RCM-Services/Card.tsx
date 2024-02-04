import React from 'react';
import './Card.css'

interface CardProps {
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ imageSrc }) => {
  return (
    <div className="cardhex">
      <img src={imageSrc} alt="Card Image" className="card-imagehex" />
    </div>
  );
};

export default Card;

