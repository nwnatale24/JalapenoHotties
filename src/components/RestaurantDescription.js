import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import Modal from "./Modal"
import { useState } from 'react';
import Review from './Review';
import ShowInfo from './ShowInfo';

function FetchResturauntName(props){
    const [isToggled, setIsToggled] = useState(true)
    const [isposted, setIsposted] = useState(false)
return (
    <div>
        <div className = "Description">
            <p>Restaurant Name     : {props.names}</p>
            <p>City                : {props.city}</p>
            <p>Phone Number        : {props.phonenumber}</p>
            <p>Website             : {props.website}</p> 
        </div>
        <div className="Popup2">
            <button className='Description-Buttons' onClick={() => setIsToggled(!isToggled)}>
            Restaurant Reviews </button> 
            <button className='Description-Buttons' onClick={() => setIsposted(!isposted)}>
            Post Reviews </button> 
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
