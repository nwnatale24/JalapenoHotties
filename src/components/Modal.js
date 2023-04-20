import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
import Modal from 'react-modal';
import RestaurantSelect from "./RestaurantSelect";
import RestaurantDropdown from './RestaurantDropdown';
import { useEffect } from 'react';
import axios from 'axios';




function ShowModal(props){
    const user_id = props.user;
    const review_id = props.rest_id;
    const [openModal, setOpenModal] = useState(false);
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

        <div>
            <form>
            <lable htmlFor="review_title">Review Title</lable>
            <br></br>
                <textarea
                    plaeholder="Review Title"
                    id="review_title"
                    name="review_title"
                />
                <br></br>
            <lable htmlFor="review_text">Review</lable>
                <br></br>
                <textarea
                    plaeholder="What did you think?"
                    id="review_text"
                    name="review_text"
                />
                <br></br>
                <label htmlFor="review_total_score">Review Score</label>
                <br></br>
                Score (1-5)
                <input
                    type="number"
                    placeholder="Score (1-5)"
                    id="review_total_score"
                    name="review_total_score"
                    autoComplete="off"
                    min="1"
                    max="5"
                />
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
                
        </div>
    )

}

export default ShowModal;