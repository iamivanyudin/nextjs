# Testing

Primary focus of testing is to increase developer confidence with the minimal
amount of overhead possible. _(Heavily inspired by Kent Dodds)_

### Tools

- [`jest`][]: test runner and assertions
- [`react-testing-library`][]: React rendering and assertions
- [`jest-dom`][]: additional test matchers to test the DOM (in line with
  react-testing-library practice of testing what is rendered in DOM)

### Workflows

- Lint: Runs ESLint for static analysis of codebase
- Unit tests: Runs the unit tests with Jest. Code coverage is automatically
  generated by Jest.
- Unit tests, watch: Run the unit tests, on file change those tests rerun (w/
  notifications!)

### Acceptance

- Cypress configs are set in `cypress.json`
- Cypress `baseUrl` is overridden during CI to point to `http://test` to work
  with docker-compose container networking features

## CI/CD

- Use a Docker build to install dependencies and run a build
- Use docker-compose with prebuilt nginx and cypress images with required source
  files mounted for speedier builds

<!-- Links -->

[`jest`]: https://jestjs.io/
[`jest-dom`]: https://github.com/gnapse/jest-dom
[`react-testing-library`]: https://github.com/kentcdodds/react-testing-library