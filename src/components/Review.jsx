import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
function Review(props){
    const [isHighLow, setHighLow] = useState(false)
    const [isLowHigh, setLowHigh] = useState(false)
    const [isUnsorted, setUnsorted] = useState(false)
    
    const all_reviews = []
    for (let i = 0 ; i < props.reviews.length ; i++){
        all_reviews[i] = {
            title : props.reviews[i][1],
            desc : props.reviews[i][2],
            score : props.reviews[i][3],
        }
    }

    /* toSorted() is used instead of sort() because sort() mutates
    the original array every time it is invoked which was causing
    a bug where low_high reviews wouldn't work. toSorted() allows
    you to use a shallow copy and not mutate the original array.*/
    
    const low_high = all_reviews.toSorted((a, b) => a.score - b.score);
    const high_low = all_reviews.toSorted((a, b) => b.score - a.score);
    
    const unsorted_list = all_reviews.map(review_1 => (
        <div className='review'>
           <p><b>Title:</b>  {review_1.title}</p>
           <p><b>Text:</b>{review_1.desc}</p>
           <p><b>Score:</b>  {review_1.score}</p>
        </div>
    ))
    const high_low_list = high_low.map(review_2 => (
        <div className='review'>
           <p><b>Title:</b>  {review_2.title}</p>
           <p><b>Text:</b>{review_2.desc}</p>
           <p><b>Score:</b>  {review_2.score}</p>
        </div>
    ))
    const low_high_list = low_high.map(review_3 => (
        <div className='review'>
           <p><b>Title:</b>  {review_3.title}</p>
           <p><b>Text:</b>{review_3.desc}</p>
           <p><b>Score:</b>  {review_3.score}</p>
        </div>
    ))
    
return (
    <div className='review-body'>
        <div className='button-body'>
        <button className='review-sort-buttons' onClick={() => {setUnsorted(!isUnsorted);setHighLow(false);setLowHigh(false)}}>Unordered</button>
        <button className='review-sort-buttons' onClick={() => {setHighLow(!isHighLow);setUnsorted(false);setLowHigh(false)}}>Best-Worst Scores</button>
        <button className='review-sort-buttons' onClick={() => {setLowHigh(!isLowHigh);setUnsorted(false);setHighLow(false)}}>Worst-Best Scores</button>
        </div>
        
        { isHighLow && 
        <div>{high_low_list}</div>
        }
        { isLowHigh && 
        <div>{low_high_list}</div>
        }
        { isUnsorted && 
        <div>{unsorted_list}</div>
        }
    </div>
)}
  
export default Review;