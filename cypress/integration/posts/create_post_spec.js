describe("create a post", function (){
  it("shows form and create post", function () {
    cy.visit('localhost:3000')
    cy.get('#navbar-login-button').click()
    cy.url().should('include', '/log_in')

    cy.get('.email').type('person@person.com')
    cy.get('.password').type('password')
    cy.get('.login-button').click()

    cy.url().should('include', '/posts')

    cy.get('.new-post-message').type('This is a test post 1.')
    cy.get('.submit-post').click()

    cy.url().should('include', '/posts')

    cy.contains('This is a test post 1.')
    cy.contains('person')
  })
})
