describe('search for an item, and navigate to the item page', () => {
  it('should see the search bar', () => {
    cy.visit('/')
    cy.get('input').should('be.visible')
  })
  it('should search for an item', () => {
    cy.visit('/')
    cy.get('input').type('iphone')
    cy.get('button').click()
  })
  it('should see the list of items result', () => {
    cy.visit('/items?search=iphone')
    cy.get('section').children().should('have.length', 4)
  })
  it('should navigate to the item page', () => {
    cy.visit('/items?search=iphone')
    cy.get('section').first().click()
    cy.url().should('include', '/items?')
  })
  it('should see the item page and item details', () => {
    cy.visit('/items/MLA1360990960')
    cy.get('img').should('be.visible')
    cy.get('h2').should('be.visible')
    // p is the description and its length should be greater than 10
    cy.get('p', {
      timeout: 3000
    }).invoke('text').should('have.length.greaterThan', 10)
    cy.get('h1', {
      timeout: 3000
    }).invoke('text').should('have.length.greaterThan', 3)  })
})