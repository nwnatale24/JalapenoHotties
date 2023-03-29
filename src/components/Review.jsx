import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
function Review(props){
    const all_reviews = []
    for (let i = 0 ; i < props.reviews.length ; i++){
        all_reviews[i] = {
            rev_id : props.reviews[i][0],
            title : props.reviews[i][1],
            desc : props.reviews[i][2],
            score : props.reviews[i][3],
            res_id : props.reviews[i][4],
        }
    }
    
    const review_list = all_reviews.map(review => (
        <div className='review'>
           <p><b>Title:</b>  {review.title}</p>
           <p><b>Text:</b>{review.desc}</p>
           <p><b>Score:</b>  {review.score}</p>
        </div>
    ))
    
return (
    <div className='review-body'>
           {review_list}
    </div>
)}
  
export default Review;