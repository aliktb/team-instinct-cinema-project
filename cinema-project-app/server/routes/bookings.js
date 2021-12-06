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

router.get('/ref/:ref', (req, res, next) => {
    Movie.findOne({ "bookingRef": req.params.ref }, (error, movies) => {

        if (error) {
            res.send(error);
        } else {
            res.status(200).send(movies);
        }
    })
})