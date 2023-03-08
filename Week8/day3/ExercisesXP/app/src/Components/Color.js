import React from 'react';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritecolor: 'red',
      beforeDiv: null,
      afterDiv: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouritecolor: 'yellow' });
    }, 5000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favouritecolor !== this.state.favouritecolor) {
      const beforeDiv = (
        <div>Before update my favourite color was {prevState.favouritecolor}</div>
      );
      const afterDiv = (
        <div>After update my favourite color is {this.state.favouritecolor}</div>
      );
      this.setState({ beforeDiv, afterDiv });
      console.log('Component updated!');
    }
  }

  changeColor = () => {
    this.setState({ favouritecolor: 'blue' });
  };

  render() {
    const { favouritecolor, beforeDiv, afterDiv } = this.state;
    return (
    <>
      <h1>
        My favourite color is {favouritecolor}{' '}
        <button onClick={this.changeColor}>Change color</button>
      </h1>
      {beforeDiv}
      {afterDiv}
      </>
    );
  }
}


export default Color;
