const pool = require('./modules/pool');
require("dotenv").config();


function scheduleDelete(){
    //delete from "event" where DATE_TRUNC('DAY', date) < CURRENT_DATE + INTERVAL '2days';
    console.log("running schedule delete");
    const queryText = `delete from "new" where DATE_TRUNC('DAY', date) = CURRENT_DATE;`
    const queryText1 =`delete from "event" where DATE_TRUNC('DAY', date) = CURRENT_DATE;`
    pool.query(queryText).then(() => {
        console.log("new was delete")
    })
    .catch((error) => {
        console.log(error);
    })
    pool.query(queryText1).then(()=> {
        console.log(" event deleve event")
    })
    .catch((error) =>{
        console.log(error);
    })

}

module.exports =scheduleDelete;