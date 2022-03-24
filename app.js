const express = require('express');
const morgan = require('morgan');

const toursRouter = require('./routes/v1/tours');
const usersRouter = require('./routes/v1/users');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);
app.all('*', (req, res) => {
  res.json({
    status: 'failure',
    message: 'wrong url',
  });
});
app.use((err, res, req, next) => {
  console.log('global err handler');
  console.log(err);
});

module.exports = app;
