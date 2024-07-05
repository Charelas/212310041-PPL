describe('Add Performance Review as Admin', () => {
  it('Should login as admin and add a performance review', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin'); 
    cy.get('input[name="password"]').type('admin123'); 
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Performance > Manage Reviews > Manage Reviews
    cy.get('.oxd-main-menu-item').contains('Performance').click(); // Navigate to Performance menu
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Manage Reviews').click(); // Navigate to Manage Reviews tab
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent.--visited > ul > li:nth-child(1) > a').contains('Manage Reviews').click(); // Navigate to Manage Reviews tab

    // Click the Add button to add a new performance review
    cy.get('.oxd-button--secondary').contains('Add').click();

    // Fill out the performance review form
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(2) > div > div > input').type('Data Mining'); // Isi dengan nama karyawan
    // cy.get('input[name="supervisorName"]').type('SupervisorName'); // Isi dengan nama supervisor
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('2024-11-12'); // Start
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('2024-20-12'); // End Date
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div > input').type('2024-25-12'); // Due Date

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify the performance review is added
    cy.get('.oxd-table').contains('EmployeeName').should('be.visible');
  });
});
