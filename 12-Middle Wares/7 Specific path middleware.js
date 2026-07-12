// Specific path middleware
const express = require("express");
const app = express();

app.use("/home", (req, res, next) => {
    console.log("Home middleware");
    next();
});

app.get("/home", (req, res) => {
    res.send("Welcome to Home");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

// if no route matches, this middleware will handle the request
// then it will send a response with "page not found"
app.use((req,res)=>{
    res.status(404).send("page not found");
});

app.listen(3000);