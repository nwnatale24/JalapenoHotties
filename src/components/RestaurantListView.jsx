import React from 'react'
import '../App.css';
import { useState } from 'react';
function RestaurantListView(props){
    const [isHighLow, setHighLow] = useState(false)
    const [isLowHigh, setLowHigh] = useState(false)
    const [isUnsorted, setUnsorted] = useState(false)
    const num_restaurants = props.unsorted.length
    
    const unsorted = []
    for (let i = 0 ; i < num_restaurants ; i++){
        unsorted[i] = {
            name : props.unsorted[i][0],
            average_score: props.unsorted[i][1]
        }
    }
    const unsorted_list = unsorted.map(rest_1 => (
        <div className='restaurantinfo'>
           <p><b>Title:</b>  {rest_1.name}</p>
           <p><b>Average Score:</b>  {rest_1.average_score}</p>
        </div>
    ))

    const high_low = []
    for (let i = 0 ; i < num_restaurants ; i++){
        high_low[i] = {
            name : props.high_low[i][0],
            average_score: props.high_low[i][1]
        }
    }
    const high_low_list = high_low.map(rest_2 => (
        <div className='restaurantinfo'>
           <p><b>Title:</b>  {rest_2.name}</p>
           <p><b>Average Score:</b>  {rest_2.average_score}</p>
        </div>
    ))

    const low_high = []
    for (let i = 0 ; i < num_restaurants ; i++){
        low_high[i] = {
            name : props.low_high[i][0],
            average_score: props.low_high[i][1]
        }
    }
    const low_high_list = low_high.map(rest_3 => (
        <div className='restaurantinfo'>
           <p><b>Title:</b>  {rest_3.name}</p>
           <p><b>Average Score:</b>  {rest_3.average_score}</p>
        </div>
    ))



return (
    
    <div className='Popup2'>
        <button className='norm-button' onClick={() => setUnsorted(!isUnsorted)}>Unsorted Restaurant Listings</button>
        <button className='norm-button' onClick={() => setHighLow(!isHighLow)}>Highest to Lowest Rated Restaurants</button>
        <button className='norm-button' onClick={() => setLowHigh(!isLowHigh)}>Lowest to Highested Rated Restaurants</button>
        { isHighLow && 
        <div className='restaurant-body'>{high_low_list}</div>
        }
        { isLowHigh && 
        <div className='restaurant-body'>{low_high_list}</div>
        }
        { isUnsorted && 
        <div className='restaurant-body'>{unsorted_list}</div>
        }
         
    </div>
)}
  
export default RestaurantListView;