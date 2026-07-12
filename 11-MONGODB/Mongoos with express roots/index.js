const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Chat = require("./models/chat");
const ExpressError = require("./ExpressError");
const wrapAsync = require("./wrapAsync");
let port = 3030;

mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
    .then((res) => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    })

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    // like this we can throw the error and it will be handled by the error handling middleware
    // throw new ExpressError(404, "Page Not Found");
    res.send("Root Working");
});

// wrapAsync is a function that takes a function as an argument and returns a new function that wraps the original function in a try/catch block. If the original function throws an error, 
// the error is passed to the next() function, which will be handled by the error handling middleware.
// instead of using try catch block in every async function we can use wrapAsync to handle the error and pass it to the error handling middleware
app.get("/chats", wrapAsync(async (req, res, next) => {
    let allchats = await Chat.find({});
    // console.log(allchats);
    res.render("index.ejs", { allchats });
}));

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/chats", (req, res, next) => {
    try {
        const { from, msg, to } = req.body;
        console.log(from);

        const user1 = new Chat({
            from,
            msg,
            to,
            created_at: new Date()
        });
        user1.save().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

app.get("/chats/:id/edit", async (req, res, next) => {
    try {
        const { id } = req.params;
        let data = await Chat.findById(id);
        if (!data) {
            throw new ExpressError(404, "Chat Not Found");
        }
        res.render("edit.ejs", { data });
    } catch (err) {
        next(err);
    }
});

app.put("/chats/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { msg } = req.body;

        const chat = await Chat.findByIdAndUpdate(
            id,
            { msg },
            { runValidators: true, new: true }
        );

        if (!chat) {
            throw new ExpressError(404, "Chat Not Found");
        }

        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

app.delete("/chats/:id/delete", async (req, res, next) => {
    try {
        const { id } = req.params;

        const chat = await Chat.findByIdAndDelete(id);

        if (!chat) {
            throw new ExpressError(404, "Chat Not Found");
        }

        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

function handleValidation(err) {
    console.log("This Was ValidationError. please follw roilz");
    console.dir(err.message);
    return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidation(err);
    }
    next(err);
});

// error handling middleware it will work for all the errors thrown in the application
// for async functions we need to use try catch block to catch the error and pass it to next() function
// this middleware will catch the error and send the response to the client
// not work for async functions because we are not using try catch block in the async functions
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error" } = err;
    res.status(status).send(message);
})

app.listen(port, () => {
    console.log(`Server Started in: ${port}`)
});

