import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);

reportWebVitals();
