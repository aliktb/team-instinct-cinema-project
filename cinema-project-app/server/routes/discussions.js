const express = require('express');
const { isValidObjectId } = require('mongoose');
const { Discussion } = require('../persistence/discussion');
const router = express.Router();

router.get('/', (req, res, next) => {
    Discussion.find((error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            res.status(200).send(results);
        }
    })
})

router.get('/:id', (req, res, next) => {
    Discussion.findById((error, result) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            res.status(200).send(result)
        }
    })
})

router.post('/create', (req, res, next) => {
    const discussion = new Discussion(req.body);
    discussion.save().then((result) => {
        JSON.stringify(result)
        res.status(201).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.delete('/delete/:id', (req, res, next) => {
    Discussion.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            res.status(404).send(error.message);
        } else {
            res.status(204)
        }
    })
})

router.put('/update/:id', (req, res, next) => {
    Discussion.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.status(202).send(result);
        }
    })
})

module.exports = router;