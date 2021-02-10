# Dockerfile is used primarily for running tests and building in CI/CD

FROM node:10-alpine as base
LABEL maintainer="iamivamyudin@outlook.com"

WORKDIR /usr/src/app

ENV TRAVIS_CI true

# Install dependencies
COPY ./package*.json ./
RUN npm ci

# Copy remaining source files
COPY . .

# Run unit tests
RUN npm run test:lint
RUN JEST_LCOV_COVERAGE=true npm run test:unit

# Run the production build
CMD [ "npm", "run", "build" ]

