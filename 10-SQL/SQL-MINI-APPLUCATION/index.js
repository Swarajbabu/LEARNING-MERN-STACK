const express = require("express");
const path = require("path");
const sql = require("mysql2");
const { render } = require("ejs");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const { isBooleanObject } = require("util/types");


const app = express();
app.use(methodOverride("_method"));
const port = 3636;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    database: "sqlmini",
    password: "Swaraj@2005"
});

app.listen(port, () => {
    console.log(`Server is started in: ${port}`);
});

// ===============================================
// HOME PAGE
// ===============================================

// display home page with total number of users
app.get("/", (req, res) => {
    let q = "select count(*) from user";
    try {
        connection.query(q, (err, result) => {
            if (err) {
                throw err;
            }
            let count = result[0]["count(*)"];
            res.render("home", { count });
        })
    } catch (err) {
        res.send("There is an Some Error");
    }
});

// ===============================================
// DISPLAY ALL USERS
// ===============================================

// display all users in home page
app.get("/home", (req, res) => {
    let q = "select * from user";
    let q1 = "select count(*) from user";
    try {
        connection.query(q, (err, users) => {
            if (err) {
                throw err;
            }
            connection.query(q1, (err, result) => {
                if (err) {
                    throw err;
                }
                let count = result[0]["count(*)"];
                res.render("usersall.ejs", { users, count });
            });
        })

    } catch (err) {
        res.send("There is an Some Error");
    }
});


// ===============================================
// EDIT USER PAGE
// ===============================================

// display edit page for a user with id
app.get("/home/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id = ?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) {
                throw err;
            }
            let user = result[0];
            res.render("edit", { id, user });
            // console.log(result);
        });
    }
    catch (err) {
        return res.send("THERE IS SOME ISSHU IN DB");
    }
});

// ===============================================
// UPDATE USERNAME
// ===============================================

// update the username of a user with id
app.patch("/home/:id", (req, res) => {
    let { password: formpass, username: newUsername } = req.body;
    let { id } = req.params;
    // console.log(formpass, newUsername, id);
    let q = `select * from user where id = ?`;
    try {
        connection.query(q, id, (err, result) => {
            if (err) { throw err; }
            let user = result[0];
            if (formpass != user.password) {
                return res.send("Password Incorrect");
            }
            else {
                q2 = `update user set username = ? where id = ?`;
                connection.query(q2, [newUsername, id], (err, result) => {
                    if (err) throw err;
                    res.redirect("/home");
                });
            }

        });
    }
    catch (err) {
        res.send("THERE IS SOME ISSHU IN DB");
    }
});

// ===============================================
// CREATE NEW USER PAGE
// ===============================================

//Creating the new Account
app.get("/new", (req, res) => {
    res.render("new");
});

// ===============================================
// CREATE NEW ACCOUNT
// ===============================================

app.post("/new", (req, res) => {
    const { username: addusername, password: addpassword, email: addemail } = req.body;

    let q = "select * from user where username = ?";
    try {
        connection.query(q, [addusername], (err, result) => {
            if (err) { throw err };
            if (result.length > 0) {
                console.log(result);
                return res.send("User is AlreadyExisted");
            }
        });

        let id = uuidv4();
        const q1 = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)"
        connection.query(q1, [id, addusername, addemail, addpassword], (err, result) => {
            if (err) { throw err };
            res.redirect("/home");
        });
    } catch (err) {
        res.send("Some Error Occer");
    }
});


// ===============================================
// DELETE USER
// ===============================================

app.delete("/home/:id/delete", (req, res) => {
    const { id } = req.params;
    let q = "DELETE FROM user WHERE id = ?";
    connection.query(q,[id],(err,result)=>{
        res.redirect("/home");
    })
});