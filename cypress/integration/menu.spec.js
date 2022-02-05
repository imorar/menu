/// <reference types="cypress" />

describe('menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays two main items by default', () => {
    cy.get('div[class*="mainMenu"] div[class*="parent"]').should('have.length', 2)
    cy.get('div[class*="mainMenu"] div[class*="parent"] a').first().should('have.text', 'We-Conect Home page')
    cy.get('div[class*="mainMenu"] div[class*="parent"] a').last().should('have.text', 'Google')
  })

  it('"We-Connect Home page" redirect', () => {
    cy.get('#we-connect').click()
    cy.url()
      .should('be.equal', 'https://www.we-conect.com/')
  })

  it('google redirect', () => {
    cy.get('#google').click()
    cy.url()
      .should('be.equal', 'https://www.google.de/')
  })

  context('expand first item', () => {
    beforeEach(() => {
      cy.contains('We-Conect Home page')
        .parent()
        .parent()
        .find('div[class*="expand"]')
        .click()
    })

    it('have 2 child items', () => {
      cy.get('div[class*="child"]').should('have.length', 2)

      cy.get('div[class*="child"] a').first().should('have.text', 'Live Event')
      cy.get('div[class*="child"] a').last().should('have.text', 'Digital Managed Events')
    })

    it('"Live Events" redirect', () => {
      cy.get('#live-events').click()
      cy.url()
        .should('be.equal', 'https://www.we-conect.com/liveevents')
    })
  
    it('"Digital managed events" redirect', () => {
      cy.get('#digital-managed-events').click()
      cy.url()
        .should('be.equal', 'https://www.we-conect.com/digital-managed-events')
    })
  })
})
