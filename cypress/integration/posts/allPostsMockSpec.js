describe("a post component", function () {
beforeEach(function() {
  cy.fixture('allPostsResponse.json').as('allPostsResponse')
  cy.server()
  cy.route('/api/v1/posts', '@allPostsResponse')
  cy.visit('http://localhost:3000/posts')
})
  it("shows a single post", function () {

    cy.get('.post-message').contains('This is a test post 1')
    cy.get('.post-username').contains('bob')
    cy.get('.post-created_at').contains("2019-11-13T10:40:45.118Z")
  })

  it("shows two posts", function () {

    cy.get('.post-message').contains('This is a test post 1')
    cy.get('.post-message').contains('This is a test post 2')
    cy.get('.post-username').contains('bob')
    cy.get('.post-username').contains('mike')
  })
})
