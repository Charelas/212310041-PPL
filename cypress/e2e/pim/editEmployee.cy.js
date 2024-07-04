describe('Edit Employee Details', () => {
  it('Should edit employee details successfully', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to PIM > Employee List
    cy.get('.oxd-main-menu-item').contains('PIM').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Employee List').click();

    // Wait for the Employee List page to load
    cy.url().should('include', '/pim/viewEmployeeList');

    // Search for the employee to edit (assuming you have a search functionality)
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input'
    ).type('Data Mining');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > input').type(
      '01234'
    );
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'
    ).click();

    // Wait for search results to load
    cy.get('.oxd-table').contains('Data Mining').click();

    // Wait for employee details page to load
    cy.url().should('include', '/pim/viewPersonalDetails/');

    // Click on Edit button (assuming it's represented by oxd-switch-wrapper)
    // cy.get('.oxd-switch-wrapper').contains('Edit').click();

    // Edit the employee details
    cy.get('input[name="firstName"]').clear().type('Data Jr');
    cy.get('input[name="middleName"]').clear().type('Ucok');
    cy.get('input[name="lastName"]').clear().type('Mining');
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > input'
    )
      .clear()
      .type('123456789');
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div > input'
    ).type('2025-01-01');

    // Select country from dropdown
    cy.get('.oxd-select-text--active').eq(0).click({ force: true }); // Click on the first dropdown
    cy.get('.oxd-select-dropdown').contains('Indonesian').click({ force: true }); // Select the option

    // Select Marital Status from dropdown
    cy.get('.oxd-select-text--active').eq(1).click({ force: true }); // Click on the first dropdown
    cy.get('.oxd-select-dropdown').contains('Single').click({ force: true }); // Select the option

    // DOB
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('1999-01-01');

    // Select gender using radio buttons
    cy.get('.oxd-radio-wrapper').contains('Male').click({ force: true }); // Select Male

    // Save the changes
    cy.get('button[type="submit"]').contains('Save').click();

    // // Verify the changes are saved successfully
    // cy.url().should('include', '/pim/viewPersonalDetails');
    // cy.get('.oxd-text--h6').should('contain', 'John Doe Jr');
    // cy.get('.oxd-text--h6').should('contain', 'Johnny');
    // cy.get('.oxd-text--h6').should('contain', '12345678');
  });
});
