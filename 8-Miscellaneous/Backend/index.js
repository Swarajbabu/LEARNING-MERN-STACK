const express = require('express');
const app = express();
let port = 8080;

// Middleware
// app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {Username,password} = req.query;
    res.send(`STANDED GET RESPONCE ${Username}`);
})
app.post("/register",(req,res)=>{
    let {Username,password} = req.body;
    res.send(`Standed Post Responce: ${Username}`);
})


app.listen(port,()=>{
    console.log(`Server Started in: ${port}`);
})
