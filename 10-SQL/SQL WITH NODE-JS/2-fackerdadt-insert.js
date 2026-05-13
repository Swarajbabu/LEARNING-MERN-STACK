const sql = require("mysql2");
const { faker } = require("@faker-js/faker");


const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Swaraj@2005",
    database: "MYSQL_CONNECION_NODEJS"
});

const createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

//// we can insert multiple rows at once using bulk insert using array of arrays

// let data = [];
// for (let i = 0; i < 5; i++) {
//     data.push(createRandomUser());
// }
// let q = "insert into user (id,username,email,password) values ?";
// connection.query(q, [data], (err, result) => {
//     if (err) { console.log(err); }
//     else { console.log("INSERTED"); }
// });


// we can also insert one by one using loop
for (let i = 0; i < 5; i++) {
    let val = createRandomUser();

    let q = "insert into user (id,username,email,password) values (?,?,?,?)";
    connection.query(q, val, (err, result) => {
        if (err) { console.log(err); }
        else { console.log("INSERTED"); }
    });
}


// connection.query("select * from user", (err, result) => {
//     console.log(result);
// })

connection.end();
