const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relation')
    .then(() => {
        console.log("Connected");
    });

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {   
            _id: false ,
            location: String,
            city: String
        }
    ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "raj",
        addresses: [
            { 
                location: "12-67 ramalayam street" ,
                city: "Huzurnagar",
            },
        ],
    });

    user1.addresses.push({location: "chitanagar 13-49" , city: "Kodaa"});
    let result = await user1.save();
    console.log(result);
}

addUser();