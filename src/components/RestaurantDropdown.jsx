import React, { useState, useEffect, handleChange } from 'react';
import RestaurantSelect from "./RestaurantSelect"
import axios from 'axios'



function RestaurantDropdown({placeholder, data}) {
    const [restaurant, restaurantChange] = useState();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/restaurants")
        .then((response)=> response.json())
        .then((data) => {
            setOptions(
                data.map((entry) => {
                    var singleObj = {};
                    singleObj["label"] = entry;
                    singleObj["value"] = entry;
                    return singleObj;
                })
            );
    
        }).catch(error => {
            console.error(error);
        })
    }, []);
    
    return (
            <div className="restaurant-dropdown" style={{ padding: 0}}>
                <RestaurantSelect
                    value={restaurant}
                    options={options}
                    placeholder="Select Cheesesteak Jawn"
                    dropdownPosition="top"
                    onChange={handleChange}
                    isSearchable
                />
            </div>
        );
}

export default RestaurantDropdown;