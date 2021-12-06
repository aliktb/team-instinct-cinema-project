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
    Movie.findOne({ "bookingRef": req.params.ref }, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    })
})