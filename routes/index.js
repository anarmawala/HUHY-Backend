var express = require('express');
var Input = require('../models/input')
var formidable = require('formidable');

var router = express.Router();

router.get("/questionnaire", function(req, res, next) {
  res.json([
    "Did you eat yesterday?": ["yes", "no"],
    "Have you had difficulty getting food in the past 2 weeks": ["yes", "no"],
  ]);
});

router.post("/questionnaire", function(req, res, next) {
  
});

module.exports = router;