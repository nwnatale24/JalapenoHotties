import React from 'react'
import '../App.css';


function FetchResturauntName(props){

return (
    <div className = "Description">
           <p>Resturaunt Name     : {props.names}</p>
           <p>City                : {props.city}</p>
           <p>Phone Number        : {props.phonenumber}</p>
           <p>website             : {props.website}</p>
</div> 
)
}
  
export default FetchResturauntName;
