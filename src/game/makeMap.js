import CONFIG from './setting/config'

function makeborder (x,y) {
  const size = x * y;
  const map = new Array(size).fill(0);

  for (let i = 0; i < x; i++) {
    map[i] = CONFIG.map.wall;
  }

  for (let i = size - x; i < map.length; i++) {
    map[i] = CONFIG.map.wall;
  }

  for (let i = 0; i < size - x ; i += x) {
    map[i] = CONFIG.map.wall;
  }

  for (let i = size - 1; i > x ; i -= x) {
    map[i] = CONFIG.map.wall;
  }
  return map;
}

function addPlayers (map, players) {
  let counter = 0;
  while (counter < players) {
    const randomIndex = Math.floor(Math.random() * map.length - 1);
    if (map[randomIndex] === 0) {
      map[randomIndex] = CONFIG.map.player; // where P is player;
      counter++;
    }
  }
}

function addBots (map, bots) {
  let counter = 0;
  while (counter < bots) {
    const randomIndex = Math.floor(Math.random() * map.length - 1);
    if (map[randomIndex] === 0) {
      map[randomIndex] = CONFIG.map.bot; // where B is player;
      counter++;
    }
  }
}

function addBoxes (map) {
  const boxes = Math.floor(map.length / 10);
  let counter = 0;
  while (counter < boxes) {
    const randomIndex = Math.floor(Math.random() * map.length - 1);
    if (map[randomIndex] === 0) {
      map[randomIndex] = CONFIG.map.box; // where B is player;
      counter++;
    }
  }
}


 function makemap (set) {
 let map =  makeborder(set.x,set.y);
 addPlayers(map, set.players);
 addBots(map, set.bots);
 addBoxes(map);

 return map;
}


export default makemap;