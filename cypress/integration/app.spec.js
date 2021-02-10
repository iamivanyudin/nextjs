/// <reference types="Cypress" />

describe('Application', () => {
  it('loads successfully', () => {
    cy.visit('/')
    cy.contains('Hello 👋').should('be.visible')
  })
})
