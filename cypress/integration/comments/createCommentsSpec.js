describe("creating a comment", function () {
beforeEach(function() {
  cy.fixture('allPostsResponse.json').as('allPostsResponse')
  cy.server()
  cy.route('/api/v1/posts', '@allPostsResponse')
  cy.visit('http://localhost:3000/posts')
})
  it("shows a comments text box and submit button", function () {

    cy.get('.post-message').contains('This is a test post 1')
    cy.get('.post-username').contains('bob')
    cy.get('.comment-input').should('visible')
    cy.get('.comment-button').should('visible')
  })

  it("submits a new comment", function () {
    cy.get('.comment-input').type('a new comment 1')
    cy.get('.comment-button').click()
    cy.get('.comment-message').contains('a new comment 1')
  })

})
