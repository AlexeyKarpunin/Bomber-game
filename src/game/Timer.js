import React from 'react';


const defaultTime = 2.0;

class Timer extends React.Component {
  constructor () {
    super();
    this.state = {
      timer: parseFloat(defaultTime),
    }
    this.refreshTimer = () => {
      console.log('i am timer')
      this.setState(() => {
        return {timer: defaultTime}
     });
  }
    this.refreshTimer = this.refreshTimer.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const {finishTimer} = this.props;
    if (this.state.timer <= 0) {
      this.refreshTimer();
     finishTimer();
    } else {
        this.setState((state) => {
           const num = parseFloat(state.timer - 0.1)
           return {timer: parseFloat(num.toFixed(1))}
        });
    }
  }

  render () {
      return <span>{this.state.timer}</span>
  }
}

export default Timer;