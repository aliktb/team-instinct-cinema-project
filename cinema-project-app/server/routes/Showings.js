const express = require('express');
const { Showing } = require('../persistence/Showing');
const router = express.Router();

router.get('/', (req, res, next) => {
    Showing.find((error, screens) => {
        if (error) {
            res.status(error.status).send(error);
        } else {
            res.status(200).send(screens);
        }
    })
})

router.get('/:id', (req, res, next) => {
    Showing.findById(req.params.id, (error, result) => {
        if (error) {
            res.status(error.status).send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.get('/name/:name', (req, res, next) => {
    Showing.find({ "name": req.params.name }, (error, result) => {
        if (error) {
            res.status(error.status).send(error);
        } else {
            res.status(200).send(result);
        }
    })
})

router.post('/create', (req, res, next) => {
    const showing = new Showing(req.body);
    showing.save().then((result) => {
        JSON.stringify(result)
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.delete('/delete/:id', (req, res, next) => {
    Showing.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            res.status(404).send(error.message);
        } else {
            res.status(204)
        }
    })
})

router.put('/update/:id', (req, res, next) => {
    Showing.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.status(202).send(result);
        }
    })
})

router.get('/title/:title', (req, res, next) => {
    Showing.find({ "movie.title": { $regex: req.params.title, $options: "i" } }, (error, showings) => {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(showings);
        }
    })
})

router.get("/title/e/:title", (req, res, next) => {
    Showing.find({ "movie.title": req.params.title }, (error, showings) => {
        if (error) {
            res.status(404).send(error);
        } else {
            res.status(200).send(showings);
        }
    })
})

router.get('/tag/:tag', (req, res, next) => {
    Showing.find({ "movie.tags": { $regex: req.params.tag, $options: "i" } }, (error, showings) => {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(showings);
        }
    })
})

module.exports = router;