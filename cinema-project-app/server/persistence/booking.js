const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const seatSchema = new Schema({
    id: String
})

const bookingSchema = new Schema({
    bookingRef: Number,
    name: String,
    seats: [seatSchema]
})

const Booking = model(Booking, bookingSchema);

module.exports = { 'Booking': Booking }