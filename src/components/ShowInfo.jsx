import React from 'react'
import '../App.css';
import axios from 'axios'
import Modal from "./Modal"



export default class ShowInfo  extends React.Component {
    render(){
        return(
            <div><Modal rest_id = {this.props.rest_id} user = {this.props.user}></Modal></div>
        )
    }
}