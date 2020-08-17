import React, { Component } from 'react';


import './App.css';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import Container from './components/Container';

class App extends Component {
  state = {
    monthsValue: 1,
  }

  render() {
   
    return (
      <div className="App">
        <Navbar />
        <Container />
        <Calendar />
      </div>
    )
  };
}

export default App;
