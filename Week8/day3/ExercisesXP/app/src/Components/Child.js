import React from 'react';

class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  componentWillUnmount() {
    alert('The component named header is about to be unmounted');
  }

  deleteHeader = () => {
    this.setState({ show: false })
    this.setState({ header: null });
    this.componentWillUnmount()
  };

  render() {
    let header = '';
    if (this.state.show === true) {
      header = <h1>Hello, World</h1>;
    }
    return (
      <>
       {header}
       <button onClick={this.deleteHeader}>DELETE</button>
      </>
    );
  }
}

export default Child;

