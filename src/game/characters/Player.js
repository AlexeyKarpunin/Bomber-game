import CONFIG from '../setting/config';
import checkStep from './checkStep';

class Player  {
  constructor (props) {
    this.id = 'player';
    this.life = true;
    this.place = props.place;
    this.name = CONFIG.map.player + props.name;

    this.step = this.step.bind(this);
  }

  step (x, keyPass) {
      
      switch (true) {
        // forward
        case keyPass === 'w' || keyPass === 'ц': 
          const forwardStep = document.getElementById(`${this.place - x}`);
          if (checkStep(forwardStep)) return false;
          document.getElementById(`${this.place}`).innerHTML = '';
          forwardStep.innerHTML = this.name;
          this.place -= x;
          return true;
        // left
        case keyPass === 'a' || keyPass === 'ф':
          const leftStep = document.getElementById(`${this.place - 1}`)
          if (checkStep(leftStep)) return false;
          document.getElementById(`${this.place}`).innerHTML = '';
          leftStep.innerHTML = this.name;
          this.place--;
        return true;
        // back
        case keyPass === 's' || keyPass === 'ы': 
          const backStep = document.getElementById(`${this.place +  x}`)
          if (checkStep(backStep)) return false;
          document.getElementById(`${this.place}`).innerHTML = '';
          backStep.innerHTML = this.name;
          this.place += x;
        return true;
        // right
        case keyPass === 'd' || keyPass === 'в': 
          const rightStep = document.getElementById(`${this.place + 1}`)
          if (checkStep(rightStep)) return false;
          document.getElementById(`${this.place}`).innerHTML = '';
          rightStep.innerHTML = this.name;
          this.place++;
          return true;
        default:
          break;
    }
  }

  bomb () {
    
  }
}

export default Player;