import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
function Review(props){

return (
    <div className='review-body'>
           <p><b>Title:</b>  {props.title}</p>
           <p>{props.text}</p>
           <p><b>Score:</b>  {props.score}</p>
    </div>  
)
}
  
export default Review;