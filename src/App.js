import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PlaceApp from "./components/place_app.js";

class App extends Component {
  render() {
    return (
      <div>
      <h1>My Place App</h1>
      <PlaceApp/>
      </div>
    );
  }
}

export default App;
