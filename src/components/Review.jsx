import React, { useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Review(props){
  const [isHighLow, setHighLow] = useState(false);
  const [isLowHigh, setLowHigh] = useState(false);
  const [isUnsorted, setUnsorted] = useState(false);
  const [isRecent, setRecent] = useState(false);
  const [isOld, setOld] = useState(false);
  
  const all_reviews = props.reviews.map(review => ({
    title: review[1],
    desc: review[2],
    score: review[3],
    timestamp: review[5]
  }));

  /* toSorted() is used instead of sort() because sort() mutates
  the original array every time it is invoked which was causing
  a bug where low_high reviews wouldn't work. toSorted() allows
  you to use a shallow copy and not mutate the original array.*/

  const toSorted = (arr, compareFn) => [...arr].sort(compareFn);

  const low_high = toSorted(all_reviews, (a, b) => a.score - b.score);
  const high_low = toSorted(all_reviews, (a, b) => b.score - a.score);
  const recent = toSorted(all_reviews, (a,b) => b.timestamp - a.timestamp)
  const old = toSorted(all_reviews, (a,b) => a.timestamp - b.timestamp)
  
  const reviewList = (reviews) => (
    reviews.map(review => (
      <div className='review' key={review.timestamp}>
        <p><b>Title:</b> {review.title}</p>
        <p><b>Text:</b> {review.desc}</p>
        <p><b>Score:</b> {review.score}</p>
        <p>{review.timestamp}</p>
      </div>
    ))
  );

  return (
    <div className='review-body'>
      <div className='button-body'>
        <button className='review-sort-buttons' onClick={() => {setUnsorted(!isUnsorted);setHighLow(false);setLowHigh(false);setRecent(false);setOld(false)}}>Unordered</button>
        <button className='review-sort-buttons' onClick={() => {setHighLow(!isHighLow);setUnsorted(false);setLowHigh(false);setRecent(false);setOld(false)}}>Best-Worst Scores</button>
        <button className='review-sort-buttons' onClick={() => {setLowHigh(!isLowHigh);setUnsorted(false);setHighLow(false);setRecent(false);setOld(false)}}>Worst-Best Scores</button>
        <button className='review-sort-buttons' onClick={() => {setRecent(!isRecent);setUnsorted(false);setHighLow(false);setLowHigh(false);setOld(false)}}>Recent-Oldest Added</button>
        <button className='review-sort-buttons' onClick={() => {setOld(!isOld);setUnsorted(false);setHighLow(false);setLowHigh(false);setRecent(false)}}>Oldest-Recent Added</button>
      </div>
      
      { isHighLow && <div>{reviewList(high_low)}</div> }
      { isLowHigh && <div>{reviewList(low_high)}</div> }
      { isUnsorted && <div>{reviewList(all_reviews)}</div> }
      { isRecent && <div>{reviewList(recent)}</div> }
      { isOld && <div>{reviewList(old)}</div> }
    </div>
  )
}

export default Review;
