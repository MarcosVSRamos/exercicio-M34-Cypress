/// <reference types="cypress" />

describe('Testes de remoção de contatos', () => {
    beforeEach(() => {
        cy.visit(' https://agenda-contatos-react.vercel.app/')
    })

    it('Deve remover o primeiro contato sperior', () => {

        cy.get('.contato').then(quantidade => {
            const contatosAnteriores = quantidade.length

            cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

            cy.get('.contato').should('have.length', contatosAnteriores - 1)

        })

    })
})