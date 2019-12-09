const services = {
    get NASA_API_KEY() {
        return process.env.NASA_API_KEY;
    },

    get REDIS_OPTIONS() {
        const host = '127.0.0.1';
        const port = 6379;

        return {
            host,
            port
        }
    }
};

module.exports = services;
