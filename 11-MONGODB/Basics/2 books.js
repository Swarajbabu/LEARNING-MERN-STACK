const { default: mongoose, Types } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Books")
.then((res)=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
});

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [0, "Price cannot be negative"]
    }
});

const Book = mongoose.model("Book",userSchema);

// let book1 = new Book({
//     title: 'Dont think',
//     author: "Swaraj babu",
//     price: 850
// });
// book1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// });

// findOneAndUpdate data in the collection or database
// runValidators: true is used to validate the data before updating it in the database
Book.findByIdAndUpdate("6a4b3cca91caa7023921e574",{price: -100},{runValidators: true})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

