import CONFIG from './config';
import React from 'react';

class PlusMinus extends React.Component {
  constructor () {
    super();
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  
  plus (e) {
    const attibute = e.target.getAttribute('name');
    switch (attibute) {
      case CONFIG.setMenu.players :
        this.setState( (state) => {
          if (state.players < CONFIG.restrictions.maxPlayers) {
            return {players: state.players + 1}
          }
        })
        break;
      case CONFIG.setMenu.x :
        this.setState( (state) => {
          if (state.x < CONFIG.restrictions.maxX) {
            return {x: state.x + 1}
          }
        })
        break;
      case CONFIG.setMenu.y :
        this.setState( (state) => {
          if (state.y < CONFIG.restrictions.maxY) {
            return {y: state.y + 1}
          }
        })
        break;
      case CONFIG.setMenu.bots :
        this.setState( (state) => {
          if (state.bots < CONFIG.restrictions.maxBots) {
            return {bots: state.bots + 1}
          }
        })
        break;
      default:
        throw Error('this name is undefined');
    }
  }

  minus (e) {
    const attibute = e.target.getAttribute('name');
    switch (attibute) {
      case CONFIG.setMenu.players :
        this.setState( (state) => {
          if (state.players > CONFIG.restrictions.minPlayers) {
            return {players: state.players - 1}
          }
        })
        break;
      case CONFIG.setMenu.x :
        this.setState( (state) => {
          if (state.x > CONFIG.restrictions.minX) {
            return {x: state.x - 1}
          }
        })
        break;
      case CONFIG.setMenu.y :
        this.setState( (state) => {
          if (state.y > CONFIG.restrictions.minY) {
            return {y: state.y - 1}
          }
        })
        break;
      case CONFIG.setMenu.bots :
        this.setState( (state) => {
          if (state.bots > CONFIG.restrictions.minBots) {
          return {bots: state.bots - 1}
          }
        })
        break;
      default:
        throw Error('this name is undefined');
    }
  }
}

export default PlusMinus;