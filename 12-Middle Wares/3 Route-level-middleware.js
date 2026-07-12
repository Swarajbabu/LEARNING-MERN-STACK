const express = require("express");
const app = express();

function isLoggedIn(req,res,next){
    let Logged = false;
    if(!Logged){
        return res.send("Login First");
    }
    next();
}

app.get("/",(req,res)=>{
    res.send("Root node Working");
});

// Route-level middleware if the user is not logged in then it will not allow to access the dashboard page
app.get("/dashboard",isLoggedIn,(req,res)=>{
    res.send("Dashboard");
})

app.listen(3000);