import './App.css';
import Petinfo from './components/Petinfo';

function App() {
  return (
    <div className="App">
     <Petinfo animal="cat" age={10} hasPet/>
     <Petinfo animal="dog" age="7" hasPet={false}/>
    </div>
  );
}

export default App;
