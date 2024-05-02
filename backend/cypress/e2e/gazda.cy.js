describe('gazdak végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/gazdak').as('gazdakfetch');
    cy.get('@gazdakfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    )
  })
})