const express = require('express');
const { Booking } = require('../persistence/booking')
const router = express.Router();

router.get('/', (req, res, next) => {
    Movie.find((error, bookings) => {
        if (error) {
            console.error(error);
            res.send(error)
        } else {
            res.status(200).send(bookings);
        }
    })
})