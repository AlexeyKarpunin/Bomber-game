import CONFIG from './setting/config'
import React from 'react';
import './css/game.css';

class Map extends React.Component {
  constructor () {
    super ()
      this.playerCounter = 0;
      this.state = {
        playerCounter: 0,
      }
  }
 
  render() {
    const {map, setting} =  this.props;
    const mapStyle = {
      'display': 'grid',
      'marginTop': '100px',
      'justifyContent': 'center',
      'gridTemplateColumns': `repeat(${setting.x}, 40px)`,
      'gridTemplateRows': `repeat(${setting.y}, 40px)`,
    }
   
    let playerCounter = 0;
    return (
      <div style={mapStyle} className='map'>
          {map.map( (block, index) => {
            switch (block) {
              case CONFIG.map.wall:
                return <div key={index} id={index} className='block wall'></div>;
              case 0:
                return <div key={index} id={index} className='block empty'></div>;
              case CONFIG.map.player:
            return <div key={index} id={index} className='block player'>{map[index] + ++playerCounter}</div>;
              case CONFIG.map.bot:
                return <div key={index} id={index} className='block bot'>M</div>;
              case CONFIG.map.box:
                return <div key={index} id={index} className='block box'>[X]</div>;
              default:
                return <div key={index} id={index} className='block empty'></div>;
            }
          })}
      </div>
    )
  }
}

export default Map;