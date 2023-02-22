import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

// Main function to run the web app. 
function App() {
  
  const [resturantName, setResturantName] = useState('')
  const [resturantAddress, setResturantAddress] = useState('')
  
  const submitResturant = () => {
    Axios.post('http://localhost:3001/api/resturant', {
      resturantName: resturantName, 
      resturantAddress: resturantAddress
    }).then(() => {
        alert("Successful Insert");
      });
  };

  return (

    <div className="App">

      {/* Header for top of page */}
      <br />
      <h1><u>Test Database Hosting & API</u></h1>

      {/* Input boxes and input box labels */}
      <div className="testInput">
        <label>Resturant Name: </label>
        <input type="text" name="resturantName" onChange={(e) => {
          setResturantName(e.target.value)
        }}></input>
        <br />
        <label>Resturant Address:</label>
        <input type="text" name="resturantAddress" onChange={(e) => {
          setResturantAddress(e.target.value)
        }}></input>

        <button onClick={submitResturant}>Submit</button>
      </div>

    </div>
  );
}

export default App;
