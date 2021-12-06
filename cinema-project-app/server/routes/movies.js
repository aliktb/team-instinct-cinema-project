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

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.post('/create', (req, res, next) => {
    const movie = new Movie(req.body);
    movie.save().then((result) => {
        JSON.stringify(result)
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.delete('/delete/:id', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            res.status(404).send(error.message);
        } else {
            res.status(204).send(`Movie: ${req.params.id} deleted successfully`);
        }
    })
})

router.put('/update/:id', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.status(202).send(result);
        }
    })
})

module.exports = router;