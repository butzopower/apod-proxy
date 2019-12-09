const services = {
    get NASA_API_KEY() {
        const credentials = getVCAPServices()['credhub'][0]['credentials'];
        return credentials['NASA_API_KEY'];
    },

    get REDIS_OPTIONS() {
        const redisCredentials = getVCAPServices()['p.redis'][0]["credentials"];

        const host = redisCredentials["host"];
        const port = redisCredentials["port"];
        const password = redisCredentials["password"];

        return {
            host,
            port,
            password
        }
    }
};

function getVCAPServices() {
    return JSON.parse(process.env.VCAP_SERVICES);
}

module.exports = services;
