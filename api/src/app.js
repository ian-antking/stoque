const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { logging } = require('./middleware/logging');
const userRouter = require('./routes/user');

const app = express();

app.use(helmet());
app.use(cors());
app.use(logging);

app.use('/user', userRouter);

module.exports = app;
