import React, { Component } from 'react';
import Characters from './components/Characters'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      fullData: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/?page=1');
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
        this.setState({fullData: data})
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = (event) => {
    event.preventDefault()
    this.getCharacters(this.state.fullData.next)
  }
  previousPage = (event) => {
    event.preventDefault()
    this.getCharacters(this.state.fullData.previous)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters characterData={this.state.starwarsChars} />
        <button onClick={this.previousPage}>Previous</button>
        <button onClick={this.nextPage}>Next</button>
      </div>
    );
  }
}

export default App;
