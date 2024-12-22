// api/routes/apiRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.status(200).json({
    message: `Received data for ${name} with email ${email}`
  });
});

module.exports = router;
