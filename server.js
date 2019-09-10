// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.send("connected!")
  });

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });

  var port = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log("App is listening on port " + port);
});