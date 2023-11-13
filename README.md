## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Generate Synctera's API(s)

```bash
# needs Java installed to work.
npm install @openapitools/openapi-generator-cli

# api src: https://dev.synctera.com/reference/need-to-know#openapi-specification

# Experimental, has lots of errors. src: https://openapi-generator.tech/docs/generators/typescript-nestjs
openapi-generator-cli generate -g typescript-nestjs -i synctera_openapi.json -o ./baas-client

openapi-generator-cli generate -g typescript-fetch -i synctera_openapi.json -o ./generated-baas-fetch

openapi-generator-cli generate -g typescript-axios -i synctera_openapi.json -o ./generated-baas-axios

```

## Installation

```bash
$ npm install
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
