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


## Deploy

To deploy to PCF, the following must be setup:

- A space with the following services available to bind:
    - Redis for PCF (https://network.pivotal.io/products/p-redis)
    - Credhub Service Broker (https://docs.pivotal.io/credhub-service-broker) configured with:
        - `{"NASA_API_KEY":"<YOUR NASA API KEY>"`
- After initial deploy, these services must be bound and the app re-staged


Deploy via:
```
./deploy.sh
```

Additionally, you can monitor the deploy using:
```
./monitor.sh
```

This is useful to make sure zero-downtime deployments are working as expected.
