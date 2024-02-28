import React from 'react';
import './MapSprites.css';

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
import TropiusImage from './images/sprites/tropius.gif';
import MewImage from './images/sprites/mew.gif';
import SandshrewImage from './images/sprites/sandshrew.gif';
import WingullImage from './images/sprites/wingull.gif';
import PelipperImage from './images/sprites/pelipper.gif';
import LiligantImage from './images/sprites/liligant.gif';
import GardevoirImage from './images/sprites/gardevoir.gif';
import CuboneImage from './images/sprites/cubone.gif';
import ChanseyImage from './images/sprites/chansey.gif';
import AltariaImage from './images/sprites/altaria.gif';
import BidoofImage from './images/sprites/bidoof.gif';
import PoliwagImage from './images/sprites/poliwag.gif';
import WobbuffetImage from './images/sprites/wobbuffet.gif';
import EeveeImage from './images/sprites/eevee.gif';
import VaporeonImage from './images/sprites/vaporeon.gif';
import JolteonImage from './images/sprites/jolteon.gif';
import FlareonImage from './images/sprites/flareon.gif';
import EspeonImage from './images/sprites/espeon.gif';
import UmbreonImage from './images/sprites/umbreon.gif';
import LeafeonImage from './images/sprites/leafeon.gif';
import GlaceonImage from './images/sprites/glaceon.gif';
import SylveonImage from './images/sprites/sylveon.gif';
import GroudonImage from './images/sprites/groudon.gif';
import KyogreImage from './images/sprites/kyogre.gif';
import LatiosImage from './images/sprites/latios.gif';
import LatiasImage from './images/sprites/latias.gif';
import ButterfreeImage from './images/sprites/butterfree.gif';
import BeedrillImage from './images/sprites/beedrill.gif';
import CrobatImage from './images/sprites/crobat.gif';
import HoothootImage from './images/sprites/hoothoot.gif';
import ExeggutorImage from './images/sprites/exeggutor.gif';
import VileplumeImage from './images/sprites/vileplume.gif';
import NinetalesImage from './images/sprites/ninetales.gif';
import SlakingImage from './images/sprites/slaking.gif';
import WooperImage from './images/sprites/wooper.gif';
import ManaphyImage from './images/sprites/manaphy.gif';

const pokemonData = [
  { name: 'Pikachu', score: 1, image: PikachuImage },
  { name: 'Charizard', score: 2, image: CharizardImage },
  { name: 'Magikarp', score: 3, image: MagikarpImage },
  { name: 'Blastoise', score: 4, image: BlastoiseImage },
  { name: 'Venusaur', score: 5, image: VenusaurImage },
  { name: 'Snorlax', score: 6, image: SnorlaxImage },
  { name: 'Mewtwo', score: 7, image: MewtwoImage },
  { name: 'Rayquaza', score: 8, image: RayquazaImage },
  { name: 'Lugia', score: 9, image: LugiaImage },
  { name: 'Gyarados', score: 10, image: GyaradosImage },
  { name: 'Wailord', score: 11, image: WailordImage },
  { name: 'Pidgey', score: 12, image: PidgeyImage },
  { name: 'Pidgeot', score: 13, image: PidgeotImage },
  { name: 'Piplup', score: 14, image: PiplupImage },
  { name: 'Mudkip', score: 15, image: MudkipImage },
  { name: 'Skarmory', score: 16, image: SkarmoryImage },
  { name: 'Onix', score: 17, image: OnixImage },
  { name: 'Zubat', score: 18, image: ZubatImage },
  { name: 'Tropius', score: 19, image: TropiusImage },
  { name: 'Mew', score: 20, image: MewImage },
  { name: 'Sandshrew', score: 21, image: SandshrewImage },
  { name: 'Wingull', score: 22, image: WingullImage },
  { name: 'Pelipper', score: 23, image: PelipperImage },
  { name: 'Liligant', score: 24, image: LiligantImage },
  { name: 'Gardevoir', score: 25, image: GardevoirImage },
  { name: 'Cubone', score: 26, image: CuboneImage },
  { name: 'Chansey', score: 27, image: ChanseyImage },
  { name: 'Altaria', score: 28, image: AltariaImage },
  { name: 'Bidoof', score: 29, image: BidoofImage },
  { name: 'Poliwag', score: 30, image: PoliwagImage },
  { name: 'Wobbuffet', score: 31, image: WobbuffetImage },
  { name: 'Eevee', score: 32, image: EeveeImage },
  { name: 'Vaporeon', score: 33, image: VaporeonImage },
  { name: 'Jolteon', score: 34, image: JolteonImage },
  { name: 'Flareon', score: 35, image: FlareonImage },
  { name: 'Espeon', score: 36, image: EspeonImage },
  { name: 'Umbreon', score: 37, image: UmbreonImage },
  { name: 'Leafeon', score: 38, image: LeafeonImage },
  { name: 'Glaceon', score: 39, image: GlaceonImage },
  { name: 'Sylveon', score: 40, image: SylveonImage },
  { name: 'Groudon', score: 41, image: GroudonImage },
  { name: 'Kyogre', score: 42, image: KyogreImage },
  { name: 'Latios', score: 43, image: LatiosImage },
  { name: 'Latias', score: 44, image: LatiasImage },
  { name: 'Butterfree', score: 45, image: ButterfreeImage },
  { name: 'Beedrill', score: 46, image: BeedrillImage },
  { name: 'Crobat', score: 47, image: CrobatImage },
  { name: 'Hoothoot', score: 48, image: HoothootImage },
  { name: 'Exeggutor', score: 49, image: ExeggutorImage },
  { name: 'Vileplume', score: 50, image: VileplumeImage },
  { name: 'Ninetales', score: 51, image: NinetalesImage },
  { name: 'Slaking', score: 52, image: SlakingImage },
  { name: 'Wooper', score: 53, image: WooperImage },
  { name: 'Manaphy', score: 54, image: ManaphyImage }
];


function renderPokemon(score) {
  const renderedPokemon = [];

  pokemonData.forEach(pokemon => {
    const copies = Math.floor(score / pokemon.score);
    for (let i = 0; i < copies; i++) {
      renderedPokemon.push(
        <img
          key={`${pokemon.name}-${i}`}
          src={pokemon.image}
          alt={pokemon.name}
          className={`pokemon ${pokemon.name.toLowerCase()}`}
        />
      );
    }
  });

  return renderedPokemon;
}

function MapSprites({ score }) {
  return (
    <div className="background-container">
      {renderPokemon(score)}
    </div>
  );
}

export default MapSprites;
