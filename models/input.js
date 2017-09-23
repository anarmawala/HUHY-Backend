let mongoose = require('mongoose');
let InputSchema = mongoose.Schema({
  date: Date(),
  answers: {},
  user: {
    zip: Number,
    name: String,
    email: String,
  },
});

module.exports = mongoose.model('Input', InputSchema);