import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import Logo from '../Logo.png';
import cheesesteak from '../cheesesteak.png';

// Sample API get call with a button to get the list of resturants. 
// Outputs the results of the API call to the console log.
// Can see the reponse using inspect element in Chrome. 

export function Login() {

// 1. Set a variable up to hold the user_id entry of the 
//    logged in user. 
  var user_id = 0;

  // 2. Set up navigate for navigating to home page after
  //    successful login. 
  const navigate = useNavigate();


  // 3. Declare functions needed for user validity checking. 
  //
  // checks if google verified the email and if the user exists
  // in the local database. if they do not, create the user since 
  // they were verified by the Google auth API. 
  function handle_success_callback(user) {

    console.log(user);
    
    if (user['email_verified'] = "true") {
      const userEmail = user['email'];
      const userFName = user['given_name'];
      const userLName = user['family_name'];
 
      checkIfInDatabase(userEmail, userFName, userLName);

    } else {
      console.log("ERROR: User not recognized or not verified by google authentication API.")
    }
  }

  // adds a non-existent verified user to the local database. 
  function addUserToDatabase(userEmail, userFName, userLName) {
    let url = "http://127.0.0.1:8000/api/users/";

    axios.post(url, null, { params: {
      email_address: userEmail,
      first_name: userFName,
      last_name: userLName
    }
  }

  ).then((response)=> {
    
    user_id = response.data.users[0].id;
    var complete_url = "/Home";
    
    navigate({
      pathname: complete_url,
      search: '?id=' + user_id
    });
    
  })
  .catch(error => {
    console.error(error);
  })

  }

  // check if user is in local db. if they are 
  // not, add them to the DB. 
  function checkIfInDatabase(userEmail, userFName, userLName) {

    let url = "http://127.0.0.1:8000/api/users/email/" + userEmail;

    axios.get(url).then((response)=> {

     if (response.data.users.length == 0) {
      addUserToDatabase(userEmail, userFName, userLName);
     } else {
      user_id = response.data.users[0].id;
      var complete_url = "/Home";
      navigate({
        pathname: complete_url,
        search: '?id=' + user_id
      });

     }
      
    })
    .catch(error => {
      console.error(error);
    })

  }

  return (
    <div>
      <style>{'body { background-color: lightgrey }'}</style>
      <div className='loginPage'>
      <img src={Logo} className= "Logo2" alt='Logo2'/>
      <br></br>
      <div className='text-box'>
      Login to Continue
      <br></br><br></br>
      <center>
        {/* create a google login button. handle a successful login with the 
            handle_success_callback() function, along with the user. 
        */ }
        <GoogleLogin
          size='large'
          onSuccess={response => {
            var user = jwt_decode(response.credential);
            console.log(user);
            handle_success_callback(user);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        </center>
        </div>
        <img src={cheesesteak} className= "cheesesteak" alt='cheesesteak'/>
      </div>
    </div>

  );
}

