const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // GET route code here

    const queryText = `SELECT * FROM "new"
    ;`
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
    console.log("new", req.body);
    // RETURNING "id" will give us back the id of the created movie
    const queryText = `
    INSERT INTO "new" ("date", "address", "title", "comment")
    VALUES ($1, $2, $3, $4);`
    // FIRST QUERY MAKES MOVIE
    pool.query(queryText, [req.body.date, req.body.address, req.body.title, req.body.comment])
        .then(() => { res.sendStatus(201); })
        .catch(err => {
            console.log("aboutserver", err)
        })
})

module.exports = router;