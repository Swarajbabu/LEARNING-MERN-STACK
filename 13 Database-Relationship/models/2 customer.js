const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relation')
    .then(() => {
        console.log("Connected");
    });

const orderSchema = mongoose.Schema({
    item: String,
    price: Number,
});

const custmerSchema = mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
});

const Order = mongoose.model("Order", orderSchema);
const Custmer = mongoose.model("Custmer", custmerSchema);

const findCustmer = async () => {
    let result = await Custmer.find({}).populate("orders");
    console.log(result);
}
findCustmer();


// const addcustmer = async ()=>{
//     let cust1 = new Custmer({
//         name: "Rahul Kumar"
//     });

//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Chocolate"});

//     cust1.orders.push(order1)
//     cust1.orders.push(order2)

//     let result = await cust1.save();
//     console.log(result);
// }
// addcustmer();


// const addOrders = async ()=>{
//     let result = await Order.insertMany([
//         {item: "Somasa", price: 20},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40},
//     ]);
//     console.log(result);
// };
// addOrders();



