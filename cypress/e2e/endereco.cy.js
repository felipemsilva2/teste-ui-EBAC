/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    })

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Felipe', 'Magalhães', 'EBAC', 'Brasil', 'CLN 204 NORTE', '204', 'Brasília', 'Distrito Federal', '70842-530', '61-99956-1191', 'felipe@gmail.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    
    });
});