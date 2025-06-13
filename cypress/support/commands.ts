import '@testing-library/cypress/add-commands'
import 'cypress-file-upload';
import User from '../datatest/User';
import UserAPI from '../api/UserAPI';
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
declare global {
  namespace Cypress {
    interface Chainable {
        login(email: string, password: string): Chainable<void>;
        requirePreviousTestPass(testName: string): Chainable<void>;
        registerAccountAPI(user: User): Chainable<any>;
        verifyLoginAPI(user: User): Chainable<any>;
        getUserInfoAPI(user: User): Chainable<any>;
        deleteUserAccountAPI(user: User): Chainable<any>;
    }
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
    cy.visit('');
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
    cy.get('input.btn.btn-primary').click();
})

Cypress.Commands.add('registerAccountAPI', (user: User) => {
  return new UserAPI().registerAPI(user);
});

Cypress.Commands.add('verifyLoginAPI', (user: User) => {
  return new UserAPI().verifyLoginAPI(user);
});

Cypress.Commands.add('getUserInfoAPI', (user: User) => {
  return new UserAPI().getUserAPI(user);
});

Cypress.Commands.add('deleteUserAccountAPI', (user: User) => {
  return new UserAPI().deleteUserAccountAPI(user);
});


