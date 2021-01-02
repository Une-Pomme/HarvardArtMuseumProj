import React, { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.harvardartmuseums.org/object?size=1&apikey=${API_KEY}`;

function App() {

  // useEffect(() => {
  //   axios.get(API_URL)
  //   .then(res => {
  //     console.log(res)
  //   })
  // }) 

  useEffect(() => {
    axios.get(API_URL)
    .then(res => {
      console.log(res.data)
    });  
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
