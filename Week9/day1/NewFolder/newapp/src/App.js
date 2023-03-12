import React from 'react';
import Child from './Components/Child';
import Child2 from './Components/Child2';
import { connect } from 'react-redux';
import './App.css'
import { changePropOne } from './redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property_one: 'text one',
    }
  }

  handleChange =(e) => {
    this.setState({property_one:e.target.value})
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello</h1>
          <input onChange={this.handleChange} type='text'></input>
          <div>{this.state.property_one}</div>

          <input onChange={this.props.changePropA} type='text'></input>
          <div>{this.props.a}</div>
          <div>{this.props.b}</div>
          <Child prop_one={this.state.property_one} />
          <Child2 hello={this.state.property_two} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.property_one
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    changePropA: (e) => {
      dispatch(changePropOne(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

