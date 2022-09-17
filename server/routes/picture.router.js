const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // GET route code here
    const queryText = `SELECT * FROM "image";`
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error', error);
            res.sendStatus(500)
        })
});

router.post('/', (req, res) => {
    console.log("image", req.body);
    const queryText = `
    INSERT INTO "image" ("picture")
    VALUES ($1);`
    pool.query(queryText, [req.body.picture])
        .then(() => { res.sendStatus(201); })
        .catch(err => {
            console.log("picture", err)
        })
})

module.exports = router;