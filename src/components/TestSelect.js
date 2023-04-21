import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../App.css';

export default class TestSelect extends Component {
  state = {
    loading: true,
    restaurant_names: [],
    options_state: [],
  };

  async componentDidMount() {
    const answer = await axios.get('http://127.0.0.1:8000/api/restaurants');
    const data = answer.data.restaurants;
    const name_array = data.slice(0, 5).map((restaurant) => restaurant.name);

    const options = name_array.map((name) => ({ value: name, label: name }));

    this.setState({
      restaurant_names: name_array,
      options_state: options,
      loading: false,
    });
  }

  render() {
    return (
      <Select options={this.state.options_state} />
    );
  }
}
