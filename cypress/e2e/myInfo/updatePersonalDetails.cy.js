describe('Add Job Vacancy', () => {
  it('Should add a new job vacancy', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin'); 
    cy.get('input[name="password"]').type('admin123'); 
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Recruitment > Vacancies
    cy.get('.oxd-main-menu-item').contains('My Info').click();
    cy.get('.orangehrm-tabs-item').contains('Personal Details').click(); // Navigate to Personal Details tab

    //Update Full Name
    cy.get('input[name="firstName"]').clear().type('Ubuntu');
    cy.get('input[name="lastName"]').clear().type('Linux');
    cy.get('input[name="middleName"]').clear();
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > input'
    )
      .clear()
      .type('Musang');

    cy.get('.oxd-select-text').eq(0).click(); // Click National
    cy.get('.oxd-select-dropdown').contains('Indonesian').click();

    //Marital status
    cy.get('.oxd-select-text').eq(1).click(); // Click National
    cy.get('.oxd-select-dropdown').contains('Single').click();
    cy.get('.oxd-button').contains('Save').click(); //Save

    //Custom Filed Area
    cy.get('.oxd-select-text').eq(2).click(); // Click Blood Type
    cy.get('.oxd-select-dropdown').contains('O-').click();
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-custom-fields > div > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > input').type('400');
    cy.get('.oxd-button').contains('Save').click(); //Save

    // Verify the job vacancy was added successfully
    // cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved');
  });
});
