describe("a likes component", function () {
beforeEach(function() {
  cy.fixture('allPostsResponse.json').as('allPostsResponse')
  cy.server()
  cy.route('/api/v1/posts', '@allPostsResponse')
  cy.visit('http://localhost:3000/posts')
})
  it("shows a number of likes on a post", function () {

    cy.get('.post-message').contains('This is a test post 2')
    cy.get('.post-username').contains('mike')
    cy.get('.likes-button').should('visible')
    cy.get('.like').contains('5')
  })

  it("does not show a like button when no posts", function () {

    cy.get('.post-message').contains('This is a test post 1')
    cy.get('.post-username').contains('bob')
    cy.get('.button .likes-button').should('not.visible')
  })

  it("shows a number of likes on a comment", function () {

    cy.get('.comment-message').contains('This is a test comment 1')
    cy.get('.comment-username').contains('bob')
    cy.get('.likes-button').should('visible')
    cy.get('.like').contains('2')
  })

  it("does not show a like button when no comments", function () {

    cy.get('.comment-message').contains('This is a test comment 2')
    cy.get('.comment-username').contains('mike')
    cy.get('.button .likes-button').should('not.visible')
  })
})
