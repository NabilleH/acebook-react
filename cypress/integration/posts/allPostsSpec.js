describe("a post component", function () {
beforeEach(function() {
//   cy.fixture('allPostsResponse.json').as('allPostsResponse')
//   cy.server()
//   cy.route('/api/v1/posts', '@allPostsResponse')
  cy.visit('http://localhost:3000')
})
  it("shows a single post", function () {

    cy.get('.post-message').contains('Hello, world')
    cy.get('.post-username').contains('person')
    cy.get('.post-created_at').contains("2019-11-14T11:30:06.671Z")
  })
})
