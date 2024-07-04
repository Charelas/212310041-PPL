describe('Add Report with Missing Mandatory Fields', () => {
  it('Should display error messages when mandatory fields are missing', () => {
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

    // Try to submit the form without filling in mandatory fields
    cy.get('button[type="submit"]').contains('Save').click();

    // Check for error messages for missing mandatory fields
    cy.get('.oxd-input-group__message').should('contain', 'Required');
    // Add additional checks for other mandatory fields if needed
  });
});
