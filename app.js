const express = require('express');
const redis = require('redis');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();
const redisClient = redis.createClient();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter(process.env.NASA_API_KEY, redisClient));

module.exports = app;
