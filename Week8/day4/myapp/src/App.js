
import './App.css';

import React from 'react';
import Counter from './Components/Counter'
import Parent from './Parent'
import Child from './Child'


function App() {
  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Parent auth ='admin'>
      <Child/>
      </Parent>
    </div>
  );
}

export default App;
