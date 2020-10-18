const CONFIG = {
  setMenu: {
    players: 'player',
    x: 'X',
    y: 'Y',
    bots: 'bots', 
  },
  restrictions: {
    maxPlayers: 3,
    minPlayers: 1,
    maxX: 40,
    maxY: 20,
    minX: 12,
    minY: 8,
    maxBots: 5,
    minBots: 1,
  },
  gameStatuses: {
    started: 'started',
  },
  map: {
    wall: 'wall',
    box: 'box',
    player: 'P',
    bot: 'M'
  },
  moveBan: {
    wall: 'wall',
    box: 'box',
    player: 'player',
    bot: 'bot'
  }
}

export default CONFIG;