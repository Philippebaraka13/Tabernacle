const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');
const cron = require('node-cron');
// Route includes
const userRouter = require('./routes/user.router');
const newRouter = require('./routes/new.router');
const eventRouter = require('./routes/event.router');
const pictureRouter = require('./routes/picture.router');
const scheduleDelete = require('./schedule');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/new', newRouter);
app.use('/api/event', eventRouter);
app.use('/api/picture', pictureRouter);
// Serve static files
app.use(express.static('build'));
// schedule cron at 11pm. 
cron.schedule('0 23 * * *', () => {
  scheduleDelete();
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
