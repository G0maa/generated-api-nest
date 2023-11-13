## Generate Synctera's API(s)

```bash
# IMPORTANT: needs Java installed to work.
npm install @openapitools/openapi-generator-cli

# api src: https://dev.synctera.com/reference/need-to-know#openapi-specification
openapi-generator-cli generate -g typescript-axios -i synctera_openapi.json -o ./generated-baas-axios

```

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start:dev
```
