# Application conventions

## Testing

- Use arrow functions in Cypress tests unless `this` is actually needed (helps
  call out that `this` is being used)

## Storybook

- Use plain english for `storiesOf` grouping and component syntax for individual
  stories

## Dependencies

- Use `~` versions to minimize changes from packages making not really Semver
  compatible upgrades.
