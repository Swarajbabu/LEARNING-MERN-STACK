// Middleware runs for every request to the server, It can be used for logging, authentication, etc. 
// xIn this example, we log the request method and URL for every incoming request.

const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("middleware Executed");
    console.log(`Method: ${req.method} \nUrl: ${req.url}`);
    next();
})

app.get("/",(req,res)=>{
    res.send("This is Home page");
});

app.get("/about",(req,res)=>{
    res.send("about Page");
})

app.get("/help",(req,res)=>{
    res.send("Help page");
})

app.listen(3000,()=>{
    console.log("Server Started");
})

// Explanation:
// This Express app demonstrates application-level middleware. The middleware runs for every request,
// logs the request method and URL, then calls next() so the request can continue to the route handlers.
//
// Definition:
// Application-level middleware is middleware bound to an instance of the Express app with app.use().
// It is executed for all routes and HTTP methods unless specific route filters are applied.
//
// Example:
// A request to GET /about will first pass through the middleware, which prints the method and URL,
// then the /about route handler sends the "about Page" response.
// In this file, app.get('/', ...), app.get('/about', ...), and app.get('/help', ...) are the route handlers.
