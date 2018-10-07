import React, { Component } from 'react';
import Calendar from "./component/Calendar";
import logo from './logo.svg';
import './App.css';
import MapComponent from "./components/MapComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <div>
          <MapComponent />
        </div>
      </div>
    );
  }
}

export default App;
