const express = require('express');
const client = require('../services/nasa.client');
const router = express.Router();

function extractDate(date) {
  if (date === undefined) {
    return 'today';
  }

  return date;
}

function index(nasaApiKey) {
  router.get('/', async function(req, res, next) {
    const date = extractDate(req.query.date);
    const desc = await client.getApodDesc(nasaApiKey, date);

    await res.json({ desc });
  });

  return router;
}

module.exports = index;
