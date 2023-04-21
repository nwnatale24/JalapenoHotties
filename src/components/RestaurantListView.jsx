import React, { useState } from 'react';
import '../App.css';

function RestaurantListView(props) {
  const [isHighLow, setHighLow] = useState(false);
  const [isLowHigh, setLowHigh] = useState(false);
  const [isUnsorted, setUnsorted] = useState(false);
  
  const unsorted = props.unsorted.map(([name, average_score]) => ({ name, average_score }));
  const unsortedList = unsorted.map(({ name, average_score }) => (
    <div className='restaurantinfo'>
      <p><b>Title:</b> {name}</p>
      <p><b>Average Score:</b> {average_score}</p>
    </div>
  ));

  const highLow = props.high_low.map(([name, average_score]) => ({ name, average_score }));
  const highLowList = highLow.map(({ name, average_score }) => (
    <div className='restaurantinfo'>
      <p><b>Title:</b> {name}</p>
      <p><b>Average Score:</b> {average_score}</p>
    </div>
  ));

  const lowHigh = props.low_high.map(([name, average_score]) => ({ name, average_score }));
  const lowHighList = lowHigh.map(({ name, average_score }) => (
    <div className='restaurantinfo'>
      <p><b>Title:</b> {name}</p>
      <p><b>Average Score:</b> {average_score}</p>
    </div>
  ));

  return (
    <div className='Popup2'>
      <button className='norm-button' onClick={() => {setUnsorted(!isUnsorted); setHighLow(false); setLowHigh(false);}}>
        Unsorted Restaurant Listings
      </button>
      <button className='norm-button' onClick={() => {setHighLow(!isHighLow); setUnsorted(false); setLowHigh(false);}}>
        Highest to Lowest Rated Restaurants
      </button>
      <button className='norm-button' onClick={() => {setLowHigh(!isLowHigh); setUnsorted(false); setHighLow(false);}}>
        Lowest to Highested Rated Restaurants
      </button>
      {isHighLow && <div className='restaurant-body'>{highLowList}</div>}
      {isLowHigh && <div className='restaurant-body'>{lowHighList}</div>}
      {isUnsorted && <div className='restaurant-body'>{unsortedList}</div>}
    </div>
  );
}

export default RestaurantListView;
