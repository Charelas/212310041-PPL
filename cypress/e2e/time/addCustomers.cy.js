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

    // Navigate to Time > Project Info > Customers
    cy.get('.oxd-main-menu-item').contains('Time').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Project Info').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('Customers').click();

    // Click Add button to add a new customer
    cy.get('.oxd-button--secondary').contains('Add').click();

    // Fill in the form to add a new customer
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type('Data Mining Inc'); // Enter Customer Name
    cy.get('.oxd-textarea').type('Customer for project XYZ'); // Enter Description

    // Save the new customer
    cy.get('button[type="submit"]').click();

    // Verify the customer was added successfully
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved');
  });
});
