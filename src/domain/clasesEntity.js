var mongoose = require('mongoose');

var claseSchema = new mongoose.Schema({
    name: String,
    hour: Number,
    day: String
})

module.exports = mongoose.model('Clases', claseSchema)