describe('Add Employee', () => {
  it('Should add a new employee successfully', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to PIM > Add Employee
    cy.get('.oxd-main-menu-item').contains('PIM').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Add Employee').click();

    // Wait for the Add Employee page to load
    cy.url().should('include', '/pim/addEmployee');

    // Fill out the employee details
    cy.get('input[name="firstName"]').type('Data');
    //   cy.get('input[name="middleName"]').type('A');
    cy.get('input[name="lastName"]').type('Mining');
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input'
    ).type('12345');

    // Optionally create login details for the employee
    cy.get('.oxd-switch-input').click();
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input'
    ).type('datamining');
    cy.get('.oxd-radio-wrapper').contains('Enabled').click();
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input').type('datamining123');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input').type('datamining123');

    // Save the new employee
    cy.get('button[type="submit"]').click();

    // // Verify the new employee is successfully added
    // cy.url().should('include', '/pim/viewPersonalDetails');
    // cy.get('.oxd-text--h6').should('contain', 'Data Mining');
  });
});
