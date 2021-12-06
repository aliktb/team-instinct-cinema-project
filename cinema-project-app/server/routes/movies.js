const express = require('express');
const { Movie } = require('../persistence/movie');
const router = express.Router();



router.get('/', (req, res, next) => {
    Movie.find((error, movies) => {
        if (error) {
            console.error(error);
        } else {
            res.status(200).send(movies);
        }
    })
})

router.get('/title/:title', (req, res, next) => {
    Movie.find({ "title": `/${req.params.title}/` }, (error, movies) => {
        if (error) {
            console.error(error);
        } else {
            res.status(200).send(movies);
        }
    })
})

router.get('/tag/:tag', (req, res, next) => {
    Movie.find({ "tags": `/${req.params.tag}/` }, (error, movies) => {
        if (error) {
            console.error(error);
        } else {
            res.status(200).send(movies);
        }
    })
})