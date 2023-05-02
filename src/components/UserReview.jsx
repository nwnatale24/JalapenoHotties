import React from 'react'
import '../App.css';
import { useState } from 'react';

function UserReview(props){
    const [isToggled, setIsToggled] = useState(true)
    const [isHighLow, setHighLow] = useState(false)
    const [isLowHigh, setLowHigh] = useState(false)
    const [isUnsorted, setUnsorted] = useState(false)
    const [isRecent, setRecent] = useState(true)
    const [isOld, setOld] = useState(false)

    

    console.log(props);

    console.log(props.reviews[0]);
    console.log(props.reviews[1]);

    const review_arr = []
    for(let i = 0; i <= props.reviews.length; i++){
        review_arr[i] = props.reviews[i];
    }


    const all_reviews = []
    for (let i = 0 ; i < props.reviews.length ; i++){
        all_reviews[i] = {
            title : props.reviews[i][1],
            desc : props.reviews[i][2],
            score : props.reviews[i][3],
            timestamp: props.reviews[i][4],
            restName: props.reviews[i][7]
        }
    }

    const low_high = all_reviews.toSorted((a, b) => a.score - b.score);
    const high_low = all_reviews.toSorted((a, b) => b.score - a.score);
    const recent = all_reviews.toSorted((a,b) => b.timestamp - a.timestamp)
    const old = all_reviews.toSorted((a,b) => a.timestamp - b.timestamp)

    //Unsorted User Reviews - sorting/mapping logic by flashkard
    const unsorted_list = all_reviews.map(review_1 => (
        <div className='review'>
            <h4>{review_1.restName}</h4>
           <p><b>Title:</b>  {review_1.title}</p>
           <p><b>Text:</b>{review_1.desc}</p>
           <p><b>Score:</b>  {review_1.score}</p>
           <p>{review_1.timestamp}</p>
        </div>
    ))
    const high_low_list = high_low.map(review_2 => (
        <div className='review'>
            <h4>{review_2.restName}</h4>
           <p><b>Title:</b>  {review_2.title}</p>
           <p><b>Text:</b>{review_2.desc}</p>
           <p><b>Score:</b>  {review_2.score}</p>
           <p>{review_2.timestamp}</p>
        </div>
    ))
    const low_high_list = low_high.map(review_3 => (
        <div className='review'>
            <h4>{review_3.restName}</h4>
           <p><b>Title:</b>  {review_3.title}</p>
           <p><b>Text:</b>{review_3.desc}</p>
           <p><b>Score:</b>  {review_3.score}</p>
           <p>{review_3.timestamp}</p>
        </div>
    ))

    const recent_list = recent.map(review_4 => (
        <div className='review'>
            <h4>{review_4.restName}</h4>
           <p><b>Title:</b>  {review_4.title}</p>
           <p><b>Text:</b>{review_4.desc}</p>
           <p><b>Score:</b>  {review_4.score}</p>
           <p>{review_4.timestamp}</p>
        </div>
    ))
    const old_list = old.map(review_5 => (
        <div className='review'>
            <h4>{review_5.restName}</h4>
           <p><b>Title:</b>  {review_5.title}</p>
           <p><b>Text:</b>{review_5.desc}</p>
           <p><b>Score:</b>  {review_5.score}</p>
           <p>{review_5.timestamp}</p>
        </div>
    ))
        //No conditional rendering yet
    return(
        <div className="review-body">
            <h3>Select List to see your reviews:</h3>
            <div className="button-body">
            <button className='review-sort-buttons' onClick={() => {setUnsorted(!isUnsorted);setRecent(false);setOld(false);setLowHigh(false); setHighLow(false);}}>Unordered</button>
            <button className='review-sort-buttons' onClick={() => {setRecent(!isRecent);setUnsorted(false);setOld(false);setLowHigh(false); setHighLow(false);}}>Recent-Oldest Added</button>
            <button className='review-sort-buttons' onClick={() => {setOld(!isOld);setRecent(false);setUnsorted(false);setLowHigh(false); setHighLow(false);}}>Oldest-Recent Added</button>
            <button className='review-sort-buttons' onClick={() => {setHighLow(!isHighLow);setUnsorted(false);setLowHigh(false);setRecent(false);setOld(false)}}>Best-Worst Scores</button>
            <button className='review-sort-buttons' onClick={() => {setLowHigh(!isLowHigh);setUnsorted(false);setHighLow(false);setRecent(false);setOld(false)}}>Worst-Best Scores</button>
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
    )


}

export default UserReview;