// Dependencies
// =============================================================
var express = require("express");

var router = require('./controllers/aussi_controller.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================

app.get("/test", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.send("test!")
    console.log("connected")
  });

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });

app.use('/', router);
app.use(express.static("public"));

  var port = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log("App is listening on port " + port);
});