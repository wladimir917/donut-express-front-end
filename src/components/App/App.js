import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import Home from '../Home/Home';
import AvengersList from '../Secret/AvengersList';
import Avenger from '../Secret/Avenger';

const navOptions = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Secret',
      url: '/Secret'
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
        <Route exact path="/Secret" component={AvengersList} />
        <Route exact path="/Avenger/:id" component={Avenger} />

      </div>
    );
  }
}

export default App;
