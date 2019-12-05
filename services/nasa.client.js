const axios = require('axios');

const client = {
    getApodDesc: async function(
        apiKey,
        date = 'today'
    ) {
        const dateQuery = date === 'today' ? '' : `&date=${date}`;
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${dateQuery}`;
        const response = await axios.get(url);

        return response.data.explanation;
    }
};

module.exports = client;
