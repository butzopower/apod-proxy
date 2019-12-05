const express = require('express');
const client = require('../services/nasa.client');
const router = express.Router();

function index(nasaApiKey) {
  router.get('/', async function(req, res, next) {
    const desc = await client.getApodDesc(nasaApiKey)

    await res.json({ desc });
  });

  return router;
}

module.exports = index;
