/// <reference types="cypress" />

describe('Teste para a incerção de um novo contato', () => {
    beforeEach(() => {
        cy.visit(' https://agenda-contatos-react.vercel.app/')
    })

    

    it('Adiciona informações aos campos e adicionar o contato', () => {

        cy.get('body').then(body => {
        let qtdAntes = 0

            if (body.find('.contato').length > 0) {
                qtdAntes = body.find('.contato').length
            }

                cy.get('[type="text"]').type('Contato Teste')
                cy.get('[type="email"]').type('email@teste.com')
                cy.get('[type="tel"]').type('67912345678')

                cy.get('.adicionar').click()

                cy.get('.contato').should('have.length', qtdAntes + 1)

            })
        })
    })