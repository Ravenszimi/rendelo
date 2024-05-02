describe('új gazda felvitel teszt', () => {
  it('új gazda felvitel', () => {
    cy.request({
      method:'POST',
      url:'http://localhost:8000/ujgazdaadat',
      body:{
        nev:"Péntek Katalin",
        telefonszam: "36208763456",
        email: "pentekkatalin43@gmail.com",
        iranyitoszam:5600,
        helysegnev:"Békéscsaba",
        teruletnev:"Haán Lajos",
        terulettipus: "tér",
        hazszam:89,
        adoszam:"82365417891"
    }
    }).as('tesztreq')
    cy.get('@tesztreq').then(
      res=>{
        expect(res.status).to.eq(201);
        expect(res.body).has.property('message','Új gazda hozzáadva az adatbázishoz!');
      }
    )
  })
})