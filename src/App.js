import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './App.css';
import MuseumInfoCard from './MuseumInfoCard'


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.harvardartmuseums.org/object?size=1&sort=random&apikey=${API_KEY}`;

function App() {
  const [museumObject, setMuseumObject] = useState(null)

  function getRandomMuseumResult() {
    axios.get(API_URL)
    .then(res => {
      setMuseumObject(res.data.records[0]);
    }); 
  }

  return (
    <Container>
    <div className="App">
      <Row>
        <Col>
     <Button color="primary" onClick={getRandomMuseumResult}>Get an Object from the Harvard Art Museum</Button>
     </Col>
     </Row>
     <Row>
       <Col>
     { museumObject !== null ? <MuseumInfoCard info={museumObject} /> : null }
     </Col>
     </Row>
    </div>
    </Container>
  );
}

export default App;
