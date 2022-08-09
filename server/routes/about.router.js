const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // GET route code here

    const queryText = `SELECT * FROM "about"
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
    console.log("sdndsd", req.body);
    // RETURNING "id" will give us back the id of the created movie
    const queryText = `
    INSERT INTO "about" ("aboutpage")
    VALUES ($1);`

    // FIRST QUERY MAKES MOVIE
    pool.query(queryText, [req.body.about])
        .then(() => { res.sendStatus(201); })
        .catch(err => {
            console.log("aboutserver", err)
        })
})

module.exports = router;