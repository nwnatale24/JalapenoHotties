import React from 'react'
import './App.css';
import RestaurantDropdown from '../components/RestaurantDropdown';
import { Link, Route, Routes } from "react-router-dom"
import axios from 'axios'

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
        <div className = "restaurant-select">
          <RestaurantDropdown onClick={() => getResturants()}/>
        </div>
        <div className = "Resturant">

        {/* Create a restaurant with this button, passing a sample restaurant name and website. */}
        <button onClick={() => postResturant( "Testaurant", "somerestaurantwebsite.com")}>Post Resturant</button>
        </div>
      </div>
      <div className = "Popup">
        <div className="Map">
        </div>
        <div className= "Description">
          <p>Resturaunt Name : Test</p>
          <p>Overall Rating : N/A</p>
          
        </div>
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
      </div>
    </div>
  </div>
  
  );
}

