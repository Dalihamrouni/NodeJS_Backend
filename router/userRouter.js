const express = require('express');
const router = express.Router();
const { registerHandler, loginHandler } = require('../services/userService');

// http://localhost:8000/api/users/
router.post('/register', registerHandler);

router.post('/login', loginHandler);

module.exports = router;
