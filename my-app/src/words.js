
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "words_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  matchWord();
});

function afterConnection() {
  connection.query("SELECT * FROM words", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function matchWord() {
    connection.query("SELECT * FROM words", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
      });
}





