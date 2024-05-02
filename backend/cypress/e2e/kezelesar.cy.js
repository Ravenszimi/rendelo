describe('kezelesarak végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/kezelesarak').as('kezelesarakfetch');
    cy.get('@kezelesarakfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    )
  })
})