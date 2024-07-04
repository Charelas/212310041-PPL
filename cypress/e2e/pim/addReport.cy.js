describe('Add New Report', () => {
  it('Should add a new report successfully', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to PIM > Reports > Add
    cy.get('.oxd-main-menu-item').contains('PIM').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Reports').click();
    cy.get('button').contains('Add').click();

    // Wait for the Add Report page to load
    cy.url().should('include', '/pim/definePredefinedReport');

    // Fill in the report details
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(2) > input').type('Employee Details Report');
    cy.get('.oxd-select-text-input').eq(0).click(); // Select Report Type dropdown
    cy.get('.oxd-select-dropdown').contains('Employee Name').click();
    cy.get('.oxd-select-text-input').eq(1).click(); // Select Selection Criteria dropdown
    cy.get('.oxd-select-dropdown').contains('Current Employees Only').click();
    cy.get('.oxd-select-text-input').eq(2).click(); // Select Display Field Group dropdown
    cy.get('.oxd-select-dropdown').contains('Personal').click();
    cy.get('.oxd-select-text-input').eq(3).click(); // Select Display Fields dropdown
    cy.get('.oxd-select-dropdown').contains('Employee Id').click();

   // Click the plus icon to add another display field
    // cy.get('.oxd-select-text-input').eq(4).click(); // Select Display Fields dropdown
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(5) > div > div.oxd-grid-item.oxd-grid-item--gutters.orangehrm-report-criteria.--span-column-2 > div:nth-child(2) > div:nth-child(2) > button').click();
    cy.get('.oxd-select-text-input').eq(3).click();
    cy.get('.oxd-select-dropdown').contains('Employee First Name').click();
    
    // Submit the form
    cy.get('button[type="submit"]').contains('Save').click();

    // // Verify the report is added
    // cy.get('.oxd-table').should('contain', 'Employee Details Report');
  });
});
