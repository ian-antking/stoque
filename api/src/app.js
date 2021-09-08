const express = require('express');
const { logging } = require('./middleware/logging');
const userRouter = require('./routes/user');

const app = express();

app.use(logging);

app.use('/user', userRouter);

module.exports = app;
