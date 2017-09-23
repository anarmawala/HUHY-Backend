var express = require('express');
var Input = require('../models/input')

var router = express.Router();

router.post("/questionnaire", function(req, res, next) {
  var newInput = new Input();
  newInput.date = new Date();
  newInput.user.name = req.body.name;
  newInput.user.zip = req.body.zip;
  newInput.user.email = req.body.email;
  delete req.body.name;
  delete req.body.zip;
  delete req.body.email;  
  newInput.answers = req.body;
  Input.save(newInput, function(err) {
    if (err) throw err;
  });
});

router.get('/kiosk', function(req, res, next) {
  var zip = req.query.zip;
  res.json({}); //PLACEHOLDER
});

module.exports = router;