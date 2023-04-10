import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantSelect from './RestaurantSelect';

function RestaurantDropdown({ placeholder }) {
  const [restaurant, setRestaurant] = useState();
  const [options, setOptions] = useState([]);

  const handleChange = (selectedOption) => {
    setRestaurant(selectedOption);
  };

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/restaurants')
      .then((response) => {
        setOptions(
          response.data.restaurants.map((entry) => ({
            label: entry,
            value: entry,
          }))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="restaurant-dropdown" style={{ padding: 0 }}>
      <RestaurantSelect
        value={restaurant}
        options={options}
        placeholder={placeholder || 'Select Cheesesteak Jawn'}
        dropdownPosition="top"
        onChange={handleChange}
        isSearchable
      />
    </div>
  );
}

export default RestaurantDropdown;
