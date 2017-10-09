# Server Side Rendering

This project is an Angular implementation of server-side rendering base on (https://malcoded.com/posts/angular-fundamentals-universal-server-side-rendering).

## Prerequisites

* Run `npm install -g ts-node` and `npm install -g typescript` to install ts-node and typescript (https://www.npmjs.com/package/ts-node)
* Run `npm install`

## Development server

* Run `ts-node server.ts` for a dev server. Navigate to `http://localhost:8080/`.

## Build

* Run `ng build --prod --output-hashing none` to build the Client side bundle. The build artifacts will be stored in the `dist/` directory. 
* Run `ng build --prod --app 1 --output-hashing none` to build the Server side bundle. The build artifacts will be stored in the `dist-server/` directory.

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
