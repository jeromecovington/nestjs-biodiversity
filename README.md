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

### Example queries

```graphql
query {
  findAll(county: "Albany", category: "Plant") {
    id
    county
    scientific_name
    year_last_documented
  }
}
```

```graphql
query {
  findOne(id: "QWxiYW55OkxpdGhvYmF0ZXMgcGFsdXN0cmlz") {
    id
    category
    common_name
    county
    distribution_status
    federal_listing_status
    global_conservation_rank
    ny_listing_status
    scientific_name
    state_conservation_rank
    taxonomic_group
    taxonomic_subgroup
    year_last_documented
  }
}
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deploying on AWS Lambda

TK

```
$ docker pull amazon/aws-lambda-nodejs
$ docker run --platform linux/amd64 --entrypoint /bin/sh -v "$PWD":/var/task -it amazon/aws-lambda-nodejs -c "corepack enable && yarn install"
$ npm install -g serverless
$ serverless deploy
```
