var express = require('express');
var Input = require('../models/input')

var router = express.Router();

/*router.get("/questionnaire", function(req, res, next) {
  res.json({
    "Did you eat yesterday?": {
      id: "q1",
      ans: ["yes", "no"],
      required: "true"
    },
    "Have you had difficulty getting food in the past year?": {
      id: "q2",
      ans: ["yes", "no"],
      required: "true"
    },
    "Have you had difficulty getting food in the past month?": {
      id: "q2",
      ans: ["yes", "no"],
      required: "true"
    },
    "Zip Code": {
      id: "zip",
      required: "true"
    },
    "Name": {
      id: "name",
      required: "false"
    }
  });
});*/

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

module.exports = router;