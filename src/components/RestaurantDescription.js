import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Review from './Review';
import ShowInfo from './ShowInfo';

function FetchResturauntName(props) {
  const [isToggled, setIsToggled] = useState(true);
  const [isPosted, setIsPosted] = useState(false);

  return (
    <div>
      <div className="Description">
        <p>Restaurant Name: {props.names}</p>
        <p>City: {props.city}</p>
        <p>Phone Number: {props.phonenumber}</p>
        <p>Website: {props.website}</p> 
        <div className="List-review-button" onClick={() => setIsToggled(!isToggled)}>
          Reviews
        </div> 
        <div className="List-review-button" onClick={() => setIsPosted(!isPosted)}>
          Post Reviews
        </div> 
      </div>
      {isToggled && 
        <Review reviews={props.reviews} />}
      {isPosted && 
        <ShowInfo rest_id={props.id} user={props.user} />}
    </div>
  );
}

export default FetchResturauntName;
