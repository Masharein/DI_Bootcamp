import React from 'react';

const UserFavoriteColors = ({ favAnimals }) => {
  const animalList = favAnimals.map((animal, index) => (
    <li key={index}>{animal}</li>
  ));

  return (
    <div>
      <ul>{animalList}</ul>
    </div>
  );
};

export default UserFavoriteColors;
