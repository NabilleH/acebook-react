describe("create a post", function (){
  it("shows form and create post", function () {
    cy.visit('localhost:3000')
    cy.get('#navbar-login-button').click()
    cy.url().should('include', '/log_in')

    cy.get('.email').type('person@person.com')
    cy.get('.password').type('password')
    cy.get('.login').click()

    cy.url().should('include', '/posts')

    cy.get('.form-new-message').type('This is a test post 1.')
    cy.get('.form-new-post').submit()

    cy.url().should('include', '/posts')

    cy.get('.post-message').contains('This is a test post 1.')
    cy.get('.post-username').contains('person')
  })
})
