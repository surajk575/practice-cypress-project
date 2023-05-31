/// <reference types="Cypress" />

describe("Random word", () => {
 
    it.only('Create random word', () => {

        cy.visit("https://www.google.com")
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `Farm${id}`
        cy.get("textarea[name='q']").type(testname);

    });
});    
