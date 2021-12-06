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

const Movie = model('Movie', movieSchema);

module.exports = { 'Movie': Movie };