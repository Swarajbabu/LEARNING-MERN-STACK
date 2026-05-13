const sql = require("mysql2");
const { faker } = require("@faker-js/faker");

const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    database: "sqlmini",
    password: "Swaraj@2005"
});

const createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

let data = [];
for (let i = 0; i < 100; i++){
    data.push(createRandomUser());
}
let q = "insert into user (id,username,email,password) values ?";
connection.query(q,[data],(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Inserted");
    }    
});

connection.end();
// console.log(data);