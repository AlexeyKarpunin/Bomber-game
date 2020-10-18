import Player from './characters/Player';
import Bot from './characters/Bot';
import CONFIG from './setting/config';

function makepaty (map) {
  let party = [];
  let playerCounter = 1;
  
  for (let i = 0; i < map.length; i++) {

    if (map[i] === CONFIG.map.player) {
      const player = new Player({name: playerCounter, place: i});
      party.push(player);
      playerCounter++;
    };
  }

  for (let i = 0; i < map.length; i++) {
    if (map[i] === CONFIG.map.bot) {
      const bot = new Bot({place: i});
      party.push(bot);
    }
  }

  return party;
};

export default makepaty;