/*
create all the functions that do the routing for the app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var word = require('../models/aussi.js');

router.get("/", function(req, res) {
    word.selectAll(function(data) {
      var hbsObject = {
        words: data
      };
      console.log(hbsObject);
      res.json(hbsObject);
    });
  });

// router.get('/aussi', function (req, res) {

//   word.selectAll(function (data) {
//     var hbsObject = { words: data };
//     res.render('index', hbsObject);
//   });
// });

// router.post('/aussi/insertOne', function (req, res) {
//   burger.insertOne(['aussi_name', 'devoured'], [req.body.word_name, false], function () {
//     console.log("in callback");
//     res.redirect('/aussi');
//   });
// });

// router.put('/aussi/updateOne/:id', function (req, res) {
//   var condition = 'id = ' + req.params.id;

//   burger.updateOne({ devoured: req.body.devoured }, condition, function () {
//     res.redirect('/aussi');
//   });
// });

// router.delete('/aussi/delete/:id', function (req, res) {
//   var condition = 'id = ' + req.params.id;
//   burger.delete(condition, function () {
//     res.redirect('/aussi');
//   });
// });

module.exports = router;