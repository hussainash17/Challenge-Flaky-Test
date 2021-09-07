describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/');

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name');

    cy.get('input[name="email"]').click().type('some@email.com');

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core');

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it');

    cy.get('input[type="submit"]').click();

    /* We can solve the task in different ways
    I showed two ways here. First one is not a best 
    practice
    */

    /* 
    // solution no 1
    cy.wait(2000);
    cy.get('li').should(
      'contain',
      'Some Name - some@email.com - core - git-it'
    );
    */

    // solution no  2
    cy.get('li', { timeout: 6000 }).should(
      'contain',
      'Some Name - some@email.com - core - git-it'
    );
  });
});
