import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home'
import Shop from './Components/Shop'
import Profile from './Components/Profile'

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </div>
);

export default App;
