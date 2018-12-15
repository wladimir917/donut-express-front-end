import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Avenger.css';

import avengers from '../../data/avengersData'

class AvengersList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      avengers: []
     }
  }

  componentDidMount() {
    this.setState({avengers: avengers})
  }
  
  render() { 
    return (
      <div>
        <h1>Top Secret! This is classified information!</h1>
        <div className="avengers-container">
          {this.state.avengers.map(avenger => (
            <Link to={`/avenger/${avenger.id}`} className='avenger-card' key={avenger.id}>
              <img className='avenger-thumb' src={avenger.thumbnail} alt={avenger.name}/>
              <h2>{avenger.name}</h2>
              <p>{avenger.nickname}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
 
export default AvengersList;