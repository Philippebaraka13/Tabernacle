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

        }).catch((error) => {
            console.log("error", error);
            res.sendStatus(500)
        });

});

router.post('/', (req, res) => {
    console.log("event", req.body);
    const comment = req.body.info;
    const link = req.body.link;
    const date = req.body.date;
    const queryText = `
    INSERT INTO "event" ("link", "date")
    VALUES ($1, $2);`
    pool.query(queryText, [link, date])
        .then(() => {
            console.log("insertaaaaaaaaaa", comment);
            res.sendStatus(201);
            if (comment == undefined) {
                console.log("no comment");
            } else {

                const message = {
                    to: "houstontabernacle@gmail.com",
                    from: "kamophilippephilippe13@gmail.com",
                    subject: "request",
                    text: comment,
                    html: comment
                };
                sendGridMail.send(message)
                    .then(() => {
                        console.log("Email for the upcoming event sent");
                    }).catch(err => {
                        console.log("aboutserver", err)
                    })
            }

        })
})

module.exports = router;