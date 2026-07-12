const express = require("express");
const app = express();
// custom error class we can use to throw errors with a status code and message
const ExpressError = require("./8.0 Custam-Class-Error");


const checkToken = (req, res, next) => {
    const { token } = req.query;
    if (token === "giveaccess") {
        return next();
    }
    // if the token is not correct, we throw an error with a status code and message
    throw new ExpressError(401,"Access Denied");
}

app.get("/api", checkToken, (req, res) => {
    console.log("Home page");
    res.send("Home Page");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(430,"access to admin only")
})

// error handling middleware
app.use((err,req,res,next)=>{
    console.log("---------ERROR-----------");
    let { status = 500, message = "Internal Server Error" } = err;
    res.status(status).send(message);
})

app.listen(3000);