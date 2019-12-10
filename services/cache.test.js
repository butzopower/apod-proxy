const redis = require("redis");
const assert = require("assert");
const redisHost = process.env.REDIS_HOST || 'localhost';
const promisify = require("util").promisify;

describe('our cache', () => {
  let redisClient;

  beforeEach(() => {
    redisClient = redis.createClient({host: redisHost});
  });

  afterEach(() => {
    redisClient.quit();
  });

  it('stores stuff', async () => {
    const flushall = promisify(redisClient.flushall).bind(redisClient);
    const dbsize = promisify(redisClient.dbsize).bind(redisClient);
    const set = promisify(redisClient.set).bind(redisClient);
    const get = promisify(redisClient.get).bind(redisClient);

    await flushall();
    assert.equal(await dbsize(), 0);
    await set('foo', 1234);
    assert.equal(await get('foo'), 1234);
  });
});
