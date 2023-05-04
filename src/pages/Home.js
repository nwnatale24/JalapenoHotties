import React, { useState } from 'react'
import './App.css';
import RestaurantDropdown from '../components/RestaurantDropdown';
import { Link, Route, Routes } from "react-router-dom"
import axios from 'axios'
import FetchResturauntName from '../components/RestaurantDescription';
import TestSelect from '../components/TestSelect.jsx';
import RestaurantListData from '../components/RestaurantListData';
import Logo from '../Logo.png'
// Sample API get call with a button to get the list of resturants. 
// Outputs the results of the API call to the console log.
// Can see the reponse using inspect element in Chrome. 
function getResturants() {
  axios.get("http://127.0.0.1:8000/api/restaurants").then((response)=> {
    console.log(response)
    
  })
  .catch(error => {
    console.error(error);
  })

}

function postResturant(restaurant_name, restaurant_website) {
  axios.post('http://127.0.0.1:8000/api/restaurants/', null, { params: {
      name: restaurant_name,
      website: restaurant_website
    }
  }

  ).then((response)=> {
    console.log(response)
    
  })
  .catch(error => {
    console.error(error);
  })

}


export function Home() {

  /* get the user_id of the current logged in user from the 
     query parameter. 
  */

     const queryParams = new URLSearchParams(window.location.search)
     const user_id = queryParams.get("id");
     console.log(user_id);

     const url = `/Account/?id=${user_id}`;

  return (
  <div>
    <div className = "header-container">
      
    </div>
    <div className = "body-container">
      <div className = "LeftToolbar">
        <br></br>
        <div className = "Account">
            <Link className="Account" style={{textdecoration:'none'}} to={url}>Account</Link>
        </div>
        
      </div>
          
      <div className = "Middle">
        <img src={Logo} className= "Logo" alt='Logo'/>
        <br></br>
        <RestaurantListData/>
      </div>

      <div className = "Right">
        <TestSelect/>
      </div>
    </div>
    </div>
  
  );
}

