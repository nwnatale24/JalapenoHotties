import React, { useState } from 'react';
import '../App.css';


function Marker(props){
    //states for different radii 
    const [isOneMile, setOneMile] = useState(false);
    const [isFiveMile, setFiveMile] = useState(false);
    const [isTenMile, setTenMile] = useState(false);

    const restPins = props.restaurants.map(restaurant => ({
        name: restaurant[2],
        lat: restaurant[5],
        lng: restaurant[6]
    }))

    /*
    / Sorting pins based on selected location radius
    /
    / Need to implement logic for checking coordinates proximity to user-inputted zip code
    */
    const toSorted = (arr, compareFn) => [...arr].sort(compareFn);

    const one_mile = toSorted(restaurants, (a, b) => (a.lat - b.lat && a.lng - b.lng));
    const five_mile = toSorted(restaurants, (a, b) => (a.lat - b.lat && a.lng - b.lng));
    const ten_mile = toSorted(restaurants, (a, b) => (a.lat - b.lat && a.lng - b.lng));
}