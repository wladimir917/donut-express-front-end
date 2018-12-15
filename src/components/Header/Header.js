import React, { Component } from 'react';
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
          this.props.nav.map(navItem => <a className="App-link" key={navItem} href={navItem}>{navItem}</a>)
        }
      </div>
    );
  }
}
 
export default Header;