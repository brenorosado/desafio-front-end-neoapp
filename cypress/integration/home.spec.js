/// <reference types="cypress"/>

context("Página inicial", () => {
    it('Visitar a pagina inicial e ir para página de detalhes da HQ', () => {
        cy.visit('http://localhost:3000');
        cy.get('article').first().find('img').click();

        cy.url().should('include', 'comic/');
    });

    it('Visitar a pagina inicial, adicionar um item ao carrinho e voltar para a pagnia inicial', () => {
        cy.visit('http://localhost:3000');
        cy.get('article').first().find('button').click();
        cy.url().should('include', 'cart/');

        cy.contains('Continuar comprando').click();
        cy.url().should('include', 'http://localhost:3000');
    });
});