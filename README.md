# APOD Proxy

Node application that proxies requests to NASA's **A**stronomy **P**icture **O**f the **D**ay API and caches responses using Redis.

## Setup

An API key for `api.nasa.gov` is required. A key can be generated in about 5 seconds at: https://api.nasa.gov/#signUp

Redis is running inside docker.

## Run

Start up redis using `docker-compose`:

```
docker-compose up
```

To run the server on port 3000:

```
NASA_API_KEY=<nasa-api-key-here> npm start
```

## Use

Hit the root endpoint with or without a date.  Any request made with a date will have its response cached for 60 minutes.

```
curl http://localhost:3000/?date=2019-10-28
```
