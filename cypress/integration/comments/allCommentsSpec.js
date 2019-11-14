describe("a comment component", function () {
beforeEach(function() {
  cy.fixture('allCommentsResponse.json').as('allCommentsResponse')
  cy.server()
  cy.route('/api/v1/posts/2/comments', '@allCommentsResponse')
  cy.visit('http://localhost:3000/posts')
})
  it("shows a single comment", function () {

    cy.get('.comment-message').contains('This is a test comment 1')
    cy.get('.comment-created_at').contains("2019-11-13T10:40:45.118Z")
    cy.get('.comment-username').contains('bob')
  })

  // it("shows two comments", function () {
  //
  //   cy.get('.post-message').contains('This is a test post 1')
  //   cy.get('.post-message').contains('This is a test post 2')
  //   cy.get('.post-username').contains('bob')
  //   cy.get('.post-username').contains('mike')
  // })
})
