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
import RaichuImage from './images/sprites/raichu.gif'
import MantineImage from './images/sprites/mantine.gif'
import BulbasaurImage from './images/sprites/bulbasaur.gif'
import CharmanderImage from './images/sprites/charmander.gif'
import SquirtleImage from './images/sprites/squirtle.gif'
import GeodudeImage from './images/sprites/geodude.gif'
import ScytherImage from './images/sprites/scyther.gif'
import MrMimeImage from './images/sprites/mrmime.gif'
import MeganiumImage from './images/sprites/meganium.gif'
import TyphlosionImage from './images/sprites/typhlosion.gif'
import FeraligatrImage from './images/sprites/feraligatr.gif'
import PsyduckImage from './images/sprites/psyduck.gif'
import ClefableImage from './images/sprites/Clefable.gif'
import GengarImage from './images/sprites/gengar.gif'
import WeezingImage from './images/sprites/weezing.gif'
import TyranitarImage from './images/sprites/tyranitar.gif'
import FearowImage from './images/sprites/fearow.gif'
import AmpharosImage from './images/sprites/ampharos.gif'
import ScizorImage from './images/sprites/scizor.gif'
import ShuckleImage from './images/sprites/shuckle.gif'
import GligarImage from './images/sprites/gligar.gif'
import RaticateImage from './images/sprites/raticate.gif'
import DragoniteImage from './images/sprites/dragonite.gif'
import SudowoodoImage from './images/sprites/sudowoodo.gif'
import SlowkingImage from './images/sprites/slowking.gif'
import HoohImage from './images/sprites/hooh.gif'
import SpoinkImage from './images/sprites/spoink.gif'
import DrifblimImage from './images/sprites/drimblim.gif'
import TorterraImage from './images/sprites/torterra.gif'
import InfernapeImage from './images/sprites/infernape.gif'
import EmpoleonImage from './images/sprites/empoleon.gif'






const pokemonData = [
  { name: 'Pikachu', score: 1, image: PikachuImage },
  { name: 'Eevee', score: 32, image: EeveeImage },
  { name: 'Vaporeon', score: 33, image: VaporeonImage },
  { name: 'Jolteon', score: 34, image: JolteonImage },
  { name: 'Flareon', score: 35, image: FlareonImage },
  { name: 'Espeon', score: 36, image: EspeonImage },
  { name: 'Umbreon', score: 37, image: UmbreonImage },
  { name: 'Leafeon', score: 38, image: LeafeonImage },
  { name: 'Glaceon', score: 39, image: GlaceonImage },
  { name: 'Sylveon', score: 40, image: SylveonImage },
  { name: 'Magikarp', score: 3, image: MagikarpImage },
  { name: 'Blastoise', score: 4, image: BlastoiseImage },
  { name: 'Venusaur', score: 5, image: VenusaurImage },
  { name: 'Snorlax', score: 6, image: SnorlaxImage },
  { name: 'Charizard', score: 7, image: CharizardImage },
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
  { name: 'Liligant', score: 24, image: LiligantImage },
  { name: 'Gardevoir', score: 25, image: GardevoirImage },
  { name: 'Cubone', score: 26, image: CuboneImage },
  { name: 'Chansey', score: 27, image: ChanseyImage },
  { name: 'Altaria', score: 28, image: AltariaImage },
  { name: 'Bidoof', score: 29, image: BidoofImage },
  { name: 'Poliwag', score: 30, image: PoliwagImage },
  { name: 'Wobbuffet', score: 31, image: WobbuffetImage },
  { name: 'Sandshrew', score: 21, image: SandshrewImage },
  { name: 'Wingull', score: 22, image: WingullImage },
  { name: 'Pelipper', score: 23, image: PelipperImage },
  { name: 'Butterfree', score: 45, image: ButterfreeImage },
  { name: 'Beedrill', score: 46, image: BeedrillImage },
  { name: 'Crobat', score: 47, image: CrobatImage },
  { name: 'Hoothoot', score: 48, image: HoothootImage },
  { name: 'Exeggutor', score: 49, image: ExeggutorImage },
  { name: 'Vileplume', score: 50, image: VileplumeImage },
  { name: 'Ninetales', score: 51, image: NinetalesImage },
  { name: 'Slaking', score: 52, image: SlakingImage },
  { name: 'Wooper', score: 53, image: WooperImage },
  { name: 'Manaphy', score: 54, image: ManaphyImage },
  { name: 'Groudon', score: 55, image: GroudonImage },
  { name: 'Kyogre', score: 56, image: KyogreImage },
  { name: 'Latios', score: 57, image: LatiosImage },
  { name: 'Latias', score: 58, image: LatiasImage },
  { name: 'Rayquaza', score: 59, image: RayquazaImage },
  { name: 'Lugia', score: 60, image: LugiaImage },
  { name: 'Mewtwo', score: 61, image: MewtwoImage },
  { name: 'Raichu', score: 55, image: RaichuImage },
    { name: 'Mantine', score: 56, image: MantineImage },
    { name: 'Bulbasaur', score: 57, image: BulbasaurImage },
    { name: 'Charmander', score: 58, image: CharmanderImage },
    { name: 'Squirtle', score: 59, image: SquirtleImage },
    { name: 'Geodude', score: 60, image: GeodudeImage },
    { name: 'Scyther', score: 61, image: ScytherImage },
    { name: 'MrMime', score: 62, image: MrMimeImage },
    { name: 'Meganium', score: 63, image: MeganiumImage },
    { name: 'Typhlosion', score: 64, image: TyphlosionImage },
    { name: 'Feraligatr', score: 65, image: FeraligatrImage },
    { name: 'Psyduck', score: 66, image: PsyduckImage },
    { name: 'Clefable', score: 67, image: ClefableImage },
    { name: 'Gengar', score: 68, image: GengarImage },
    { name: 'Weezing', score: 69, image: WeezingImage },
    { name: 'Tyranitar', score: 70, image: TyranitarImage },
    { name: 'Fearow', score: 71, image: FearowImage },
    { name: 'Ampharos', score: 72, image: AmpharosImage },
  { name: 'Scizor', score: 73, image: ScizorImage },
  { name: 'Shuckle', score: 74, image: ShuckleImage },
  { name: 'Gligar', score: 75, image: GligarImage },
  { name: 'Raticate', score: 76, image: RaticateImage },
  { name: 'Dragonite', score: 77, image: DragoniteImage },
  { name: 'Sudowoodo', score: 78, image: SudowoodoImage },
  { name: 'Slowking', score: 79, image: SlowkingImage },
  { name: 'HoOh', score: 80, image: HoohImage },
  { name: 'Spoink', score: 81, image: SpoinkImage },
  { name: 'Drifblim', score: 82, image: DrifblimImage },
  { name: 'Torterra', score: 83, image: TorterraImage },
  { name: 'Infernape', score: 84, image: InfernapeImage },
  { name: 'Empoleon', score: 85, image: EmpoleonImage },
    
  
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
