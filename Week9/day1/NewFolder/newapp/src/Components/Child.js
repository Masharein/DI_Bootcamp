import React from 'react';
import { connect } from 'react-redux';

const Child = (props) => {
  return (
    <>
      <h2>Child Component</h2>
      <div>{props.prop_one}</div>
      <div>{props.b}</div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    b: state.property_one
  }
}

export default connect(mapStateToProps)(Child);
