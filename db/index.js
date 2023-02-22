const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password', // <-- We want to create an ENV of some sort for this. Really bad practice. Just here to work for now ...
    database: 'JalapenoHotties'

})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// when hitting this endpoint, post a resturant name and address in the localhosted database. 
app.post("/api/resturant", (req, res) => {
    
    const resturantName = req.body.resturantName
    const resturantAddress = req.body.resturantAddress

    const sqlInsert = "INSERT INTO resturant (name, address) VALUES (?,?)"
    db.query(sqlInsert, [resturantName, resturantAddress, (error, result) => {
        console.log(result);
        console.error(error);
    }])

})

app.get("/test", (req, res) =>{
    res.send("This is alive using /test!");

})

app.listen(3001, () => {
    console.log("running on port 3001");


})