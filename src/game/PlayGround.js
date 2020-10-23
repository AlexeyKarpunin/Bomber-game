import React from 'react';
import {mapNames} from './setting/enums';
import './css/game.css';

class PlayGround extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      map: props.map.makemap(),
      x: props.x,
      y: props.y,
    }
  }

  componentDidMount() {
    const {makeParty} = this.props;
    const {map} = this.state;
    makeParty(map);
  }

  render () {
    const {x, y, map} = this.state;
    const {wall, player, bot, box } = mapNames;
    const mapStyle = {
      'display': 'grid',
      'marginTop': '100px',
      'justifyContent': 'center',
      'gridTemplateColumns': `repeat(${x}, 40px)`,
      'gridTemplateRows': `repeat(${y}, 40px)`,
    };

    
    return (
      <div style={mapStyle} className='map'>
         {map.map( (block, index) => {
           if (block[0] === player) {
             return <div key={index} id={index} className='block'>{block}</div>;
           } else {
            switch (block) {
              case wall:
                return <div key={index} id={index} className='block wall'></div>;
              case 0:
                return <div key={index} id={index} className='block'></div>;
              case bot:
                return <div key={index} id={index} className='block'>{block}</div>;
              case box:
                return <div key={index} id={index} className='block box'>{block}</div>;
              default:
                return <div key={index} id={index} className='block'></div>;
            }
           }
          })}
      </div>
    )
  }
}

export default PlayGround;