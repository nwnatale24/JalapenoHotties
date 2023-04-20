import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
import Modal from 'react-modal';
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
    alert(inputs);
    const test = inputs;
    test.rid = props.rest_id;
    test.user = props.user;
    console.log(test[0]);
    var bodyFormData = new FormData();
    bodyFormData.append('review_title',  test.title);
    bodyFormData.append('review_text',  test.description);
    bodyFormData.append('review_total_score', test.score);
    bodyFormData.append('user_id', test.user);
    bodyFormData.append('restaurant_id',  test.rid);
    console.log(bodyFormData);

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    const s1 = '' + test.title;
    const s2 = '' + test.description;
    const s3 = '' + test.score;
    const s4 = '' + test.user;
    const s5 = '' + test.rid;
    const url = 'http://127.0.0.1:8000/api/reviews?review_title='+ s1 + '&review_text=' + s2 + '&review_total_score=' + s3 + '&user_id=' + s4 + '&restaurant_id=' + s5;
    axios.post(url, bodyFormData, config)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
    console.log(bodyFormData);
}

  return (
    <form onSubmit={handleSubmit}>
      <label>Reviw Title:
      <input 
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>Description
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <label>Score:
        <input 
          type="number" 
          name="score" 
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