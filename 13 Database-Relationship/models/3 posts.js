const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relation')
    .then(() => {
        console.log("Connected");
    });

const userSchema = mongoose.Schema({
    username: String,
    email: String,
})

const postSchema = mongoose.Schema({
    content: String,
    likes: Number,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    }
})

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const addData = async ()=>{
    // let user1 = new User({
    //     username: "swarajvecha",
    //     email: "swarajvecha@gmail.com"
    // })

    let user1 = await User.findOne({username: "swarajvecha"});

    let post2 = new Post({
        content: "Bye Bye",
        likes: 25,
    })

    post2.user = user1;

    // await user1.save();
    await post2.save();
}
// addData();


// populate is used to get the data of the user from the user collection and add it to the post collection
const getData = async () =>{
    let data = await Post.find({}).populate("user","username");         //
    console.log(data);
}
getData();
