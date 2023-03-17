import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
     <Wrapper color="pink">
      <h2>Text inside wrapper</h2>
      <button>Click me</button>
     </Wrapper>
     <Wrapper color="green">
      <h2>Another text</h2>
      <p>Some description</p>
      <input type="text" placeholder="Enter value"/>
     </Wrapper>
    </div>
  );
}

export default App;
