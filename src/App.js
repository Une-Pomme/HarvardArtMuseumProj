import React, { useState } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import './App.css';
import MuseumInfoCard from './MuseumInfoCard'


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.harvardartmuseums.org/object?size=1&apikey=${API_KEY}`;

function App() {
  const [museumObject, setMuseumObject] = useState(null)

  function getRandomMuseumResult() {
    axios.get(API_URL)
    .then(res => {
      setMuseumObject(res.data.records[0]);
    }); 
  }

  return (
    <div className="App">
     <Button onClick={getRandomMuseumResult}>Get an Object from the Harvard Art Museum</Button>
     { museumObject !== null ? <MuseumInfoCard info={museumObject} /> : null }
    </div>
  );
}

export default App;
