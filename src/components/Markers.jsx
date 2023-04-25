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

    //logic below is placeholder
    const one_mile = toSorted(restPins, (a, b) => (a.lat - b.lat && a.lng - b.lng));
    const five_mile = toSorted(restPins, (a, b) => (a.lat - b.lat && a.lng - b.lng));
    const ten_mile = toSorted(restPins, (a, b) => (a.lat - b.lat && a.lng - b.lng));


    const markerDisplay = (restaurants) => (
        restaurants.map(restaurant => (
            <div className='marker'>
                <p><b>Name: </b> {restaurant.name}</p>
            </div>
        ))
    );


    return(
        <div>


            <div className="button-body">
                <button onClick={() => {setOneMile(!isOneMile); setFiveMile(false); setTenMile(false)}}>Restaurants within 1 Mile</button>
                <button onClick={() => {setFiveMile(!isFiveMile); setOneMile(false); setTenMile(false)}}>Restaurants within 5 Miles</button>
                <button onClick={() => {setTenMile(!isTenMile); setOneMile(false); setFiveMile(false)}}>Restaurants within 10 Miles</button>
            </div>

        </div>
    )
}

export default Marker;