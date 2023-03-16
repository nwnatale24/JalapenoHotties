import React from 'react'
import '../App.css';
import axios from 'axios'


export default class FetchResturauntName extends React.Component{
    
    state = {
        loading : true,
        restaurant_names : []
    }

    async componentDidMount() {

        const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
        const data = await answer.data.restaurants
        var name_array = new Array()
        for(let i = 0; i < 5; i++) {
            name_array[i] = data[i].name    
        }
        this.setState({restaurant_names:name_array,loading:false})    
        
        
        console.log(this.state.restaurant_names)
       
        
    }

    render() {
        return (
        <div className="Description">
            {this.state.loading || !this.state.restaurant_names ? (
                <div> loading...</div>
            ) : (
                <div> 
                <div>Resturaunt Name : {this.state.restaurant_names[0]}</div>
                </div>
            )}
            </div>
        );
    }
}