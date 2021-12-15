const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const discussionSchema = new Schema({
    name: String,
    text: String,
    movieId: String,
    thread: String,
    rating: String,
}, { versionKey: false });

const Discussion = model('Discussion', discussionSchema)

module.exports = { 'Discussion': Discussion }