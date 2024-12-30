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

  it('Text can be entered in the order note field', () => {
    cy.get('[data-cy="note-input"]').type('Sıcak olsun lütfen'); 
    cy.get('[data-cy="note-input"]').should('have.value', 'Sıcak olsun lütfen'); 
  });

  it('should submit the form', () => {
    cy.get('[data-cy="small-input"]').check()
    cy.get('[data-cy="dough-input"]').select('thin')
    cy.get('[data-cy="name-input"]').type('ece')
    cy.get('[data-cy="ingredient-input"]').eq(0).check()
    cy.get('[data-cy="ingredient-input"]').eq(1).check()
    cy.get('[data-cy="ingredient-input"]').eq(2).check()
    cy.get('[data-cy="ingredient-input"]').eq(3).check()
    cy.get('[data-cy="submit-button"]').should('not.be.disabled')
    cy.get('[data-cy="submit-button"]').click()
  })


})