const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const seatSchema = new Schema({
    screen: String,
    seat: String
})

const bookingSchema = new Schema({
    bookingRef: Number,
    name: String,
    seats: [seatSchema],
    children: Number,
    adults: Number,
    movieTitle: String,
    date: Date
})

const Booking = model('Booking', bookingSchema);

module.exports = { 'Booking': Booking }