/* eslint-disable no-undef */
/// <reference types="cypress"/>

context('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the home page with a ScribeDAO welcome', () => {
    cy.get('h1').contains('Welcome to ScribeDAO')
  })
})

export {}
