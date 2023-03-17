import { useState } from 'react'
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import ResetCount from './components/ResetCount';

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <Counter count={count}/>
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
      <Button onClick={incrementCount}/>
      <ResetCount onClick={resetCount} count={count}/>
    </div>
  );
}

export default App;
