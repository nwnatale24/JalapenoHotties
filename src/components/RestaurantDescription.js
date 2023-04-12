import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Review from './Review';
//Testing
function FetchRestaurantName(props) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <div className="Description">
        <p>Restaurant Name: {props.names}</p>
        <p>City: {props.city}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <p>Website: {props.website}</p>
        <div className="Review-button" onClick={() => setIsToggled(!isToggled)}>
          Reviews
        </div>
      </div>
      {isToggled && <Review reviews={props.reviews} />}
    </div>
  );
}

export default FetchRestaurantName;
