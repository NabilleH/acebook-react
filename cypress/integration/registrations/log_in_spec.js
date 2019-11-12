describe("log in form", function () {
  it("can log in", function () {
    cy.visit('localhost:3000')

    cy.get('.email').type('test@example.com')
    cy.get('.password').type('password')
  })

  it("can submit a valid form", function () {
    cy.get('.login').submit()
  })
})
