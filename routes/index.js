var express = require('express');
var Input = require('../models/input.js')
var router = express.Router();

router.post("/questionnaire", function(req, res, next) {
  let personName = req.body.name;
  let zip = req.body.zip;
  let email = req.body.email;
  
  delete req.body.name;
  delete req.body.zip;
  delete req.body.email;  
  
  var newInput = new Input({
    date: Date(),
    user: {
      name: personName,
      zip: zip,
      email: email
    },
    answers: req.body
  });
  console.log(newInput);
  newInput.save(function(err) {
    if (err) throw err;
  });
  res.send("Success");
});

router.get('/kiosk', function(req, res, next) {
  var zip = req.query.zip;
  res.json({}); //PLACEHOLDER
});

module.exports = router;
