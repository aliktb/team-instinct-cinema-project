const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const movieSchema = new Schema({
    title: String,
    rating: String,
    runtime: Number,
    cast: [String],
    imageUrl: String,
    release: String,
    tags: [String],
    description: String
})

const seatSchema = new Schema({
    seat: String,
    taken: Boolean
})

showingSchema = new Schema({
    screen: String,
    date: String,
    timeRaw: Number,
    time: String,
    movie: movieSchema,
    seats: [seatSchema]

}, { versionKey: false })

const Showing = model('Showing', showingSchema);

module.exports = { 'Showing': Showing };