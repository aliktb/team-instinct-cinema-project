const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { Movie } = require('./movie')

const timeSchema = new Schema({
    time: Number,
    movie: Movie
})

const screenSchema = new Schema({
    name: String,
    showings: [timeSchema]
})

const Screen = model('Screen', screenSchema);

module.exports = { 'Screen': Screen };