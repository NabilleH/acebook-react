describe("navbar", function () {
  it("Shows Login Button and Sign Up page", function (){
    cy.visit('localhost:3000')
    cy.get('.session-button').contains('Login')
  })
  
  it('Has a link to /posts', function() {
    cy.visit('localhost:3000')
    cy.get('.posts-button').click()
    cy.url().should('include', '/posts')
  })
  
  it('Shows a log out button when logged in', function() {
    cy.visit('localhost:3000')
    cy.get('.session-button').click('')
    cy.get('.email').type('person@person.com')
    cy.get('.password').type('password')
    cy.get('.login-button').click()
    cy.contains('Log Out Hun?')
  })
})
