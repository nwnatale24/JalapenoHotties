import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';

import RestaurantSelect from "./RestaurantSelect";
import RestaurantDropdown from './RestaurantDropdown';
import { useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';




function ShowModal(props){
   const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const test = inputs;
    test.rid = props.rest_id;
    const queryParams = new URLSearchParams(window.location.search)
    const user_id = queryParams.get("id");

    
    var bodyFormData = new FormData();
    bodyFormData.append('review_title',  test.title);
    bodyFormData.append('review_text',  test.description);
    bodyFormData.append('review_total_score', test.score);
    bodyFormData.append('user_id', user_id);
    bodyFormData.append('restaurant_id',  test.rid);
    

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    const s1 = '' + test.title;
    const s2 = '' + test.description;
    const s3 = '' + test.score;
    const s4 = '' + user_id;
    const s5 = '' + test.rid;
    const url = 'http://127.0.0.1:8000/api/reviews?review_title='+ s1 + '&review_text=' + s2 + '&review_total_score=' + s3 + '&user_id=' + s4 + '&restaurant_id=' + s5;
    axios.post(url, bodyFormData, config)
    .then(response => {
        console.log(response);
        window.location.reload();
    })
    .catch(error => {
        console.log(error);
    });
    
}

  return (
    <form onSubmit={handleSubmit}>
      <label>Review Title:
      <br></br>
      <input 
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>Description:
      <br></br>
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <label>Score: (1-5)
        <br></br>
        <input 
          type="number" 
          name="score" 
          min="1"
          max="5"
          value={inputs.score || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <input type="submit" />
    </form>
  )
}






export default ShowModal;