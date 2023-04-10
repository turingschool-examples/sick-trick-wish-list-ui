describe('user should see a title, and some tricks and urls when visiting the site', () => {
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

  it('should see a header', () => {
    cy.get('h1').contains('Sick Trick Wish List')
  })

  it('should display tricks', () => {
    cy.get(".trick").contains('treflip')
    cy.get(".trick").contains('heelflip')
    cy.get(".trick").contains('frontside 50-50')
  })

  it('should display osbtacles', () => {
    cy.get('.trick').contains('stairs')
    cy.get('.trick').contains('flat ground')
    cy.get('.trick').contains('ledge')
  })

  it('should link to different urls',  () => {
    cy.get('.trick').contains("https://www.youtube.com/watch?v=9N9swrZU1HA")
    cy.get('.trick').contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
    cy.get('.trick').contains('https://www.youtube.com/watch?v=9N9swrZU1HA')
})
})