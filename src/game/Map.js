import {mapNames} from './setting/enums';

class MakeMap {
constructor (props) {
  this.players = props.players;
  this.bots = props.bots;
  this.x = props.x;
  this.y = props.y;
}

makeborder (x,y) {
  const size = x * y;
  const map = new Array(size).fill(0);
  const {wall} = mapNames;

  for (let i = 0; i < x; i++) {
    map[i] = wall; 
  }

  for (let i = size - x; i < map.length; i++) {
    map[i] = wall;
  }

  for (let i = 0; i < size - x ; i += x) {
    map[i] = wall;
  }

  for (let i = size - 1; i > x ; i -= x) {
    map[i] = wall;
  }

  return map;
}

addPlayers (map, players) {
  let counter = 1;
  const {player} = mapNames;
  while (counter < players + 1) {
    const randomIndex = Math.floor(Math.random() * map.length - 1);
    if (map[randomIndex] === 0) {
      map[randomIndex] = player + counter; // where Player = 'P' and counter is number of player;
      counter++;
    }
  }
}

addBots (map, bots) {
  let counter = 0;
  const {bot} = mapNames;
  while (counter < bots) {
    const randomIndex = Math.floor(Math.random() * map.length - 1);
    if (map[randomIndex] === 0) {
      map[randomIndex] = bot; // where bot = 'M';
      counter++;
    }
  }
}

addBoxes (map) {
  const boxes = Math.floor(map.length / 10);
  let counter = 0;
  const {box} = mapNames;
  while (counter < boxes) {
    const randomIndex = Math.floor(Math.random() * map.length - 1);
    if (map[randomIndex] === 0) {
      map[randomIndex] = box; 
      counter++;
    }
  }
}


makemap () {
 let map =  this.makeborder(this.x, this.y);
 this.addPlayers(map, this.players);
 this.addBots(map, this.bots);
 this.addBoxes(map);

 return map;
}

};

export default MakeMap;