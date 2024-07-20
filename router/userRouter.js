const express = require('express');
const router = express.Router();

// http://localhost:8000/api/users/
router.post('/register', (req, resp, next) => {
  resp.status(200).json({
    message: 'Successful - GET',
    metadata: {
      hostname: resp.hostname,
      method: req.method,
    },
  });
});

router.post('/login', (req, resp, next) => {
  resp.status(200).json({
    message: 'Successful - GET',
    metadata: {
      hostname: resp.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
