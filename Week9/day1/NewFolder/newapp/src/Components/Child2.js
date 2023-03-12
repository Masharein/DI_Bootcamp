import React from 'react';
import { connect } from 'react-redux';

const Child2 = (props) => {
  return (
    <>
      <h2>Child Component 2</h2>
      <div>{props.prop_two}</div>
      <div>{props.b}</div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    b: state.property_two,
    hello : state.property_two
  }
}

export default connect(mapStateToProps)(Child2);