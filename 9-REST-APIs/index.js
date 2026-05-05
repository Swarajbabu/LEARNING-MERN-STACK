const express = require('express');
const app = express();
const path = require("path")
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


const port = 8080;

app.set("views", path.join(__dirname, "/views"));                    // this is used to set the views folder as the default folder for rendering the ejs files. if we don't set this then we have to give the path of the ejs file in the render method. but if we set this then we can directly give the name of the ejs file in the render method.
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")))             // this is used to set the public folder as the default folder for serving the static files like css, js, images etc. if we don't set this then we have to give the path of the static files in the html file. but if we set this then we can directly give the name of the static files in the html file.
app.use(express.urlencoded({ extended: true }));                   // this is used to parse the form data from the request body. if we don't use this then we can't access the form data in the request body. this is a built-in middleware in express that parses incoming requests with urlencoded payloads and is based on body-parser. the extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). the qs library allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. when extended is false, you can only parse simple key-value pairs, which may not be sufficient for complex data structures.
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is Started in: ${port}`);
})

app.get("/", (req, res) => {
    res.redirect("/posts"); // fixed
});

let posts = [
    {
        id: uuidv4(),
        username: "swaraj",
        content: "I love to pllay Games"
    },
    {

        id: uuidv4(),
        username: "Babu",
        content: "I got 10lpa package"
    },
    {
        id: uuidv4(),
        username: "bunny",
        content: "I am Going to Trip"
    }
];

// to See all the Potes
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

// To crreate an new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
    // res.send("Post request is Working");
})
// for to hide the data after submition form and displaying in content
app.post("/posts", (req, res) => {
    const id = uuidv4();
    const { username, content } = req.body;
    posts.push({ id, username, content })
    res.redirect("/posts");
})

// to open the specific post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.send("POST NOT FOUND");
    }
    res.render("show.ejs", { post });
})


//Ubdate the specific post we can use patch or put
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.send("ID NOT FOUND");
    }
    post.content = newContent;
    res.redirect("/posts");
})
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.send("ID NOT FOUND");
    }
    res.render("edit.ejs", { post });
})


// DELETE THE POST
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p)=> id !== p.id);   // to remove the post
    // res.send("DELETE SUCESSFUL");
    res.redirect("/posts");
})




