import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
function Review(props){
    
return (
    <div className='review-body'>
           <p><b>Title:</b>  {props.reviews[0][1]}</p>
           <p><b>Text:</b>{props.reviews[0][2]}</p>
           <p><b>Score:</b>  {props.reviews[0][3]}</p>
    </div>  
)}
  
export default Review;