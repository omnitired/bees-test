## Description

Simple [Nest](https://github.com/nestjs/nest) project, for returning discount for product

Authentication is handled with JWT, in auth directory, call login route with the sample number 09121234567 for a jwt to use in other routes. for viewing Swagger go to localhost:3000/api

## In Future
- better swagger, add description and add jwt
- Error handling
- 100% test coverage
- complete CRUD for the entities
- validation pipe
- login with password
- e2e test in different database with seed data
- get env variable from server in docker compose
- use differenet port for mongo and get the port from env variable

## Running locally
```bash
$ npm install
$ cp .env.example .env
$ npm run start
```
## Running with docker
```bash
$ docker-compose up -d
```
## Generating Seed Data
```bash
$ npm run seed:gen
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
