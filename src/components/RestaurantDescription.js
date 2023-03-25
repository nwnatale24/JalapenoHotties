import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { Reviews } from '../pages/Reviews';
function FetchResturauntName(props){

const handleClick = () => {
    console.log("Clicked")
}

return (
    <div className = "Description">
           <p>Resturaunt Name     : {props.names}</p>
           <p>City                : {props.city}</p>
           <p>Phone Number        : {props.phonenumber}</p>
           <p>website             : {props.website}</p>
           <div>
            <Link className='Review-button'  style={{textdecoration:'none'}} to="/Reviews">Reviews</Link>
            </div>
    </div> 
    
)
}
  
export default FetchResturauntName;
