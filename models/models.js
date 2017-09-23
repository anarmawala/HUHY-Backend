/**
 * Created by ilyaandreev on 23/09/2017.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports.answers = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});