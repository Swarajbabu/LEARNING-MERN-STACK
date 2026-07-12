const express = require("express");
const app = express();

app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.path,req.hostname,req.time);
    next();
})

// count request
let count = 0;
const requestCounter = (req, res, next) => {
    count++;
    console.log(`Total Requests: ${count}`);
    next();
};
app.use(requestCounter);

app.get("/home",(req,res)=>{
    res.send("This the Home page");
})


app.listen(3000,()=>{
    console.log("Started");
});