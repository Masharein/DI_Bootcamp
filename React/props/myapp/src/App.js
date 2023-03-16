import './App.css';
import Petinfo from './components/Petinfo';

function App() {
  return (
    <div className="App">
     <Petinfo animal="cat" age={10}/>
     <Petinfo animal="dog" age="7"/>
    </div>
  );
}

export default App;
