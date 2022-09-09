const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)
router.get('/', (req, res) => {
    // GET route code here

    const queryText = `SELECT * FROM "event";`
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
            for (let email of result.rows) {
                console.log("email", email.comment)
                let request = email.comment;

                const message = {
                    to: "houstontabernacle@gmail.com",
                    from: "kamophilippephilippe13@gmail.com",
                    subject: "request",
                    text: request,
                    html: request
                };
                sendGridMail.send(message)
                .then(() => {
                    console.log("Email for the upcoming event sent");
                }).catch((error) => {
                    console.log("error", error);
                    res.sendStatus(500)
                });
            };
        });
});

router.post('/', (req, res) => {
    console.log("event", req.body);
    const queryText = `
    INSERT INTO "event" ("link", "comment")
    VALUES ($1, $2);`
    pool.query(queryText, [req.body.link, req.body.comment])
        .then(() => { res.sendStatus(201); })
        .catch(err => {
            console.log("aboutserver", err)
        })
})

module.exports = router;