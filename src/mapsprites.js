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
import EeveeImage from './images/sprites/eevee.gif'; // Added
import VaporeonImage from './images/sprites/vaporeon.gif'; // Added
import JolteonImage from './images/sprites/jolteon.gif'; // Added
import FlareonImage from './images/sprites/flareon.gif'; // Added
import EspeonImage from './images/sprites/espeon.gif'; // Added
import UmbreonImage from './images/sprites/umbreon.gif'; // Added
import LeafeonImage from './images/sprites/leafeon.gif'; // Added
import GlaceonImage from './images/sprites/glaceon.gif'; // Added
import SylveonImage from './images/sprites/sylveon.gif'; // Added
import GroudonImage from './images/sprites/groudon.gif'; // Added
import KyogreImage from './images/sprites/kyogre.gif'; // Added
import LatiosImage from './images/sprites/latios.gif'; // Added
import LatiasImage from './images/sprites/latias.gif'; // Added
import ButterfreeImage from './images/sprites/butterfree.gif'; // Added
import BeedrillImage from './images/sprites/beedrill.gif'; // Added
import CrobatImage from './images/sprites/crobat.gif'; // Added
import HoothootImage from './images/sprites/hoothoot.gif'; // Added
import ExeggutorImage from './images/sprites/exeggutor.gif'; // Added
import VileplumeImage from './images/sprites/vileplume.gif'; // Added
import NinetalesImage from './images/sprites/ninetales.gif'; // Added
import SlakingImage from './images/sprites/slaking.gif'; // Added
import WooperImage from './images/sprites/wooper.gif'; // Added
import ManaphyImage from './images/sprites/manaphy.gif'; // Added
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
      <img src={TropiusImage} alt="Tropius" className="pokemon tropius" />
      <img src={MewImage} alt="Mew" className="pokemon mew" />
      <img src={SandshrewImage} alt="Sandshrew" className="pokemon sandshrew" />
      <img src={WingullImage} alt="Wingull" className="pokemon wingull" />
      <img src={PelipperImage} alt="Pelipper" className="pokemon pelipper" />
      <img src={LiligantImage} alt="Liligant" className="pokemon liligant" />
      <img src={GardevoirImage} alt="Gardevoir" className="pokemon gardevoir" />
      <img src={CuboneImage} alt="Cubone" className="pokemon cubone" />
      <img src={ChanseyImage} alt="Chansey" className="pokemon chansey" />
      <img src={AltariaImage} alt="Altaria" className="pokemon altaria" />
      <img src={BidoofImage} alt="Bidoof" className="pokemon bidoof" />
      <img src={PoliwagImage} alt="Poliwag" className="pokemon poliwag" />
      <img src={WobbuffetImage} alt="Wobbuffet" className="pokemon wobbuffet" />
      <img src={EeveeImage} alt="Eevee" className="pokemon eevee" /> {/* Added */}
      <img src={VaporeonImage} alt="Vaporeon" className="pokemon vaporeon" /> {/* Added */}
      <img src={JolteonImage} alt="Jolteon" className="pokemon jolteon" /> {/* Added */}
      <img src={FlareonImage} alt="Flareon" className="pokemon flareon" /> {/* Added */}
      <img src={EspeonImage} alt="Espeon" className="pokemon espeon" /> {/* Added */}
      <img src={UmbreonImage} alt="Umbreon" className="pokemon umbreon" /> {/* Added */}
      <img src={LeafeonImage} alt="Leafeon" className="pokemon leafeon" /> {/* Added */}
      <img src={GlaceonImage} alt="Glaceon" className="pokemon glaceon" /> {/* Added */}
      <img src={SylveonImage} alt="Sylveon" className="pokemon sylveon" /> {/* Added */}
      <img src={GroudonImage} alt="Groudon" className="pokemon groudon" /> {/* Added */}
      <img src={KyogreImage} alt="Kyogre" className="pokemon kyogre" /> {/* Added */}
      <img src={LatiosImage} alt="Latios" className="pokemon latios" /> {/* Added */}
      <img src={LatiasImage} alt="Latias" className="pokemon latias" /> {/* Added */}
      <img src={ButterfreeImage} alt="Butterfree" className="pokemon butterfree" /> {/* Added */}
      <img src={BeedrillImage} alt="Beedrill" className="pokemon beedrill" /> {/* Added */}
      <img src={CrobatImage} alt="Crobat" className="pokemon crobat" /> {/* Added */}
      <img src={HoothootImage} alt="Hoothoot" className="pokemon hoothoot" /> {/* Added */}
      <img src={ExeggutorImage} alt="Exeggutor" className="pokemon exeggutor" /> {/* Added */}
      <img src={VileplumeImage} alt="Vileplume" className="pokemon vileplume" /> {/* Added */}
      <img src={NinetalesImage} alt="Ninetales" className="pokemon ninetales" /> {/* Added */}
      <img src={SlakingImage} alt="Slaking" className="pokemon slaking" /> {/* Added */}
      <img src={WooperImage} alt="Wooper" className="pokemon wooper" /> {/* Added */}
      <img src={ManaphyImage} alt="Manaphy" className="pokemon manaphy" /> {/* Added */}
    </div>
  );
}

export default MapSprites;
