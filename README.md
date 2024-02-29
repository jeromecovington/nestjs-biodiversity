# NestJS Biodiversity

## Description

NestJS GraphQL service for New York State biodiversity data.

## Installation

```bash
$ yarn install
```

## Preparing the database

1. Navigate to the open data set at [Biodiversity by County - Distribution of Animals, Plants and Natural Communities](https://catalog.data.gov/dataset/biodiversity-by-county-distribution-of-animals-plants-and-natural-communities) and download the CSV file to the `data/` directory of this project.
2. Populate the SQLite database by running `yarn run migrate:data`.

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Using the service

One the database has been migrated and the service has been started, visit
http://localhost:3000/graphql in the browser to interact with the GraphiQL
Playground, or use the endpoint for your front end app.

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
