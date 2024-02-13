// mapsprites.js

import React from 'react';
import PikachuImage from './images/sprites/pikachu1.gif'; //have to physically import each sadly
import CharizardImage from './images/sprites/charizard1.gif';
import MagikarpImage from './images/sprites/magikarp1.gif';
import './MapSprites.css'; 

function MapSprites() {
  return (
    <div className="background-container">
      <img src={PikachuImage} alt="Pikachu" className="pokemon pikachu" />
      <img src={CharizardImage} alt="Charizard" className="pokemon charizard" />
      <img src={MagikarpImage} alt="Magikarp" className="pokemon magikarp" />
    </div>
  );
}

export default MapSprites;
