// const mongoose = require('mongoose');
// const { Schema, model } = mongoose;

// const movieSchema = new Schema({
//     title: String,
//     rating: String,
//     runtime: Number,
//     cast: [String],
//     imageUrl: String,
//     release: Date,
//     tags: [String]
// })

// const seatSchema = new Schema({
//     seat: String,
//     taken: Boolean
// })

// const timeSchema = new Schema({
//     time: Number,
//     movie: movieSchema,
//     seats: [seatSchema]
// })

// const showingSchema = new Schema({
//     date: [String],
//     showings: [timeSchema]
// })

// const screenSchema = new Schema({
//     name: String,
//     dates: [showingSchema]
// })

// const Screen = model('Screen', screenSchema);

// module.exports = { 'Screen': Screen };
