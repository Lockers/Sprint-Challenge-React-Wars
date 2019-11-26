import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CharacterList } from './components/CharacterList';
import './App.css';

const App = () => {

  const [data, setData] = useState([])
  const [fetchingData, setFetchingData] = useState(true)
  const [getRequest, setGetRequest] = useState('https://swapi.co/api/people/')

  useEffect(() => {
    if(fetchingData)
    axios
      .get(getRequest)
      .then(response => {
        setData(response.data.results)
        setGetRequest(response.data)
        setFetchingData(false)
        console.log(response.data.next)
    })
      .catch(error => {
      console.log(error)
    })
  }, [fetchingData])

  function handleClickPrevious(e) {
    e.preventDefault()
    if (getRequest.previous !== null) {
      setGetRequest(getRequest.previous)
      setFetchingData(true)
    }
  }
  function handleClickNext(e) {
    e.preventDefault()
    if (getRequest.next !== null) {
      setGetRequest(getRequest.next)
      setFetchingData(true)
    }
  }
  if (fetchingData)
    return (
      <h1>Loading your Nerd Stuff....</h1>
    )
  
  return (
    <div className="App">
      {data.map((card, index) => {
        return <CharacterList card={card} key={index} />
      })}
      <button onClick={handleClickPrevious}>Previous</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default App;
