import React, { Component } from 'react';
import './App.css';
// import Characters from './components/Characters';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
    };
  }
  
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return this.state.starwarsChars.map((char) => (
      <div className='mainDiv'>
        <p>Name: {char.name}</p>
        <p>Height: {char.height}</p>
        <p>Gender: {char.gender}</p>
      </div>
    ));
  
  }
}

