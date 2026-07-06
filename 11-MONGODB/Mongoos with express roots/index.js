const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Chat = require("./models/chat");
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
    res.send("Root Working");
});

app.get("/chats", async (req, res) => {
    let allchats = await Chat.find({});
    // console.log(allchats);
    res.render("index.ejs", { allchats });
})

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/chats", (req, res) => {
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
});

app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params
    let data = await Chat.findById(id);
    res.render("edit.ejs",{data});
});

app.put("/chats/:id",(req,res)=>{
    let {id} = req.params;
    let data = req.body;

    console.log(id);
    console.log(data);

})

app.listen(port, () => {
    console.log(`Server Started in: ${port}`)
})

