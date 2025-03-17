describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
//  cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)

describe('Pokemon page can be opened', function () {
  it('pokemon page can be opened', function () {
    cy.visit('')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
