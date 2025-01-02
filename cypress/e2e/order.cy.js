describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/')
    cy.contains('ACIKTIM').click();
  })

  it('should enter name', () => {
    cy.get('[data-cy="name-input"]').type('ece')
    cy.get('[data-cy="name-input"]').should('have.value', 'ece')
  })

  it('should select 4 ingredients', () => {
    cy.get('[data-cy="ingredient-input"]').eq(0).check()
    cy.get('[data-cy="ingredient-input"]').eq(1).check()
    cy.get('[data-cy="ingredient-input"]').eq(2).check()
    cy.get('[data-cy="ingredient-input"]').eq(3).check()
    cy.get('[data-cy="ingredient-input"]:checked').should('have.length', 4)
  })

  it('should select max 10 ingredients', () => {
    cy.get('[data-cy=ingredient-input]').eq(0).check()
    cy.get('[data-cy=ingredient-input]').eq(1).check()
    cy.get('[data-cy=ingredient-input]').eq(2).check()
    cy.get('[data-cy=ingredient-input]').eq(3).check()
    cy.get('[data-cy=ingredient-input]').eq(4).check()
    cy.get('[data-cy=ingredient-input]').eq(5).check()
    cy.get('[data-cy=ingredient-input]').eq(6).check()
    cy.get('[data-cy=ingredient-input]').eq(7).check()
    cy.get('[data-cy=ingredient-input]').eq(8).check()
    cy.get('[data-cy=ingredient-input]').eq(9).check()
    cy.get('[data-cy=ingredient-input]:checked').should('have.length', 10)
    cy.get('[data-cy=ingredient-input]').eq(10).should('not.be.checked')
  })


  it('Text can be entered in the order note field', () => {
    cy.get('[data-cy="note-input"]').type('Sıcak olsun lütfen'); 
    cy.get('[data-cy="note-input"]').should('have.value', 'Sıcak olsun lütfen'); 
  });

  it('should submit the form', () => {
    cy.get('[data-cy="small-input"]').check()
    cy.get('[data-cy="dough-input"]').select('Kalın')
    cy.get('[data-cy="name-input"]').type('ece')
    cy.get('[data-cy="ingredient-input"]').eq(0).check()
    cy.get('[data-cy="ingredient-input"]').eq(1).check()
    cy.get('[data-cy="ingredient-input"]').eq(2).check()
    cy.get('[data-cy="ingredient-input"]').eq(3).check()
    cy.get('[data-cy="submit-button"]').should('not.be.disabled')
    cy.get('[data-cy="submit-button"]').click()
  })


})