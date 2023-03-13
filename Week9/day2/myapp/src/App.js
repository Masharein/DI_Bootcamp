import React from 'react';
import { connect } from 'react-redux';
import Day from './Day';
import './Day.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* //here */}
        <Day/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { weekday: state.weekday }
};

export default connect(mapStateToProps)(App);