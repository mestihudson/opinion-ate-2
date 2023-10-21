# OpinionAte2

An app for tracking reviews of dishes at different restaurants

Production: https://mestihudson.github.io/opinion-ate-2/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `docker compose down --volumes --remove-orphans && docker compose create` to have an up and running set of containers with all needed services.

Run `docker compose start dev` for a dev server. Navigate to `http://localhost:14200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `docker compose exec dev bash -c "npm run ng generate component component-name"` to generate a new component. You can also use `docker compose exec dev bash -c "ng generate directive|pipe|service|class|guard|interface|enum|module"`.

## Build

Run `docker compose exec bash -c "npm run ng build"` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `docker compose exec dev bash -c "npm run ng test"` to execute the unit tests via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `docker compose start e2e` to execute the end-to-end tests.

If there have executed this command before run `docker compose restart e2e`.

## Further help

To get more help on the Angular CLI use `docker compose exec dev bash -c "npm run ng help"` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
