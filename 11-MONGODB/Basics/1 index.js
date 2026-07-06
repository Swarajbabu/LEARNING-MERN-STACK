const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/myapp1')
    .then(() => {
        console.log("Connected");
    });

// create a schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// create a model or collection
const User = mongoose.model("User", userSchema);

// insert Single Document data into the collection or database
/*
const user1 = new User({
    name: "SwarajBabu",
    email: "syamalaswaraj@gmail.com",
    age: 22
});
const user2 = new User({
    name: 'Raj',
    email: 'raj@gmail.com',
    age: 28
})
user1.save();
user2.save().then((res) => {
    console.log("Data Entered: " + res);
});

// insert Multiple Document data into the collection or database
User.insertMany([
    {name: 'Raj',email: 'raj@gmail.com',age: 88},
    {name: 'nani',email: 'nami@gmail.com',age: 85},
    {name: 'akhil', email: 'akhil@gmail.com',age: 99}
]).then((res)=>{
    console.log(res);
});

*/

// find data from the collection or database

// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age: {$gt: 85}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });



// findOne data from the collection or database

// User.findOne({}).then((res)=>{
//     console.log(res.name);
// });

// User.findOne({age: {$gt: 85}}).then((res)=>{
//     console.log(res);
// })



// update data in the collection or database
// User.updateOne({name: 'SwarajBabu'},{age: 99}).then((res)=>{
//     console.log(res)
// })

// User.updateMany({age: {$gt: 85}},{age: 55}).then((res)=>{
//     console.log(res);
// })

// findOneAndUpdate data in the collection or database

User.findOneAndUpdate({name: "Raj"},{age: 18}).then((res)=>{
    console.log(res);
})

// User.findOneAndUpdate({name: "Raj"},{age: 99},{new: true}).then((res)=>{
//     console.log(res);
// })

// User.deleteOne({name: "Raj"}).then((res)=>{
//     console.log(res);
// });

// User.deleteMany({age: {$gt: 85}}).then((res)=>{
//     console.log(res);
// });

