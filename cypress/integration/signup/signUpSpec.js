describe("sign up form", function(){
  it("allows a user to sign up", function(){
    cy.visit('localhost:3000')

    cy.contains('Sign Up')

    cy.get('.email').type('test1@test.com')
    cy.get('.password').type('password')
    cy.get('.username').type('missuser')

    cy.get('.navbar-container').contains('Logout')
  })
})
