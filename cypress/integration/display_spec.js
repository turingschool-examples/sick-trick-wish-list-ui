describe('Dashboard', () => {

  // beforeEach(() => {
  //   cy.visit('http://localhost:3000')
  //   // .intercept('GET','http://localhost:3001/api/v1/tricks',
  //   // [
  //   //   {stance: "regular", name: "trepflip", obstacle: "flat ground", tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig", id: 1},
  //   //   {stance: "switch", name: "heelflip", obstacle: "stairs", tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig", id: 2}
  //   //   ]
  //   // )
  // })

  it('Should be able to visit the site and render a title, form, and trick cards', () =>{
    cy.visit('http://localhost:3000')
  })
});
