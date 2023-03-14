import React from 'react';
import { connect } from 'react-redux';
import { ageUp, ageDown } from './actions';

const App = (props) => {
  const { age, onAgeUp, onAgeDown } = props;
  
  return (
    <div>
      <h1>Age: <span>{age}</span></h1>
      <button onClick={onAgeUp}>Age Up</button>
      <button onClick={onAgeDown}>Age Down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(ageUp()),
    onAgeDown: () => dispatch(ageDown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);










