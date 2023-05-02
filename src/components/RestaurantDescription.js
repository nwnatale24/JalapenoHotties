import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import Modal from "./Modal"
import { useState } from 'react';
import Review from './Review';
import ShowInfo from './ShowInfo';

function FetchResturauntName(props){
    const [isToggled, setIsToggled] = useState(false)
    const [isposted, setIsposted] = useState(false)
return (
    <div>
        <div className = "Description">
            <p>Resturaunt Name     : {props.names}</p>
            <p>City                : {props.city}</p>
            <p>Phone Number        : {props.phonenumber}</p>
            <p>Website             : {props.website}</p> 
            <div className='List-review-button' onClick={() => setIsToggled(!isToggled)}>
                Reviews
            </div> 
            <div className='List-review-button' onClick={() => setIsposted(!isposted)}>
               Post Reviews
            </div> 
        </div>
        { isToggled && 
        <Review 
        reviews = {props.reviews}
        /> }
        { isposted && 
        <ShowInfo rest_id = {props.id} user={props.user}></ShowInfo>} 
    </div>
)
}


export default FetchResturauntName;
