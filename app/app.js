const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('../router/userRouter');
const { connect } = require('../db/connectDB');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Health check route
// http://localhost:8001/
app.get('/', (req, resp, next) => {
  resp.status(200).json({ message: 'SERVICE IS UP AND RUNNING 😉✅' });
});
// ROUTERS
app.use('/users', userRouter);

// Bad Url Handler
app.use((req, resp, next) => {
  const error = new Error('Not Found');
  error.status(404);
  next(error);
});

app.use((error, req, resp, next) => {
  resp.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});
// Connect to Database -- Called only one time
connect();
module.exports = app;
