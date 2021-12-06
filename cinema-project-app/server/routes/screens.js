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
