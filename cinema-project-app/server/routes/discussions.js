const express = require('express');
const { Discussion } = require('../persistence/discussion');
const router = express.Router();

router.get('/', (req, res, next) => {
    Discussion.find((error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
        } else {
            res.status(200).send(results);
        }
    })
})

module.exports = router;