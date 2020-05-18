const express = require('express');
const router = express.Router();

router.get('/whoami', (req, res) => {
  const headers = req.headers;
  
  return res.json({
    ipaddress: headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: headers['accept-language'],
    software: headers['user-agent']
  });
});

module.exports = router;
