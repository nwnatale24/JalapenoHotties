import React from 'react'
import '../App.css';
import axios from 'axios'

export default class RestaurantList extends React.Component{
    
    
    state = {
        loading : true,
        names : "Loading...",
        id : "N/A",
        reviews : [],
        num_reviews: 0,
        average_review_score: 0,
        restaurants: []
    }

    async componentDidMount() {

        const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
        const data = await answer.data.restaurants
        const answer2 = await axios.get("http://127.0.0.1:8000/api/reviews");
        const data2 = await answer2.data.reviews
       
        const review = new Array()
        const combined_reviews = new Array()
        for(let i = 0; i < data2.length;i++){
            review[i] = [
                data2[i].id,
                data2[i].review_title,
                data2[i].review_text,
                data2[i].review_total_score,
                data2[i].restaurant_id
            ]
            combined_reviews[i] = [""]
         }
     
        //Objects can't be stored as a value in the react select option value field. 
        //To fix this I made an array called "object" that holds each part of the json data,
        //which makes it able to be stored in the options.
        const restaurant = new Array()
        for(let i = 0; i < data.length;i++){
           restaurant[i] = [
            data[i].city,
            data[i].id,
            data[i].name,
            data[i].phone_number,
            data[i].website,
            data[i].latitide,
            data[i].longitude
        ]
           for(let k = 0; k < data2.length;k++){
            if ( restaurant[i][1] == review[k][4]){
                combined_reviews[i].push(review[k])
            }

           }
           combined_reviews[i].shift()
           restaurant[i].push(combined_reviews[i])
        }
        console.log(restaurant[0][7])
        var num_restaurants = restaurant.length
        var sum = 0;
        var num_reviews = 0;
        var average_review_score = 0;
        for(let i = 0; i < num_restaurants; i++){
            num_reviews = restaurant[i][7].length;
            if(num_reviews != 0){
                for(let k = 0; k < num_reviews; k++){
                        sum = sum + restaurant[i][7][k][3]
                }
                average_review_score = sum/num_reviews
                restaurant[i].push(average_review_score)
                sum = 0
                num_reviews = 0
                average_review_score = 0
            }
            else {
                restaurant[i].push("No Scores Available")
            }
        }
    }
    
    render() {
        return (
                <div >
                        Click
                </div> 
        );
    }
}