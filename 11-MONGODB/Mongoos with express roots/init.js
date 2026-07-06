const mongoose = require("mongoose");
const Chat = require("./models/chat");

mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
    .then((res) => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    })

const allChats = [
    {
        from: "Rahul",
        to: "Swaraj",
        msg: "Hi, how are you?",
        created_at: new Date()
    },
    {
        from: "Priya",
        to: "Rahul",
        msg: "I'm good. What about you?",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Neha",
        msg: "Let's meet tomorrow.",
        created_at: new Date()
    },
    {
        from: "Swaraj",
        to: "Rahul",
        msg: "I'm doing great!",
        created_at: new Date()
    },
    {
        from: "Anjali",
        to: "Rohit",
        msg: "Did you finish the project?",
        created_at: new Date()
    },
    {
        from: "Rohit",
        to: "Anjali",
        msg: "Yes, I submitted it yesterday.",
        created_at: new Date()
    },
    {
        from: "Kiran",
        to: "Sneha",
        msg: "Happy Birthday!",
        created_at: new Date()
    },
    {
        from: "Sneha",
        to: "Kiran",
        msg: "Thank you so much!",
        created_at: new Date()
    },
    {
        from: "Vikram",
        to: "Arjun",
        msg: "Can you send the notes?",
        created_at: new Date()
    },
    {
        from: "Arjun",
        to: "Vikram",
        msg: "Sure, I'll send them in a minute.",
        created_at: new Date()
    }
];

Chat.insertMany(allChats)
    .then((res) => {
        console.log("Inserted Successfully");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });