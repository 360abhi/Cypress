// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(username,password)=>{
    cy.visit("/loginurl")
    cy.xpath("//input-username").type(username)
    cy.xpath("//input-password").type(password)
    cy.xpath("login-btn").click({force:true})
    cy.url().should('contain','/dashboard') // Now we can use cy.login inside test files
})

Cypress.Commands.add('loginfrom fixture',()=>{
    cy.fixture('testdata').then((data)=>{
        cy.visit('loginurl');
        cy.xpath("//input-user").type(data['username']);
        cy.xpath("//input-password").type(data['password']);
        cy.xpath("login-btn").click(); // We can also overwrite commands using cypress.commands.overwrite
    });
});
