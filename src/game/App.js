import React from 'react';
import SetPage from './SetPage';
import Game from './Game';
import CONFIG from './setting/config';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      gameStatus: undefined,
      gameSettings: {},
    }
    this.startGame = this.startGame.bind(this);
    this.changeSetting = this.changeSetting.bind(this);
  }

  startGame () {
    this.setState( (state) => {
      return { gameStatus: CONFIG.gameStatuses.started }
    })
  }

  changeSetting (newSet) {
    this.setState ( (state) => {
      return { gameSettings: newSet }
    })
  }

  render () {
    const {startGame, changeSetting} = this;
    const {gameStatus, gameSettings} = this.state;

    return (
      <pre>
        {!gameStatus ? <SetPage start={startGame} changeSet={changeSetting}/> : <Game settings={gameSettings} />}
      </pre>
    )
  }
}

export default App;
