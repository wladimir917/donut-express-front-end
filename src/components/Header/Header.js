import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../img/logo.png';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div className="App-header">
        <img className="App-logo" src={logo} alt="donut express"></img>
        {
          this.props.nav.map(navItem => <Link to={navItem.url} className="App-link" key={navItem.text} href={navItem.url}>{navItem.text}</Link>)
        }
      </div>
    );
  }
}
 
export default Header;