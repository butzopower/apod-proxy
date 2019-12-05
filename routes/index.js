const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({time: new Date()});
});

module.exports = router;
