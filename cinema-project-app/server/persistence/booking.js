const mongoose = require('mongoose');
const { Schema, model } = mongoose;



const bookingSchema = new Schema({
    bookingRef: String,
    showingId: String,
    showingDate: String,
    showingTime: String,
    name: String,
    seats: [String],
    children: Number,
    adults: Number,
    movieTitle: String,
    screen: String,
    total: Number
}, {
    versionKey: false

});

const Booking = model('Booking', bookingSchema);

module.exports = { 'Booking': Booking }