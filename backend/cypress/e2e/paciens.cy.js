describe('paciensek végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/paciensek').as('paciensekfetch');
    cy.get('@paciensekfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    )
  })
})