describe("log in form", function () {
  it("can log in", function () {
    cy.visit('localhost:3000')
    cy.get('.session-button').click('')

    cy.get('.email').type('person@person.com')
    cy.get('.password').type('password')
    cy.get('.login-button').click()
    cy.url().should('include', '/posts')
  })
})
