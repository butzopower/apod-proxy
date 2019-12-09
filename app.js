const express = require('express');
const redis = require('redis');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const guidRouter = require('./routes/guid');

const services = isCloud() ?
    require('./services.cloud') :
    require('./services.local');

const app = express();
const redisClient = redis.createClient(services.REDIS_OPTIONS);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter(services.NASA_API_KEY, redisClient));

if (isCloud()) {
    app.use('/guid', guidRouter);
}

module.exports = app;

function isCloud() {
    return process.env.VCAP_SERVICES !== undefined;
}
