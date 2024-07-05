describe('Add Customer to Project Info', () => {
  it('Should add a customer to project info', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin'); // Ganti dengan username admin jika berbeda
    cy.get('input[name="password"]').type('admin123'); // Ganti dengan password admin jika berbeda
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Time > Project Info > Project
    cy.get('.oxd-main-menu-item').contains('Time').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Project Info').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('Project').click();

    // Click Add button to add a new project
    cy.get('.oxd-button--secondary').contains('Add').click();

    // Fill in the form to add a Project
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-grid-2.orangehrm-full-width-grid > div:nth-child(1) > div > div:nth-child(2) > input').type('Testing'); // Enter Customer Name
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-grid-2.orangehrm-full-width-grid > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('Data Mining Inc'); // CS Name
    cy.get('.oxd-autocomplete-dropdown').contains('Data Mining Inc').click(); //
    cy.get('button[type="submit"]').click();
    // Save the new Project

    // Add Activity
    cy.get('.oxd-button--secondary').contains('Add').click();
    cy.get(
      '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input'
    ).type('Software Test');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();

    // Verify the customer was added successfully
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved');
  });
});
