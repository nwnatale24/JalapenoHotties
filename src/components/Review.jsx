import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
function Review(props){
    const [isHighLow, setHighLow] = useState(false)
    const [isLowHigh, setLowHigh] = useState(false)
    const [isUnsorted, setUnsorted] = useState(false)
    const [isRecent, setRecent] = useState(true)
    const [isOld, setOld] = useState(false)
    
    const all_reviews = []
    for (let i = 0 ; i < props.reviews.length ; i++){
        all_reviews[i] = {
            title : props.reviews[i][1],
            desc : props.reviews[i][2],
            score : props.reviews[i][3],
            timestamp: props.reviews[i][5]
        }
    }

    /* toSorted() is used instead of sort() because sort() mutates
    the original array every time it is invoked which was causing
    a bug where low_high reviews wouldn't work. toSorted() allows
    you to use a shallow copy and not mutate the original array.*/

    const low_high = all_reviews.toSorted((a, b) => a.score - b.score);
    const high_low = all_reviews.toSorted((a, b) => b.score - a.score);
    const recent = all_reviews.toSorted((a,b) => b.timestamp - a.timestamp)
    const old = all_reviews.toSorted((a,b) => a.timestamp - b.timestamp)
    
    const unsorted_list = all_reviews.map(review_1 => (
        <div className='review'>
           <p><font size="3"><u>{review_1.title}</u></font></p>
           <p>{review_1.desc}</p>
           <p><b>Score:</b>  {review_1.score}</p>
           <p>{review_1.timestamp}</p>
        </div>
    ))
    const high_low_list = high_low.map(review_2 => (
        <div className='review'>
           <p><font size="3"><u>{review_2.title}</u></font></p>
           <p>{review_2.desc}</p>
           <p><b>Score:</b>  {review_2.score}</p>
           <p>{review_2.timestamp}</p>
        </div>
    ))
    const low_high_list = low_high.map(review_3 => (
        <div className='review'>
           <p><font size="3"><u>{review_3.title}</u></font></p>
           <p>{review_3.desc}</p>
           <p><b>Score:</b>  {review_3.score}</p>
           <p>{review_3.timestamp}</p>
        </div>
    ))
    const recent_list = recent.map(review_4 => (
        <div className='review'>
            <p><font size="3"><u>{review_4.title}</u></font></p>
           <p>{review_4.desc}</p>
           <p><b>Score:</b>  {review_4.score}</p>
           <p>{review_4.timestamp}</p>
        </div>
    ))
    const old_list = old.map(review_5 => (
        <div className='review'>
           <p><font size="3"><u>{review_5.title}</u></font></p>
           <p>{review_5.desc}</p>
           <p>Score: {review_5.score}</p>
           <p>{review_5.timestamp}</p>
        </div>
    ))
    
return (
    <div className='review-body'>
        <div className='button-body'>
        <button className='review-sort-buttons' onClick={() => {setUnsorted(!isUnsorted);setHighLow(false);setLowHigh(false);setRecent(false);setOld(false)}}>Unordered</button>
        <button className='review-sort-buttons' onClick={() => {setHighLow(!isHighLow);setUnsorted(false);setLowHigh(false);setRecent(false);setOld(false)}}>Best</button>
        <button className='review-sort-buttons' onClick={() => {setLowHigh(!isLowHigh);setUnsorted(false);setHighLow(false);setRecent(false);setOld(false)}}>Worst</button>
        <button className='review-sort-buttons' onClick={() => {setRecent(!isRecent);setUnsorted(false);setHighLow(false);setLowHigh(false);setOld(false)}}>Newest</button>
        <button className='review-sort-buttons' onClick={() => {setOld(!isOld);setUnsorted(false);setHighLow(false);setLowHigh(false);setRecent(false)}}>Oldest</button>
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
        { isRecent && 
        <div>{recent_list}</div>
        }
        { isOld && 
        <div>{old_list}</div>
        }
    </div>
)}
  
export default Review;