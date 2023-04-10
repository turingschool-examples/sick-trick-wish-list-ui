describe('should see a form when visiting the site that they can fill out', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://localhost:3001/api/v1/tricks",
      { fixture: "allTricks.json" }
    );
    cy.visit("http://localhost:3000");
  })

  it('should have a form with different fields to fill out', () => {
    cy.get('.form').contains('Choose Your Stance')
    cy.get('.form').contains('Choose Your Obstacle')
  })

  it('should have a button to sumbit your trick', () => {
    cy.get(".button").click()
  })

})