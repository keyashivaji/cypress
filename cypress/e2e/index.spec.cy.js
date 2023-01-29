describe('template spec', () => {
  it('should visit',() =>{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php/');
    
  })
})

describe('Login success', () => {
  it('allows user to login with correct credentials', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('#email')
      .type('keyashivaji30@gmail.com')
      .should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456');
    cy.get(':nth-child(3) > .btn')
    cy.wait(10000);
  });
});

describe('Login failure', () => {
  it('prevents user from logging in with incorrect credentials', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('#email')
      .type('keyashivaji30@gmail.com')
      .should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#password')
      .type('1234567')
      .should('have.value', '1234567');
      cy.get(':nth-child(3) > .btn').click;
      cy.wait(10000);
    cy.get('.alert-danger').contains('Enter valid email or password.');
  });
});

describe('Request Quotation', () => {
  it('allows user to request a quotation', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('#email')
      .type('keyashivaji30@gmail.com')
      .should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456');
    cy.get(':nth-child(3) > .btn')
    cy.wait(10000);
    cy.get('.alert-success').contains('You have successfully logged in.');
    cy.get('#request_quotation').click();
    cy.get('#name')
      .type('Keya')
      .should('have.value', 'Keya');
    cy.get('#email')
      .type('keyashivaji30@gmail.com')
      .should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#phone')
      .type('7904198523')
      .should('have.value', '7904198523');
    cy.get(':nth-child(3) > .btn')
    cy.get('.alert-success').contains('Quotation request sent successfully.');
  });
});

describe('Retrieve Quotation', () => {
  it('allows user to retrieve their quotation', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('#email')
      .type('keyashivaji30@gmail.com')
      .should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456');
    cy.get(':nth-child(3) > .btn')
    cy.wait(10000);
    cy.get('.alert-success').contains('You have successfully logged in.');
    cy.get('#retrieve_quotation').click();
    cy.get('.alert-success').contains('Quotation retrieved successfully.');
  });
});

describe('Profile', () => {
  it('allows user to view and update their profile', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('#email')
      .type('keyashivaji30@gmail.com')
      .should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456');
    cy.get(':nth-child(3) > .btn')
    cy.get('.alert-success').contains('You have successfully logged in.');
    cy.get('#profile').click();
    cy.get('#name').should('have.value', 'Keya');
    cy.get('#email').should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#phone').should('have.value', '7904198523');
    cy.get('#address').should('have.value','NO.34,Gokuls Padmalayam');
    cy.get('#edit_profile').click();
    cy.get('#name').clear().type('Keyashiv');
    cy.get('#email').clear().type('keyashiv30@gmail.com');
    cy.get('#phone').clear().type('7904198543');
    cy.get('#address').clear().type('NO.34, Gokuls Padmalayam');
    cy.get('#update_profile').click();
    cy.get('.alert-success').contains('Profile updated successfully.');
  });
});

describe('Logout', () => {
  it('allows user to log out of the website', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    cy.get('#email')
      .type('keyashivaji30@gmail.com')
      .should('have.value', 'keyashivaji30@gmail.com');
    cy.get('#password')
      .type('123456')
      .should('have.value', '123456');
    cy.get(':nth-child(3) > .btn')
    cy.wait(10000);
    cy.get('.alert-success').contains('You have successfully logged in.');
    cy.get('#logout').click();
    cy.url().should('include', 'index.php');
    cy.get('.alert-danger').contains('You have successfully logged out.');
  });
});
