import React from 'react';
import '../App.css';
import { useState } from 'react';

function Review(props) {
  const [reviews, setReviews] = useState(props.reviews);

  const reviewList = reviews.map((review) => (
    <div className="review" key={review.rev_id}>
      <p><b>Title:</b> {review.title}</p>
      <p><b>Text:</b> {review.desc}</p>
      <p><b>Score:</b> {review.score}</p>
    </div>
  ));

  return (
    <div className="review-body">
      {reviewList}
    </div>
  );
}

export default Review;
