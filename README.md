# APOD Proxy

Node application that proxies requests to NASA's **A**stronomy **P**icture **O**f the **D**ay API and (soon) caches responses using Redis.

## Setup

An API key for `api.nasa.gov` is required. A key can be generated in about 5 seconds at: https://api.nasa.gov/#signUp

## Run

To run the server on port 3000:

```
NASA_API_KEY=<nasa-api-key-here> npm start
```
