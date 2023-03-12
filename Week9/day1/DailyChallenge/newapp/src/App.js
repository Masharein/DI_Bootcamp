import React, { Component } from 'react';
import MovieList from './Components/MovieList'
import './App.css';
import MovieDetails from './Components/MovieDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Movies</h1>
        <div className="container">
          <MovieList />
          <MovieDetails />
        </div>
      </div>
    );
  }
}

export default App;
