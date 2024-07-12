const mysql = require("mysql");
const util = require("util");
const dotenv = require("dotenv");
dotenv.config();

let connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Koneksi Berhasil!");
  }
});

const query = util.promisify(connection.query).bind(connection);
module.exports = { connection, query };
