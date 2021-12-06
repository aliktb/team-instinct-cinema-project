const express = require('express');
const { Screen } = require('../persistence/screen');
const router = express.Router();

router.get('/', (req, res, next) => {
    Screen.find((error, screens) => {
        if (error) {
            res.status(error.status).send(error);
        } else {
            res.status(200).send(screens);
        }
    })
})

router.get('/:id', (req, res, next) => {
    Screen.findById(req.params.id, (error, result) => {
        if (error) {
            res.status(error.status).send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.get('/name/:name', (req, res, next) => {
    Screen.find({ "name": req.params.name }, (error, result) => {
        if (error) {
            res.status(error.status).send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.post('/create', (req, res, next) => {
    const screen = new Screen(req.body);
    screen.save().then((result) => {
        JSON.stringify(result)
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    })
})