describe('User flow tricks page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      method: 'GET',
      fixture: './tricksData.json'
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should have a title', () => {
    cy.get('h1').contains('Sick Trick Wish List')
  });
  // it('Should be able to choose a stance', () => {
  //   cy.get('.stance').contains('Choose your Stance')
  // })
  // it('Should have an input to name a trick', () => {
  //   cy.get('input[placeholder="Name of Trick"]')
  // });
  // it('Should be able to choose an obstacle', () => {
  //   cy.get('.obstacle').contains('Choose your Obstacle')
  // });
  // it('Should have an input to add a link', () => {
  //   cy.get('[placeholder="Link to Tutorial"]')
  // });
  // it('Should have a button to add inputs', () => {
  //   cy.get('button')
  // })
  it('Should be able to choose a stance', () => {
    cy.get('.stance').select('Regular')
  })
  it('Should have an input to name a trick', () => {
    cy.get('input[placeholder="Name of Trick"]').type('kickflip')
  });
  it('Should be able to choose an Obstance', () => {
    cy.get('.obstacle').select('Flatground')
  });
  it('Should add link for tutorial', () => {
    cy.get('[placeholder="Link to Tutorial"]').type('tricks.com/')
  });
  it('Should add inputs into a trick card after button click', () => {
    cy.get('button').click()
  })
})