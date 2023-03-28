import { Route, Routes } from "react-router-dom"
import { Account } from "./pages/Account"
import { Home } from "./pages/Home"
import { TabsLinks } from "./pages/TabsLinks"
import { useEffect } from "react"
import jwt_decode from "jwt-decode" 

function App() {

  /* this function below logs the output information of the user 
     that we can verify against our local database. We can also
     check if the email_verified field is true to be sure.
  */ 

  function handleCallbackResponse(response) {
    console.log("Encoded JWT Credential" + response.credential);
    var user = jwt_decode(response.credential);
    console.log(user);

    /* store their email in a variable and log it. do something with 
      this so we can check if their email is in our database as a user.
    */
    var userEmail = user['email'];
    console.log(userEmail);

  }

  useEffect(() => {
    /* global google */ 
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallbackResponse
  });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}

    );

  }, []);


  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/TabsLinks" element={<TabsLinks />} />
  </Routes>
}

export default App

