describe('Add Job Title', () => {
  it('Should add a new job title successfully', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Admin > Job > Job Titles
    cy.get('.oxd-main-menu-item').contains('Admin').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Job').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('Job Titles').click();

    // Wait for the Job Titles page to load
    cy.url().should('include', '/admin/viewJobTitleList');

    // Click on "Add" button
    cy.get('.oxd-button--secondary').contains('Add').click();

    // Wait for the Add Job Title form to appear
    cy.get('.oxd-form').should('be.visible');

    // Enter job title details using the specific selector
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').should('be.visible').type('Test Job Title');

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div > textarea').type('Description for Test Job Title');

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div > textarea').type('Note for Test Job Title');

    // Save the job title
    cy.get('button[type="submit"]').contains('Save').click();

    // Check for success message or presence of new job title in the list
    cy.get('.oxd-table-card').should('contain', 'Test Job Title');
  });
});
