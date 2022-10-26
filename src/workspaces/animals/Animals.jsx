import React from 'react';
import './animals-page.css';
import { listOfAnimals } from './listOfAnimals';

function Animals() {
  return (
    <div className="animals">
      <div className="animals-list-container">
        {listOfAnimals.map((oneAnimal) => oneAnimal)}
      </div>
    </div>
  );
}

export default Animals;
