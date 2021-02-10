# Personal Development Site

<p align="center">
  <img src="https://img.shields.io/badge/%20%20%F0%9F%A6%84%F0%9F%8C%88-made%20with%20love-ce068b.svg" alt="made with love" />
  <a href="https://travis-ci.com/iamivanyudin/iamivanyudin
">
    <img src="https://travis-ci.com/iamivanyudin/iamivanyudin.svg?branch=master" alt="build status">
  </a>
  <a href="https://dashboard.cypress.io/#/projects/ma3dkn/runs">
    <img src="https://img.shields.io/badge/cypress-dashboard-brightgreen.svg" alt="Cypress Dashboard">
  </a>
  <a href="https://codeclimate.com/github/iamivanyudin/iamivanyudin/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/a621b79ba64efb73ea87/maintainability" />
  </a>
</p>

_Personal dev project for trying new tech and ideas, check it out!_

## Workflows

### Developing

Install dependencies then start the webpack development server:

```sh
npm install
npm start
```

During development linter warnings are logged and errors will show the error
overlay screen. Run the unit tests in watch mode and a system notification will
show if changes break existing tests:

```sh
npm run test:watch
```

Start the Cypress test runner in ??? mode to create acceptance tests:

```sh
npm run cypress:run
```

ℹ️ The NGINX container run during the `test:acceptance` command expects a
production build of the app to exist in `/public`. If you get a `403: Forbidden`
response from NGINX, run the build command then rerun the acceptance tests.

Build hecka rad features 🦄🌈🎉

### Storybook development

Initial component work is done in Storybook for sandboxed development. This
encourages flexible layout and API conventions and speeds up iteration.

```sh
npm run storybook
```

### Continuous integration and deployment

Before pushing a branch run tests. The test script will lint source code with
ESLint, then run unit tests with Jest, then run acceptance tests with Cypress
(Docker is required to run the acceptance tests with Docker Compose):

```sh
npm test
```

Pushed branches are tested by Travis CI. After merging to master Travis CI will
test, then build, then deploy the changes.

_Travis builds can be skipped by starting a commit with `[skip ci]`_

### Tools

#### VSCode

- Autocomplete and intellisense for modules that are relatively imported are
  supported with the `jsconfig.json` config file.
- Project includes a debug config to launch a Chrome session for interactive
  debugging.

## Thank you 🙇‍♂️

- Project icon from [The Graphics Fairy](https://thegraphicsfairy.com/)
