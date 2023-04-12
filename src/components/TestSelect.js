import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
//Testing for review
function TestSelect() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://127.0.0.1:8000/api/restaurants');
      const restaurants = response.data.restaurants.slice(0, 5);

      const options = restaurants.map((restaurant) => ({
        value: restaurant.name,
        label: restaurant.name,
      }));

      setOptions(options);
    }

    fetchData();
  }, []);

  return <Select options={options} />;
}

export default TestSelect;
