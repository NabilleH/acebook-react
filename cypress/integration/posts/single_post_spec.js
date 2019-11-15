describe("a post component", function (){
  it("shows a single post", function () {
    cy.visit('localhost:3000')
    cy.get('.posts-button').click()
    cy.contains('This is a test post 1.')
    cy.contains('person')
  })
})
