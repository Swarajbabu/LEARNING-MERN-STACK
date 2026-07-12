const express = require("express");
const app = express();

app.use((req,res,next)=>{
    let isLoggedIn = true;
    if(!isLoggedIn){
        return res.send("Login First");
    }
    next();
})

app.get("/",(req,res)=>{
    res.send("Dashboard");
})

app.get("/about",(req,res)=>{
    res.send("About page");
})

app.listen(3000,()=>{
    console.log("Started Server");
}); 