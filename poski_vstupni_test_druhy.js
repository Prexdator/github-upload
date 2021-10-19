// poski_vstupni_test.spec.js created with Cypress
//Mùj druhý END to END test

it("kariera", () => {
cy.visit("https://www.poski.com/kariera/specialista/ka-pece-o-klienty"); // testování na URL poski.com

cy.get('#name').type('Antonin Brinzik');
cy.get('#email').type('antoninbrinzik@gmail.com');
cy.get('#phone').type('733728071');
cy.get('#message').type('Nahrani dokumentu se mi nepodarilo. Vim ze na to potrebuju import  cypress import  file upload, ale nepodarilo se mi to pridat.');
cy.get('#kariera').submit();
});




        




