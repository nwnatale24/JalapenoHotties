const express = require('express')
const app = express()


app.get("/", (req, res) =>{
    res.send("I am running!");

})

app.get("/test", (req, res) =>{
    res.send("This is alive using /test!");

})

app.listen(3001, () => {
    console.log("running on port 3001");


})