describe('My First Test', function() {
  it('opens the login page and enters the credentials, then it makes an assertion', function() {
    cy.visit('http://localhost:8080/#/auth/login')

    // Get an element with the id 'login_email', type email into it and verify that the value has been updated
    cy.get('#login_email')
      .type('fake_email@ustupid.com')
      .should('have.value', 'fake_email@ustupid.com')

    // Get an element with the id 'login_password', type password into it and verify that the value has been updated
      cy.get('#login_password')
      .type('password')
      .should('have.value', 'password')

    cy.get('button').click()
  })
})