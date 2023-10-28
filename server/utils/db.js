import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "emlpoyee",
});

con.connect(function (err) {
  if (err) {
    console.log("Connected error!");
  } else {
    console.log("Connected!");
  }
});

export default con;
