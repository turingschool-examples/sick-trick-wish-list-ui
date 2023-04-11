describe('form', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "http://localhost:3001/api/v1/tricks",
      { fixture: "allTricks.json" }
    );
    cy.visit("http://localhost:3000");
  });

  it('should connect to a local site', () => {
    cy.visit('http://localhost:3000')
  })

  it('should have a form with different fields to fill out', () => {
    cy.get('.form').contains('Choose Your Stance')
    cy.get('.form').contains('Choose Your Obstacle')
  })
  
  it('should reflect the value', () => {
    cy.get('[placeholder="Name of Trick"]')
    .type('Ollie')
    .should('have.value', 'Ollie')
  })
  it('should have a button to sumbit your trick', () => {
    cy.get(".button").click()
  })
})