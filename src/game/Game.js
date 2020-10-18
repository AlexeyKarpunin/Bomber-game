import React from 'react';
import './css/game.css';
import makemap from './makeMap'
import makePaty from './makePaty';
import Map from './Map';
import Timer from './Timer';

class Game extends React.Component {
  constructor (props) {
    super();
    this.map = makemap(props.settings);
    this.setting = props.settings;
    this.nextPlayer = 0;
    this.party = makePaty(this.map);
    this.state = {
      rounds: 0,
      moveKnow: 'P1',
      refreshTimer: true,
    }

    
    this.closeTimer = this.closeTimer.bind(this);
    this.nextRound = this.nextRound.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModal);
  }

  closeModal(e){
    const word = e.key.toLowerCase();
    const keyBoard = ['a','s','d','w','ф','ы','в','ц'];
    if (keyBoard.includes(word)) {
      this.playerStep(word)
    }
  }

  nextRound () {
    this.setState( (state) => {
      return {rounds: state.rounds + 1}
    })
  }

  nextMover (name) {
    
    if (name === 'M') {
      for (let i = 0; i < this.party.length; i++) {
        if (this.party[i].life) {
          return this.setState( (state) => {
            return {moveKnow: this.party[i].name}
          });
        }
      }
    } else {
      this.setState( (state) => {
        return {moveKnow: name}
      });
    }
  }

  playerStep (word) {
    if (this.nextPlayer === this.party.length) this.nextPlayer = 0;

    const next = this.party[this.nextPlayer];
    if (next.step(this.setting.x, word)) {
      this.nextRound();
      this.refreshTimer();
      this.nextPlayer++;
      this.nextMover(this.party[this.nextPlayer].name);
    } 
    this.botStep();
  }

  botStep () {
    const next = this.party[this.nextPlayer];
    if (this.nextPlayer < this.party.length) {
      if (next.id === 'bot') {
        if (next.step(this.setting.x)) {
          this.nextRound();
          this.nextPlayer++;
        } 
        this.botStep();
      }
    } else {
      this.nextPlayer = 0;
    }
  }

  closeTimer () {
    this.nextRound();
    this.nextPlayer++;
    this.nextMover(this.party[this.nextPlayer].name);
    this.botStep();
  }

  timer () {
      return this.state.refreshTimer  ? <Timer finishTimer={this.closeTimer} /> : <div>Timer: 5.0</div>
  }

  refreshTimer () {
    this.setState( () => {
      return {refreshTimer: false}
    })

    this.setState( () => {
      return {refreshTimer: true}
    })
  }


  render() {
    const {map, setting} = this;
    
    return (
      <section className='game__container'>
        <React.StrictMode>
       <div>Rounds: {this.state.rounds}  Your turn: {this.state.moveKnow}  Timer: {this.timer()} </div>
        <Map map = {map} setting = {setting}/>
        {console.log(this.party)}
        </React.StrictMode>
      </section>
    )
  }
}

export default Game;