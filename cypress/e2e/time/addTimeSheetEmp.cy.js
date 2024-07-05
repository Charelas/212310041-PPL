describe('Add Timesheet', () => {
  it('Should add timesheet successfully', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as an admin
    cy.get('input[name="username"]').type('datamining');
    cy.get('input[name="password"]').type('datamining123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Time > Timesheets > My Timesheets
    cy.get('.oxd-main-menu-item').contains('Time').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Timesheets').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('My Timesheets').click();

    // Wait for the My Timesheets page to load
    cy.url().should('include', '/time/viewMyTimesheet');

    // Click on "Add Timesheet" button
    cy.get('button.oxd-button').contains('Edit').click();

    // Fill in the timesheet details
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > div:nth-child(2) > div > div > input').type(
      'Data Mining'
    ); // Name Of Activity
    cy.get('.oxd-autocomplete-dropdown').contains('Data Mining').click();
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text--after'
    ).click();
    cy.get('.oxd-select-dropdown').contains('Software Testing').click();

    // Input Time for one week
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(3) > div > div:nth-child(2) > input').click().type('8');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(4) > div > div:nth-child(2) > input').click().type('8');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(5) > div > div:nth-child(2) > input').click().type('8');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(6) > div > div:nth-child(2) > input').click().type('8');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div:nth-child(2) > input').click().type('8');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > div:nth-child(2) > input').click().type('8');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(1) > td:nth-child(9) > div > div:nth-child(2) > input').click().type('8');

    // Add Row
    // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > form > div.orangehrm-timesheet-body > table > tbody > tr:nth-child(2) > td > button > i').click();
    // Click on "Save" button
    cy.get('button.oxd-button').contains('Submit').click();

    // Verify that the timesheet was added successfully
    cy.get('.oxd-toast').should('contain', 'Successfully Saved');

    //Submit the timesheet
    cy.get('button[type="submit"]').click();
  });
});
