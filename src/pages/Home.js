import React, { useState } from 'react'
import './App.css';
import RestaurantDropdown from '../components/RestaurantDropdown';
import { Link, Route, Routes } from "react-router-dom"
import axios from 'axios'
import FetchResturauntName from '../components/RestaurantDescription';
import TestSelect from '../components/TestSelect.jsx';
import Map from '../components/Map.jsx'

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

  return (
  <div>
    <div className = "header-container">
      <div className = "Logo">
        More Information
      </div>
      <div className = "Title">
        High-Steaks
      </div>
      <div className = "Logo">
        Map Filters
      </div>
      
    </div>
    <div className = "body-container">
      <div className = "LeftToolbar">
        <div className = "Account">
            <Link className="Account" style={{textdecoration:'none'}} to="/Account">Account</Link>
        </div>
        <div className = "TabsLinks">
            <Link className="TabsLinks" style={{textdecoration:'none'}}to="/TabsLinks">TabsLinks</Link>
        </div>
        <div className = "List">
          Sort
        </div>
        <div className = "Resturant">
        </div>
      </div>
      <div className = "Popup">
          <Map/>
          <TestSelect/>
          
      </div>
      <div className = "Filters">
        <div className = "FilterItems">
          Zipcode
        </div>
        <div className = "FilterItems">
          Distance Within
        </div>
        <div className = "FilterItems">
          Overall Score
        </div>
        <div className = "FilterItems">
          Price
        </div>
        <div className = "FilterItems">
          Dine-In
        </div>
        <div className = "FilterItems">
          Takout
        </div>
        <div id="signInDiv">
        Google Sign In</div>
      </div>
    </div>
  </div>
  
  );
}

