## Description

Simple [Nest](https://github.com/nestjs/nest) project, for returning discount for product

Authentication is handled with JWT, in auth directory, call login route with the sample number 09121234567 for a jwt to use in other routes.

## In Future
- Error handling
- 100% test coverage
- complete CRUD for the entities
- validation pipe
- login with password
- e2e test in different database with seed data


## Running locally
```bash
$ npm install
$ cp .env.example .env
$ npm run start
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
