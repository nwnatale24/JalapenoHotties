import React from 'react'
import '../App.css';
import axios from 'axios'
import RestaurantListView from './RestaurantListView';
export default class RestaurantList extends React.Component{
    
    
    state = {
        loading : true,
        names : "Loading...",
        id : "N/A",
        reviews : [],
        num_reviews: 0,
        average_review_score: 0,
        all_restaurants_not_sorted: [],
        all_restaurants_high_low: [],
        all_restaurants_low_high: []
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
        const restaurant_not_sorted = new Array()
        for(let i = 0; i < data.length;i++){
           restaurant_not_sorted[i] = [
            data[i].city,
            data[i].id,
            data[i].name,
            data[i].phone_number,
            data[i].website,
            data[i].latitide,
            data[i].longitude
        ]
           for(let k = 0; k < data2.length;k++){
            if ( restaurant_not_sorted[i][1] == review[k][4]){
                combined_reviews[i].push(review[k])
            }

           }
           combined_reviews[i].shift()
           restaurant_not_sorted[i].push(combined_reviews[i])
        }
        
        var num_restaurants = restaurant_not_sorted.length
        var sum = 0;
        var num_reviews = 0;
        var average_review_score = 0;
        for(let i = 0; i < num_restaurants; i++){
            num_reviews = restaurant_not_sorted[i][7].length;
            if(num_reviews != 0){
                for(let k = 0; k < num_reviews; k++){
                        sum = sum + restaurant_not_sorted[i][7][k][3]
                }
                average_review_score = Math.round(sum/num_reviews)
                restaurant_not_sorted[i].push(average_review_score)
                sum = 0
                num_reviews = 0
                average_review_score = 0
            }
            else {
                restaurant_not_sorted[i].push(0)
            }
        }
        //unsorted list
        const unsorted_list = [];
        for(let i = 0; i < num_restaurants; i++){
            unsorted_list[i] = { name: restaurant_not_sorted[i][2], value: restaurant_not_sorted[i][8] }
        }
        let unsorted_arr = unsorted_list.map(obj => Object.values(obj));
        //High to low scored restaurants
        const sorted_restaurants_high_low = [ ];
        for(let i = 0; i < num_restaurants; i++){
            sorted_restaurants_high_low[i] = { name: restaurant_not_sorted[i][2], value: restaurant_not_sorted[i][8] }
        }
        sorted_restaurants_high_low.sort((a, b) => b.value - a.value);
        const high_to_low = sorted_restaurants_high_low.sort((a, b) => b.value - a.value);
        let high_to_low_arr = high_to_low.map(obj => Object.values(obj));
        //low to high scored restaurants
        const sorted_restaurants_low_high = [ ];
        for(let i = 0; i < num_restaurants; i++){
            sorted_restaurants_low_high[i] = { name: restaurant_not_sorted[i][2], value: restaurant_not_sorted[i][8] }
        }
        sorted_restaurants_low_high.sort((a, b) => a.value - b.value);
        const low_to_high = sorted_restaurants_low_high.sort((a, b) => a.value - b.value);
        let low_to_high_arr = low_to_high.map(obj => Object.values(obj));
        
        this.setState({
            all_restaurants_not_sorted:unsorted_arr,
            all_restaurants_high_low:high_to_low_arr,
            all_restaurants_low_high:low_to_high_arr
        })
    }
    
    render() {
        return (
            <RestaurantListView 
            unsorted={this.state.all_restaurants_not_sorted} 
            high_low={this.state.all_restaurants_high_low} 
            low_high={this.state.all_restaurants_low_high}/>
        );
    }
}