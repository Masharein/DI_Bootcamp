import React from 'react';
import './Actor.css'
const Actor = ({ firstName, lastName, image }) => {
  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <img src={image} alt={`${firstName} ${lastName}`} />
    </div>
  );
};

export default Actor;