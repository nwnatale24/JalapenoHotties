import React, { Component } from 'react';
import axios from 'axios';
import Select from "react-select";
import FetchResturauntName from './RestaurantDescription';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import Map from './Map';

const queryParams = new URLSearchParams(window.location.search);
const user_id = queryParams.get("id");

export default class TestSelect extends Component {
  state = {
    loading: true,
    options_state: [],
    names: "Loading...",
    city: "Loading...",
    phonenumber: "Loading...",
    website: "Loading...",
    id: "N/A",
    reviews: [],
    latitide: 39.710117443535886,
    longitude: -75.11916101566422,
    timestamp: "N/A",
    userId: user_id
  };

  async componentDidMount() {
    const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
    const data = answer.data.restaurants;
    const answer2 = await axios.get("http://127.0.0.1:8000/api/reviews");
    const data2 = answer2.data.reviews;
    
    const review = [];
    const combined_reviews = new Array(data2.length).fill([]);
    const empty = new Array(5).fill("N/A");
    const all_reviews = new Array();
    for(let i = 0; i < data2.length; i++) {
      review[i] = [
        data2[i].id,
        data2[i].review_title,
        data2[i].review_text,
        data2[i].review_total_score,
        data2[i].restaurant_id,
        data2[i].timestamp
      ];
    }

    for(let i = 0; i < data.length; i++) {
      for(let k = 0; k < data2.length; k++) {
        if (data[i].id === review[k][4]) {
          combined_reviews[i].push(review[k]);
        }
      }
      data[i].reviews = combined_reviews[i];
    }

    const options = data.map((restaurant) => ({
      value: restaurant,
      label: restaurant.name
    }));

    this.setState({
      options_state: options,
      loading: false
    });   
  }

  render() {
    return (
    <div>
      <div className="Setup">
        <Select
          className="select-class"
          options={this.state.options_state}
          onChange={e => {
            const value = e.value;
            this.setState({
              city: value.city,
              id: value.id,
              names: value.name,
              phonenumber: value.phone_number,
              website: value.website,
              reviews: value.reviews,
              latitide: value.latitide,
              longitude: value.longitude
            });
            if (value.latitide.length === 0) {
              this.setState({
                reviews: [["N/A", "N/A", "N/A", "N/A", "N/A"]]
              });
            }
          }}
        />
        </div>
        <FetchResturauntName
          user={this.state.userId}
          id={this.state.id}
          names={this.state.names}
          city={this.state.city}
          phonenumber={this.state.phonenumber}
          website={this.state.website}
          reviews={this.state.reviews}
        />
        
        <Map
          latitide={this.state.latitide}
          longitude={this.state.longitude}
          names={this.state.names}
        />

    </div> 
        
    );
  }
}
