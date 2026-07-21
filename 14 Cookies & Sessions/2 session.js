const { tr } = require("@faker-js/faker");
const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({
    secret: "MysecerateString",
    resave: false,
    saveUninitialized: true
}));

app.get("/test",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1
    }
    res.send(`Number of request send by the user: ${req.session.count}`);
});

// theis session value we can use in any route and it will be same for the user until the session is destroyed or expired.
app.get("/signup",(req,res)=>{
    let {name = "Anonymose"} = req.query;
    req.session.name = name;
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
    res.send(`Hello, ${req.session.name}`);
})

app.get("/",(req,res)=>{
    res.send("Root");
})

app.listen(3030);
