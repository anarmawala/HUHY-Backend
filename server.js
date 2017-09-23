var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var logger = require('morgan');
var morgan = require('morgan');

var configDB = require('./config/database');

var app = express();

mongoose.connect(configDB.url, {useMongoClient: true}); // connect to db

var index = require('./routes/index')(passport);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;