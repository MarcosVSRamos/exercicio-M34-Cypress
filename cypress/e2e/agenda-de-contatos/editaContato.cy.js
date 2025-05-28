/// <reference types="cypress" />

describe('Testes para edição de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve editar o primeiro contato e validar a alteração', () => {


    cy.get('.contato').first().invoke('text').then((textoAntes) => {

      cy.get('.contato').first().find('.edit').click()

      cy.get('[type="text"]').clear().type(`Segundo Contato Teste ${Date.now()}`) //acrescentei o Date.now apenas para não conflitar o teste
      cy.get('[type="email"]').clear().type('segundoemail@teste.com')
      cy.get('[type="tel"]').clear().type('67900000000')
      cy.get('.alterar').click()

      cy.get('.contato').first().invoke('text').should((textoDepois) => {

        expect(textoDepois.trim()).to.not.eq(textoAntes.trim())
        expect(textoDepois).to.include('Segundo Contato Teste')
        expect(textoDepois).to.include('segundoemail@teste.com')
        expect(textoDepois).to.include('67900000000')

      })

    })

  })

})
