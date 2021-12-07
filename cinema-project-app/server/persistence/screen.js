const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const actorSchema = new Schema({
    name: String
})

const movieSchema = new Schema({
    title: String,
    rating: Number,
    runtime: Number,
    cast: actorSchema,
    imageUrl: String,
    release: Date,
    tags: [String]
})

const seatSchema = new Schema({
    seat: String,
    taken: Boolean
})

const timeSchema = new Schema({
    time: Number,
    movie: movieSchema,
    seats: [seatSchema]
})

const screenSchema = new Schema({
    name: String,
    showings: [timeSchema],
})

const Screen = model('Screen', screenSchema);

module.exports = { 'Screen': Screen };