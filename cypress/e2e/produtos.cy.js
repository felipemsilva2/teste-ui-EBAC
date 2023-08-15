/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    })

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 20

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    })

    it('Deve adicioonar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue', '2')
    })

    it('Deve adicioonar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Blue', '2')
    })
});