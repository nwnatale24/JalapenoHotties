import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
import Review from './Review';
function FetchResturauntName(props){
    const [isToggled, setIsToggled] = useState(false)

return (
    <div>
        <div className = "Description">
            <p>Resturaunt Name     : {props.names}</p>
            <p>City                : {props.city}</p>
            <p>Phone Number        : {props.phonenumber}</p>
            <p>website             : {props.website}</p> 
            <div className='Review-button' onClick={() => setIsToggled(!isToggled)}>
                Reviews
            </div> 
        </div>
        { isToggled && <Review title={props.review_title} text={props.review_text} score={props.review_total_score}/> } 
    </div>
)
}
  
export default FetchResturauntName;
