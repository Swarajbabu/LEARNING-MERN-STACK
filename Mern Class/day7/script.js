// (function abc(){
//     console.log("This function runs")
// })();


// Call back function

function greet(uname,callback){
    console.log("Hello",uname);
    callback();
}
function done(){
    console.log("Greeting Is Done");
}

greet("Swaraj babu",done);



