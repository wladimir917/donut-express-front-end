import React, { Component } from 'react';
import './App.css';

import Header from '../header/Header';

const navOptions = [
    'Home',
    'About',
    'Login',
    'Logout'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header classname="App-header" nav={navOptions}></Header>
      </div>
    );
  }
}

export default App;
