const mongoose = require('mongoose');
const { Schema, model } = mongoose;



const movieSchema = new Schema({
    title: String,
    rating: Number,
    runtime: Number,
    cast: [String],
    imageUrl: String,
    release: Date,
    tags: [String]
})

const Movie = model('Movie', movieSchema);

module.exports = { 'Movie': Movie };