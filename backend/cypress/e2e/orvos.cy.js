describe('orvosok végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/orvosok').as('orvosokfetch');
    cy.get('@orvosokfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    )
  })
})