const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "MYSQL_CONNECION_NODEJS",
  password: "Swaraj@2005"
});

// connection.query()

let q = "insert into user (id,username,email,password) values ?";
let values = [
  ["102", "vecha", "swaraj@gmail.com", "123456"],
  ["103", "swaraj", "syamala@gmail.com", "456123"]
];

try {
  connection.query(q, [values], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
}
catch (err) {
  console.log(err);
}

connection.query("select * from user;", (err, result) => {
  console.log(result);
})

connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}



// console.log(getRandomUser());