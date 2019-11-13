describe("a post component", function (){
  it("shows a single post", function () {
    cy.visit('localhost:3000')

    cy.get('.post-message').contains('This is a test post 1.')
    cy.get('.post-username').contains('mrtest')
  })
})
