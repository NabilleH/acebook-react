describe("a comment component", function () {
beforeEach(function() {
  cy.fixture('allPostsResponse.json').as('allPostsResponse')
  cy.server()
  cy.route('/api/v1/posts', '@allPostsResponse')
  cy.visit('http://localhost:3000/posts')
})
  it("shows a single comment", function () {

    cy.get('.comment-message').contains('This is a test comment 1')
    cy.get('.comment-created_at').contains("2019-11-13T10:40:45.118Z")
    cy.get('.comment-username').contains('bob')
  })

  it("shows two comments", function () {

    cy.get('.comment-message').contains('This is a test comment 1')
    cy.get('.comment-created_at').contains("2019-11-13T10:40:45.118Z")
    cy.get('.comment-username').contains('bob')
    cy.get('.comment-message').contains('This is a test comment 2')
    cy.get('.comment-username').contains('mike')
  })
})
