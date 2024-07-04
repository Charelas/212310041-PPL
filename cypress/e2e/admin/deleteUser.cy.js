describe('Delete User in OrangeHRM', () => {
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

  it('should navigate to Admin > User Management > Users and delete a user', () => {
    // Navigate to Admin > User Management > Users
    cy.get('.oxd-main-menu-item--name').contains('Admin').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('User Management').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('Users').click();

    // Fill in the search filters
    cy.get('.oxd-input-group input').eq(0).type('datamining'); // Username

    cy.get('.oxd-select-text-input').eq(0).click(); // User Role dropdown
    cy.get('.oxd-select-dropdown').contains('ESS').click();

    cy.get('.oxd-autocomplete-text-input').eq(0).type('Data Mining', { delay: 100 }).wait(3000).type('{downarrow}{enter}'); // Employee Name

    cy.get('.oxd-select-text-input').eq(1).click(); // Status dropdown
    cy.get('.oxd-select-dropdown').contains('Enabled').click();

    // Click on "Search" button
    cy.get('button[type="submit"]').contains('Search').click();

    // Verify that the user appears in the search results
    cy.get('.oxd-table-card').contains('datamining').should('exist');

    // Click on the delete button (trash icon)
    cy.get('.oxd-table-card').contains('datamining').parents('div').find('.oxd-icon.bi-trash').click();

    // Confirm the deletion in the popup
    cy.get('.oxd-button--label-danger').contains('Yes, Delete').click();

    // Verify that the user is deleted
    cy.get('.oxd-toast-content').contains('Successfully Deleted').should('exist');
  });
});
