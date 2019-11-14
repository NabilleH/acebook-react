describe("a post component", function () {
beforeEach(function() {
  cy.fixture('noPostsResponse.json').as('noPostsResponse')
  cy.server()
  cy.route('/api/v1/posts', '@noPostsResponse')
  cy.visit('http://localhost:3000')
})
  it("handles no posts", function () {

    cy.get('.post-message').should('not.visible')
    cy.get('.post-username').should('not.visible')
    cy.get('.post-created_at').should('not.visible')
  })
})
