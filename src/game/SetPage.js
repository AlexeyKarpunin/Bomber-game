/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './css/setPage.css';
import PlusMinus from './setting/PlusMinus'
import CONFIG from './setting/config'


class SetPage extends PlusMinus {
  constructor () {
    super();
    this.state = {
      players: CONFIG.restrictions.minPlayers,
      bots: CONFIG.restrictions.minBots,
      x: 18,
      y: 10
    }
    this.startGame = this.startGame.bind(this);
  }
  
  startGame () {
    const {start, changeSet} = this.props;
    
    changeSet(this.state);
    start();
  }

  render() {
    const {players, bots, x, y} = this.state;
    const {plus, minus, startGame} = this;

    return (
      <section className='setting__container'>
        <article className="setting__container_menu">

          <div className='setting__players'>

             <button name={CONFIG.setMenu.players} className='setting__button' onClick={minus}>-</button>
             {players === CONFIG.restrictions.minPlayers ? <span className='configControl'>Min </span> : null}
             <span className='text'>Players: {players} </span>
             {players === CONFIG.restrictions.maxPlayers ? <span className='configControl'> Max</span> : null} 
             <button name={CONFIG.setMenu.players} className='setting__button' onClick={plus}>+</button>

          </div>

          <div className='setting__bots'>
             <button name= {CONFIG.setMenu.bots} className='setting__button' onClick={minus}>-</button>
             {bots === CONFIG.restrictions.minBots ? <span className='configControl'>Min </span> : null}
             <span className='text'>Bots: {bots}</span> 
             {bots === CONFIG.restrictions.maxBots ? <span className='configControl'> Max </span> : null}
             <button name={CONFIG.setMenu.bots} className='setting__button' onClick={plus}>+</button>
          </div>

          <div className='setting__map'>

            <div>
             <button name={CONFIG.setMenu.x} className='setting__button' onClick={minus}>-</button>
             {x === CONFIG.restrictions.minX ? <span className='configControl'>Min </span> : null}
             <span className='text'>X: {x}</span>
             {x === CONFIG.restrictions.maxX ? <span className='configControl'> Max </span> : null}
             <button name={CONFIG.setMenu.x} className='setting__button' onClick={plus}>+</button>
            </div>

            <div>
             <button name={CONFIG.setMenu.y} className='setting__button' onClick={minus}>-</button>
             {y === CONFIG.restrictions.minY ? <span className='configControl'>Min </span> : null}
             <span className='text'>Y: {y}</span>
             {y === CONFIG.restrictions.maxY ? <span className='configControl'> Max </span> : null}
             <button name={CONFIG.setMenu.y} className='setting__button' onClick={plus}>+</button>
            </div>
          </div>
          <button className='setting__container__menu_start' onClick={startGame}>START</button>
        </article>
      </section>
    )
  }
}

/*
 
          
        <div className='setting__map set'>

          <a className='button__minus'></a>
          <span className='text'>x: {setting.x}</span> 
          <a className='button__plus'></a>
          
          <a className='button__minus'></a>
          <span className='text'>y: {setting.y}</span> 
          <a className='button__plus'></a>
          
        </div>
 */

export default  SetPage;
