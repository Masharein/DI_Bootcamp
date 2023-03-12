import React, { Component } from 'react'
import { INCREMENT_ACTION, DECREMENT_ACTION } from '../actions';
import { initialState, store } from '../reducers/counter';
import './Counter.css'

export class Counter extends Component {
    constructor(props) {   
        super(props); 
            this.state = initialState;
            store.subscribe(()=>this.setState(store.getState()))
    }
    increment () {
        store.dispatch(INCREMENT_ACTION)
    }
    decrement () {
        store.dispatch(DECREMENT_ACTION)
    }
  render() {
    return (
      <div className='flex'>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter