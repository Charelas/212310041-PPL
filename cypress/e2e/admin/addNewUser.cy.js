describe('Add New User in OrangeHRM', () => {
  before(() => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as Admin
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Verify that the login is successful by checking URL
    cy.url().should('include', '/dashboard');
  });

  it('should navigate to Admin > User Management > Users and add a new user', () => {
    // Navigate to Admin > User Management > Users
    cy.get('.oxd-main-menu-item--name').contains('Admin').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('User Management').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('Users').click();

    // Click on "Add" button
    cy.get('button').contains('Add').click();

    // Fill in the form with valid data
    cy.get('.oxd-select-text-input').eq(0).click(); // User Role dropdown
    cy.get('.oxd-select-dropdown').contains('Admin').click();

    cy.get('.oxd-autocomplete-text-input').type('Data Mining', { delay: 100 }).wait(3000).type('{downarrow}{enter}');
    cy.get('.oxd-input-group input').eq(1).type('datamining');
    cy.get('.oxd-select-text-input').eq(1).click(); // Status dropdown
    cy.get('.oxd-select-dropdown').contains('Enabled').click();
    cy.get('.oxd-input-group input').eq(2).type('password123');
    cy.get('.oxd-input-group input').eq(3).type('password123');

    // Click on "Save" button
    cy.get('button[type="submit"]').contains('Save').click();

    // // Verify that the new user is added
    // cy.get('.oxd-table-card').contains('Data Mining ').should('exist');
  });
});
