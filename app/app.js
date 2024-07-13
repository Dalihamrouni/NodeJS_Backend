const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('../router/userRouter');

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use(express.urlencoded({ extended: true }));

module.exports = app;
