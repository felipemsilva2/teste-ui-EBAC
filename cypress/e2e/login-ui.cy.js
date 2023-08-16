/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain', 'Welcome')

        it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type(perfil.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('a > .hidden-xs').should('contain', 'Welcome')
        })

        it('Deve fazer login com sucesso usando fixture', () => {
            cy.fixture('perfil.json').then(dados => {
                cy.get('#username').type(dados.usuario)
                cy.get('#password').type(dados.senha, {log: false})
                cy.get('.woocommerce-form > .button').click()
                cy.get('a > .hidden-xs').should('contain', 'Welcome')
            })
        })

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //[TIMEOUT] cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        //[TIMEOUT]cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')


    })


})