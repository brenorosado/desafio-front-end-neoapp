/// <reference types="cypress"/>

context("Menu", () => {
    it('Visitar a pagina inicial e ir para página do carrinho', () => {
        cy.visit('http://localhost:3000');
        cy.get('nav').find('a').last().click();

        cy.url().should('include', '/cart');
    });

    it('Visitar a pagina inicial e ir para página do usuario/pedidos e voltar para a pagina inicial', () => {
        cy.visit('http://localhost:3000');
        cy.get('li').eq(1).click();
        cy.url().should('include', '/user');

        cy.get('nav').find('a').first().click();
        cy.url().should('include', 'http://localhost:3000');
    });
});