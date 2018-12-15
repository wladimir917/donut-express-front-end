import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Home from '../Home/Home';

const navOptions = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'About',
      url: '/About'
    },
    {
      text: 'Login',
      url: '/Login'
    },
    {
      text: 'Logout',
      url: '/Logout'
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={() => (<Header classname="App-header" nav={navOptions} />) }/>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
