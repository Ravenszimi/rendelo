describe('vizsgalatok végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/vizsgalatok').as('vizsgalatokfetch');
    cy.get('@vizsgalatokfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    )
  })
})