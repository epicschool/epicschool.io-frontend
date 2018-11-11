describe('My First Test', function() {
    // it('opens the login page and enters the credentials, then it makes an assertion', function() {
    //     cy.visit('http://localhost:8080/#/auth/register')
  
    //     // Get an element with the id 'login_email', type email into it and verify that the value has been updated
    //     cy.get('#login_firstname')
    //     .type('Mark')
  
    //     // Get an element with the id 'login_password', type password into it and verify that the value has been updated
    //     cy.get('#login_lastname')
    //     .type('Marolf')

    //     cy.get('#login_email')
    //     .type('dc3dude@gmail.com')

    //     cy.get('#password')
    //     .type('mynamejeff')
  
    //     cy.get('#register_button').click()
        
    //     //test successful registration
    //     cy.url().should('include', '/')
    // })



    it('register with no name and check error message', function() {
        cy.visit('http://localhost:8080/#/auth/register')

        //clear all input fields
        cy.get('#login_firstname').clear()
        cy.get('#login_lastname').clear()
        cy.get('#login_email').clear()
        cy.get('#password').clear()

        cy.pause()
    
        // Get an element with the id 'login_lastname'
        cy.get('#login_lastname').type('Marolf')
        cy.log('entered lastname')
          
        // Get an element with the id 'login_email'
        cy.get('#login_email').type('dc3dude@gmail.com')

        // Get an element with the id 'login_password'
        cy.get('#password').type('mynamejeff')
    
        cy.get('#register_button').click()
  
        // //test registration without a first name, expect error
        cy.get('#login_error').should('contain', 'Please enter your first name')

        //mynamejeff
  })
})