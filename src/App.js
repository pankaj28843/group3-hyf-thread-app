import React, { Component } from 'react';
import Header from './components/header/Header';
import Calendar from "./components/calendar/Calendar";
import MapComponent from "./components/map-component/MapComponent"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Calendar />
        <div>
          <MapComponent />
        </div>
      </div>
    );
  }
}

export default App;
