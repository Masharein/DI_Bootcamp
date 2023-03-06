import logo from './logo.svg';
import './App.css';
import Car from './Components/Car'
// import Actor from './Components/Actor'
import Sunrise from './Components/Sunrise'


function App() {
  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]


  return (
    <div>
      {/* <Car colors = {carColors}/> */}
      {/* <Actor/> */}
      <Sunrise/>
    </div>
  );
}

export default App;
