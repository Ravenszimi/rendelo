describe('Frontend tesztek', () => {

  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173')
    
  })

  
  it('Menü Orvosok menüpont teszt',()=>{
    cy.get('#orvosok').should('have.text','Orvosok')
    cy.contains('Orvosok').click();
    cy.url().should('include', '/orvosok');

  })

  
  it('Menü Páciensek menüpont teszt',()=>{
    cy.get('#paciensek').should('have.text','Páciensek')
    cy.contains('Páciensek').click();
    cy.url().should('include', '/paciensek');

  })

  it('Menü Gazdák menüpont teszt',()=>{
    cy.get('#gazdak').should('have.text','Gazdák')
    cy.contains('Gazdák').click();
    cy.url().should('include', '/gazdak');

  })

  it('Menü Vizsgálatok menüpont teszt',()=>{
    cy.get('#vizsgalatok').should('have.text','Vizsgálatok')
    cy.contains('Vizsgálatok').click();
    cy.url().should('include', '/vizsgalatok');

  })

  it('Menü Kezelések és árak menüpont teszt',()=>{
    cy.get('#kezelesekarak').should('have.text','Kezelések és árak')
    cy.contains('Kezelések és árak').click();
    cy.url().should('include', '/kezelesekara');

  })


});