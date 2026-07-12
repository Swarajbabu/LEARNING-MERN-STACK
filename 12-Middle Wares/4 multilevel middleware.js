const express = require("express");
const app = express();

function isLoggedIn(req,res,next){
    let Logged = false;
    if(!Logged){
        return res.send("Login First");
    }
    next();
}

function isAdmin(req,res,next){
    let Admin = false;
    if(!Admin){
        return res.send("You are not Admin you are user go to user dashboard");
    }
}

// Route-level middleware if the user is not logged in then it will not allow to access the dashboard page
app.get("/dashboard",isLoggedIn,isAdmin,(req,res)=>{
    res.send("Dashboard");
})