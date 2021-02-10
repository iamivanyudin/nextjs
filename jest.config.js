/* eslint-env node */

const { JEST_LCOV_COVERAGE, ENABLE_JEST_NOTIFICATIONS } = process.env

const coverageReporters = JEST_LCOV_COVERAGE ? ['text-summary', 'lcov'] : ['text-summary']

module.exports = {
  // Provides nice test output of what's being run
  verbose: true,

  // OS notifications of test results
  notify: Boolean(ENABLE_JEST_NOTIFICATIONS),

  // Ignore Cypress acceptance tests
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/cypress'],

  // Test coverage can be enforced with a coverageThreshold
  collectCoverage: true,
  coverageReporters,
  collectCoverageFrom: ['src/**/*.js'],

  // Pre/Post test framework setup configs
  setupFiles: ['<rootDir>/test/jest-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/test/jest-extend.js'],

  moduleNameMapper: {
    // webpack loader mocks
    '\\.(png|jpg)': '<rootDir>/__mocks__/file-mock.js',
    '\\.scss': '<rootDir>/__mocks__/scss-mock.js',
    // webpack '@' alias resolver
    '@/(.*)$': '<rootDir>/src/$1',
  },
}
