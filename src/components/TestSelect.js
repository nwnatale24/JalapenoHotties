import React from 'react'
import '../App.css';
import axios from 'axios'
import Select from "react-select";


export default class TestSelect extends React.Component{
    
    state = {
        loading : true,
        restaurant_names : [],
        options_state : []
    }

    async componentDidMount() {

        const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
        const data = await answer.data.restaurants
        var name_array = new Array()
        for(let i = 0; i < 5; i++) {
            name_array[i] = data[i].name    
        }
        console.log(data)    
        const options = [
            {value: name_array[0], label : name_array[0]},
            {value: name_array[1], label : name_array[1]},
            {value: name_array[2], label : name_array[2]},
            {value: name_array[3], label : name_array[3]},
            {value: name_array[4], label : name_array[4]},
        ]; 
        
        this.setState({restaurant_names:name_array,options_state:options,loading:false})   
    }

    render() {
        return (
            
                <Select options={this.state.options_state}>
                </Select> 
           
        );
    }
}



