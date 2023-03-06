import React from 'react';
let styles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 'auto',
    width: '300px',
    height: '100px',
    backgroundColor: 'pink',
    fontSize: '30px',
    marginBottom: '5px',
    border: '2px solid black'
  };
  let styleButton = {
    color: 'green',
    border: 'none',
    backgroundColor: 'pink',
    fontSize: '20px'
  }

  let styleh1 = {
    fontSize: '50px',
    marginLeft: '37%'
  }

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phpVotes: 0,
      pythonVotes: 0,
      javascriptVotes: 0,
      javaVotes: 0
    };
  }

  increasePhpVotes = () => {
    this.setState(prevState => ({ phpVotes: prevState.phpVotes + 1 }));
  };

  increasePythonVotes = () => {
    this.setState(prevState => ({ pythonVotes: prevState.pythonVotes + 1 }));
  };
  increaseJavaScriptVotes = () => {
    this.setState(prevState => ({ javascriptVotes: prevState.javascriptVotes + 1 }));
  };

  increaseJavaVotes = () => {
    this.setState(prevState => ({ javaVotes: prevState.javaVotes + 1 }));
  };

  render() {
    const { phpVotes, pythonVotes, javascriptVotes, javaVotes} = this.state;
    return (
      <>
      <h1 style={styleh1}>Vote your language</h1>
        <div style={styles}>
          {phpVotes} Php
          <button style={styleButton} type="button" onClick={this.increasePhpVotes}>
            Click Here
          </button>
        </div>
        <div style={styles}>
          {pythonVotes} Python
          <button style={styleButton} type="button" onClick={this.increasePythonVotes}>
            Click Here
          </button>
        </div>
        <div style={styles}>
          {javascriptVotes} JavaScript
          <button style={styleButton} type="button" onClick={this.increaseJavaScriptVotes}>
            Click Here
          </button>
        </div>
        <div style={styles}>
          {javaVotes} Java
          <button style={styleButton} type="button" onClick={this.increaseJavaVotes}>
            Click Here
          </button>
        </div>
      </>
    );
  }
}

export default Language;

