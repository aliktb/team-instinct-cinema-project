const express = require('express');
const { Booking } = require('../persistence/booking')
const router = express.Router();

router.get('/', (req, res, next) => {
    Booking.find((error, bookings) => {
        if (error) {
            console.error(error);
            res.send(error)
        } else {
            res.status(200).send(bookings);
        }
    })
})

router.get('/ref/:ref', (req, res, next) => {
    Booking.findOne({ "bookingRef": req.params.ref }, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.get('/:id', (req, res, next) => {
    Booking.findById(req.params.id, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.post('/create', (req, res, next) => {
    const booking = new Booking(req.body);
    booking.save().then((result) => {
        JSON.stringify(result)
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.delete('/delete/:id', (req, res, next) => {
    Booking.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            res.status(404).send(error.message);
        } else {
            res.status(204).send();
        }
    })
})

router.put('/update/:id', (req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(202).send(result);
        }
    })
})

module.exports = router;