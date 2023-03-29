import React from 'react'
import '../App.css';
import axios from 'axios'
import Select from "react-select";
import FetchResturauntName from './RestaurantDescription';
import e from 'cors';
import { Link } from 'react-router-dom';

export default class TestSelect extends React.Component{
    
    
    state = {
        loading : true,
        options_state : [],
        names : "Loading...",
        city : "Loading...",
        phonenumber: "Loading...",
        website: "Loading...",
        id : "N/A",
        reviews : []
        
    }

    async componentDidMount() {

        const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
        const data = await answer.data.restaurants

        const answer2 = await axios.get("http://127.0.0.1:8000/api/reviews");
        const data2 = await answer2.data.reviews
       
        
        const review = new Array()
        const combined_reviews = new Array()
        const empty = new Array(5).fill("N/A")
        const all_reviews = new Array()
        for(let i = 0; i < data2.length;i++){
            review[i] = [data2[i].id,data2[i].review_title,data2[i].review_text,data2[i].review_total_score,data2[i].restaurant_id]
            combined_reviews[i] = [""]
         }
     
        //Objects can't be stored as a value in the react select option value field. 
        //To fix this I made an array called "object" that holds each part of the json data,
        //which makes it able to be stored in the options.
        const restaurant = new Array()
        for(let i = 0; i < data.length;i++){
           restaurant[i] = [data[i].city,data[i].id,data[i].name,data[i].phone_number,data[i].website]
           for(let k = 0; k < data2.length;k++){
            if ( restaurant[i][1] == review[k][4]){
                combined_reviews[i].push(review[k])
            }

           }
           combined_reviews[i].shift()
           restaurant[i].push(combined_reviews[i])
        }
           
           
        //Options has two components the value and the label, this for loop assigns the data we got
        //from the axios request to the value and labels in the options.
        const options = []; 
        for(let i = 0; i < data.length;i++){
            options[i] = {value : restaurant[i], label: data[i].name}
        }
        this.setState({options_state:options,loading:false})   
    }
    
    render() {
        return (
                <div>
                    <Select 
                    className = "select-class"
                    options={this.state.options_state} 
                    onChange={e => {
                        console.log(e.value[5])
                        const response_len = e.value.length
                        this.setState({
                            city:e.value[0],
                            id: e.value[1],
                            names:e.value[2],
                            phonenumber:e.value[3],
                            website:e.value[4],
                            reviews : e.value[5]})
                           
                        if(e.value[5].length == 0){
                            this.setState({
                                reviews : [["N/A","N/A","N/A","N/A","N/A"]]
                            })
                        }}}/>
                
                    <FetchResturauntName 
                    id = {this.state.id}
                    names = {this.state.names} 
                    city = {this.state.city} 
                    phonenumber = {this.state.phonenumber} 
                    website = {this.state.website}
                    reviews = {this.state.reviews}>
                    </FetchResturauntName>
                </div> 
        );
    }
}