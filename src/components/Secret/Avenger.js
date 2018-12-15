import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import avengers from '../../data/avengersData';


class Avenger extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      avenger: '',
      movies: [],
      isLoading: true,
     }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let movies = [];
    const avenger = avengers.find(avenger => `${avenger.id}` === id);
    if(avenger){
      movies = avenger.movies.map(movie => movie);
    };
    this.setState({avenger: avenger, movies: movies, isLoading: false});
  }

  render() {
    if(this.state.isLoading)
      return <div>Loading ...</div>
    if(!this.state.avenger) {
      return <Redirect to="/Secret"/>
    }
    return (

      <div className="avenger-page-container">
        <img className="avenger-page-img" src={this.state.avenger.img} alt="this.state.avenger.name"/>
        <h1>{this.state.avenger.name}</h1>
        <p>({this.state.avenger.nickname})</p>
        <p>{this.state.avenger.description}</p>
        <div>
          {this.state.movies.map(movie =>(
              <div>{movie}</div>
          ))}
        </div>
        <button className="button-purple" onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
     );
  }
}
 
export default Avenger;