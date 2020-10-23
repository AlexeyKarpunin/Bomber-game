import {mapNames} from '../setting/enums';
import Player from './Player';
import Bot from './Bot';

class Party {
  constructor (props) {
    this.map = props.map;
  }

  makeParty () {
  let party = [];
  let playerCounter = 1;
  const {player, bot} = mapNames;

  for (let i = 0; i < this.map.length; i++) {
    if (this.map[i][0] === player) {
      const newPlayer = new Player({name: player + playerCounter, position: i});
      party.push(newPlayer);
      playerCounter++;
    };
  }

  for (let i = 0; i < this.map.length; i++) {
    if (this.map[i] === bot) {
      const newBot = new Bot({position: i, name: bot});
      party.push(newBot);
    }
  }

  return party;
  }
}

export default Party;