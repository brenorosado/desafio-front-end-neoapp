/// <reference types="cypress"/>

context('Comprando', () => {
    it('Adicionar 5 itens diferentes ao carrinho, finalizar compra utilizando cupons e conferir se o pedido apareceu na pagina do usuario', () => {
        cy.visit('http://localhost:3000');

        cy.get('article').eq(0).find('button').click();
        cy.url().should('include', '/cart');
        cy.contains('Continuar comprando').click();
        cy.url().should('include', 'http://localhost:3000');

        cy.get('article').eq(1).find('button').click();
        cy.url().should('include', '/cart');
        cy.contains('Continuar comprando').click();
        cy.url().should('include', 'http://localhost:3000');

        cy.get('article').eq(2).find('button').click();
        cy.url().should('include', '/cart');
        cy.contains('Continuar comprando').click();
        cy.url().should('include', 'http://localhost:3000');

        cy.get('article').eq(3).find('button').click();
        cy.url().should('include', '/cart');
        cy.contains('Continuar comprando').click();
        cy.url().should('include', 'http://localhost:3000');

        cy.get('article').eq(4).find('button').click();
        cy.url().should('include', '/cart');
        cy.contains('Ir para o carrinho').click();
        cy.url().should('include', 'cart');

        cy.get('form').find('input').first().type('HQCOMUM');
        cy.get('form').find('input').last().click();
        cy.contains('HQCOMUM');

        cy.get('form').find('input').first().type('HQRARA');
        cy.get('form').find('input').last().click();
        cy.contains('HQRARA');

        cy.contains('Finalizar compra').click();

        cy.contains('Meus pedidos').click();
        cy.url().should('include', 'user');

        cy.contains('Preço');
    });

    it('Testanto cupons válidos e inválidos', () => {
        cy.visit('http://localhost:3000/cart');

        // cupons invalidos
        cy.get('form').find('input').first().type('QOINEFOINWFJNW');
        cy.get('form').find('input').last().click();
        cy.contains('Nenhum cupon válido foi utilizado ainda.');

        cy.get('form').find('input').first().type('hqcomum');
        cy.get('form').find('input').last().click();
        cy.contains('Nenhum cupon válido foi utilizado ainda.');

        cy.get('form').find('input').first().type('hqrara');
        cy.get('form').find('input').last().click();
        cy.contains('Nenhum cupon válido foi utilizado ainda.');

        // cupons validos
        cy.get('form').find('input').first().type('HQCOMUM');
        cy.get('form').find('input').last().click();
        cy.contains('HQCOMUM');

        cy.get('form').find('input').first().type('HQRARA');
        cy.get('form').find('input').last().click();
        cy.contains('HQRARA');
    });
});