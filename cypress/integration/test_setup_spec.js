describe("My first test", function () {
  it("visits the homepage", function () {
    cy.visit('localhost:3000')
    cy.contains('Hello World')
  })
})
