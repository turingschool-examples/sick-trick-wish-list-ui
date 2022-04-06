describe('Form', () => {

  it('Should allow the user to input data, and hold onto that data via the value', () =>{
    cy.visit('http://localhost:3000')
      .get('form').should('be.visible')
      .get('.trick').type('Nicole')
      .should('have.value', 'Nicole')
      .get('.tutorial').type('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      .should('have.value', "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      .get('.stance').select('Regular')
      .should('have.value', "Regular")
      .get('.obstacle').select('Rail')
      .should('have.value', "Rail")
  })
});
