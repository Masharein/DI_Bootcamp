import React from 'react';

// class Events extends React.Component {
//   clickMe = () => {
//     return alert('I was clicked')
//   }

//   handleKeyDown = event => {
//     console.log('User pressed: ', event.key);

//     if (event.key === 'Enter') {
//       alert(`The Enter key was pressed, your input is ${event.target.value}`);
//     }
//   }

//   render() {
//     return (
//       <>
//         <div><button onClick={this.clickMe}>Click Me</button></div>
//         <input type='text' placeholder='Press the ENTER key' onChange={event => this.setState({ message: event.target.value })}
//           onKeyDown={this.handleKeyDown}></input>
//       </>
//     )
//   }
// }

// export default Events;


class Events extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <>
        <h4>Exercise 9</h4>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        </>
      );
    }
  }
  export default Events;