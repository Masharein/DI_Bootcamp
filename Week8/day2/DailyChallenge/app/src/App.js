import logo from './logo.svg';
import './App.css';
import Language from './Components/Language'

function App() {
  const languages = [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ]

  return (
    <div>
      <Language votes = {languages}/>
    </div>
  );
}

export default App;
