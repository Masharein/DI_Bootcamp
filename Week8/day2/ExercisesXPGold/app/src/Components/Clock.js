import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentDate: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Current Time:</h1>
        <h2>{this.state.currentDate.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;