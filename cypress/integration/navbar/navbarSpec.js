describe("navbar", function () {
  it("can logout a user out via the logout button", function (){
    cy.visit('localhost:3000')
// test needs to be updated to log a user on first.
    cy.get('.navbar-container').contains('Logout')
    cy.click('.logout-button')
    cy.get('.email').contains('email')
    cy.get('.password').contains('password')
  })
})
