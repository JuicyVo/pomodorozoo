// mapsprites.js

import React from 'react';
import PikachuImage from './images/sprites/pikachu1.gif';
import CharizardImage from './images/sprites/charizard1.gif';
import MagikarpImage from './images/sprites/magikarp1.gif';
import BlastoiseImage from './images/sprites/blastoise.gif';
import VenusaurImage from './images/sprites/venusaur.gif';
import SnorlaxImage from './images/sprites/snorlax.gif';
import MewtwoImage from './images/sprites/mewtwo.gif';
import RayquazaImage from './images/sprites/rayquaza.gif';
import LugiaImage from './images/sprites/lugia.gif';
import GyaradosImage from './images/sprites/gyarados.gif';
import WailordImage from './images/sprites/wailord.gif';
import PidgeyImage from './images/sprites/pidgey.gif';
import PidgeotImage from './images/sprites/pidgeot.gif';
import PiplupImage from './images/sprites/piplup.gif';
import MudkipImage from './images/sprites/mudkip.gif';
import SkarmoryImage from './images/sprites/skarmory.gif'; 
import OnixImage from './images/sprites/onix.gif'; 
import ZubatImage from './images/sprites/zubat.gif'; 
import './MapSprites.css';

function MapSprites() {
  return (
    <div className="background-container">
      <img src={PikachuImage} alt="Pikachu" className="pokemon pikachu" />
      <img src={CharizardImage} alt="Charizard" className="pokemon charizard" />
      <img src={MagikarpImage} alt="Magikarp" className="pokemon magikarp" />
      <img src={BlastoiseImage} alt="Blastoise" className="pokemon blastoise" />
      <img src={VenusaurImage} alt="Venusaur" className="pokemon venusaur" />
      <img src={SnorlaxImage} alt="Snorlax" className="pokemon snorlax" />
      <img src={MewtwoImage} alt="Mewtwo" className="pokemon mewtwo" />
      <img src={RayquazaImage} alt="Rayquaza" className="pokemon rayquaza" />
      <img src={LugiaImage} alt="Lugia" className="pokemon lugia" />
      <img src={GyaradosImage} alt="Gyarados" className="pokemon gyarados" />
      <img src={WailordImage} alt="Wailord" className="pokemon wailord" />
      <img src={PidgeyImage} alt="Pidgey" className="pokemon pidgey" />
      <img src={PidgeotImage} alt="Pidgeot" className="pokemon pidgeot" />
      <img src={PiplupImage} alt="Piplup" className="pokemon piplup" />
      <img src={MudkipImage} alt="Mudkip" className="pokemon mudkip" />
      <img src={SkarmoryImage} alt="Skarmory" className="pokemon skarmory" /> 
      <img src={OnixImage} alt="Onix" className="pokemon onix" /> 
      <img src={ZubatImage} alt="Zubat" className="pokemon zubat" /> 
    </div>
  );
}

export default MapSprites;
