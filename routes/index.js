const express = require('express');
const client = require('../services/nasa.client');
const router = express.Router();

function extractDate(date) {
  if (date === undefined) {
    return 'today';
  }

  return date;
}

function saveToCache(redisClient, key, value) {
  redisClient.setex(key, 60 * 60, JSON.stringify(value));
}

function handleRequest(nasaApiKey, redisClient) {
  return async (req, res, next) => {
    const date = extractDate(req.query.date);
    const desc = await client.getApodDesc(nasaApiKey, date);
    const body = { desc };

    await res.json(body);
    saveToCache(redisClient, date, body);
  }
}

function checkCache(redisClient) {
  return (req, res, next) => {
    const date = extractDate(req.query.date);

    if (date === 'today') {
      next();
      return;
    }

    redisClient.get(date, (err, data) => {
      if (data !== null) {
        res.send(data);
      } else {
        next();
      }
    });
  }
}

function index(nasaApiKey, redisClient) {
  router.get('/',
      checkCache(redisClient),
      handleRequest(nasaApiKey, redisClient)
  );

  return router;
}

module.exports = index;
