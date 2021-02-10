# Application featureset

_Notes on feature implementations and lessons learned._

## Jest

- Wiring up mocks in `__mocks__` for webpack loaders

## Cypress

- The `baseUrl` is defaulted to local dev work and updated to point to the
  Docker host in the `docker-compose` `command`

## Storybook

- Use `--ci` to surpress opening browser window
- Peer deps `babel-loader`, and `@babel/core` removed from package.json b/c
  they're in webpack-base
- Setup icon-sprite-loader to always output and fetch a `icon-sprite.svg` asset
  for Storybook development
- App setup is separated from Storybook config setup in `app-setup.js`. Base
  styles and icons are imported and setup here.
- The `@storybook/addon-options` package is used to configure Storybook to be
  rad.
- Base Storybook webpack configs are extended in `webpack.config.js` with
  additional loaders and plugins for working with assets.
- Extended webpack config includes a `__mocks__` resolution
- On the module argument: https://github.com/storybooks/storybook/issues/2022

## VSCode

- `jsconfig.json` for auto completing

## ESLint

- Use `.eslintignore` to lint the `.storybook` directory
