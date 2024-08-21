const express = require('express')
const chatGpt = require('./chatGpt')
const cors = require('cors')
const { NotFoundError} = require('./expressError')
const homeRoute = require('./routes')


const app = express();
const router = express.Router()

app.use(cors());
app.use(express.json());


app.use('/', homeRoute)

app.use(function (req, res, next) {
  return next(new NotFoundError());
});


/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});



module.exports = app;

