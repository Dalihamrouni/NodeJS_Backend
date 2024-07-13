const express = require('express');
const router = express.Router();

// http://localhost:8000/api/users/
router.get('/', (req, resp, next) => {
  resp.status(200).json({
    message: 'Successful - GET',
    metadata: {
      hostname: resp.hostname,
      method: req.method,
    },
  });
});

router.get('/:id', (req, resp, next) => {
  const { id } = req.params;
  resp.status(200).json({
    message: 'Successful - GET USER BY ID',
    id,
    metadata: {
      hostname: resp.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
