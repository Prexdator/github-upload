// poski_vstupni_test.spec.js created with Cypress
//M�j prvn� END to END test

it("schuzka", () => {
cy.visit("https://www.poski.com/nezavazna-schuzka"); // testov�n� na URL poski.com



  

  
// testov�n� jednotliv�ch prvk� formul��e
cy.get('select').select('Poski Webdesign', { force: true }); // testov�n� select
cy.get('#jmeno-prijmeni').type('Antonin Brinzik');
cy.get('#telefon').type('733728071');
cy.get('#email').type('antoninbrinzik@gmail.com');
cy.get('#nazev-spolecnosti').type('Tonik Ponik s.r.o.');
cy.get('#message').type('Vytvarim test END to END - formulare.');
cy.get('#schuzka').submit();

});