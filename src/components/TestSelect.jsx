import React from 'react'
import '../App.css';
import axios from 'axios'
import Select from "react-select";
import FetchResturauntName from './RestaurantDescription';

export default class TestSelect extends React.Component{
    
    
    state = {
        loading : true,
        options_state : [],
        names : "Loading...",
        city : "Loading...",
        phonenumber: "Loading...",
        website: "Loading..."
        
    }

    async componentDidMount() {

        const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
        const data = await answer.data.restaurants

        //Objects can't be stored as a value in the react select option value field. 
        //To fix this I made an array called "object" that holds each part of the json data,
        //which makes it able to be stored in the options.
        const object = new Array()
        for(let i = 0; i < data.length;i++){
           object[i] = [data[i].city,data[i].name,data[i].phone_number,data[i].website]
        }
        //Options has two components the value and the label, this for loop assigns the data we got
        //from the axios request to the value and labels in the options.
        const options = []; 
        for(let i = 0; i < data.length;i++){
            options[i] = {value : object[i], label: data[i].name}
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
                        this.setState({
                            city:e.value[0],
                            names:e.value[1],
                            phonenumber:e.value[2],
                            website:e.value[3]})
                    }}/>
                
                    <FetchResturauntName 
                    names = {this.state.names} 
                    city = {this.state.city} 
                    phonenumber = {this.state.phonenumber} 
                    website = {this.state.website}/>
                </div> 
        );
    }
}