const pool = require('./modules/pool');
require("dotenv").config();


function scheduleDelete(){
    console.log("running schedule delete");
    const queryText = `delete from "new" where DATE_TRUNC('DAY', date) = CURRENT_DATE;`
    pool.query(queryText).then(() => {
        console.log("event was delete")
    })
    .catch((error) => {
        console.log(error);
    })

}

module.exports = scheduleDelete;