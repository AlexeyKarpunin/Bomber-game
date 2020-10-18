import checkStep from './checkStep';

class Bot {
  constructor (props) {
    this.life = true;
    this.place = props.place;
    this.name = 'M';
    this.id = 'bot';
  }

  step (x) {
    const forwardStep = document.getElementById(`${this.place - x}`);
    const backStep = document.getElementById(`${this.place +  x}`);
    const leftStep = document.getElementById(`${this.place - 1}`);
    const rightStep = document.getElementById(`${this.place + 1}`);

    const stepAray = [forwardStep, backStep, leftStep, rightStep];
    let result = [];

    for (let i = 0; i < stepAray.length; i++) {
      if (!checkStep(stepAray[i])) {
        result.push(stepAray[i]);
      }
    }
    
    const randomNumber = Math.floor(Math.random() * result.length);
    document.getElementById(`${this.place}`).innerHTML = '';
    const randomMove = result[randomNumber];
    randomMove.innerHTML = this.name;
    switch (randomMove) {
      case forwardStep:
        this.place -= x;
        break;
      case backStep:
        this.place += x;
        break;
      case leftStep:
        this.place -=  1;
        break;
      case rightStep:
        this.place += 1;
        break;
      default:
        break;
    }
    return true;
  }

  bomb () {

  }
}

export default Bot;