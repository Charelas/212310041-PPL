describe('View Performance Review as Employee', () => {
  it('Should login as employee and view performance review', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as employee
    cy.get('input[name="username"]').type('datamining');
    cy.get('input[name="password"]').type('datamining123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Performance > My Reviews
    cy.get('.oxd-main-menu-item').contains('Performance').click(); // Navigate to Performance menu
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Manage Reviews').click(); // Navigate to My Reviews tab
    cy.get('.oxd-dropdown-menu').contains('My Reviews').click(); // Navigate to My Reviews tab

    // Verify that performance reviews are visible
    cy.get('.oxd-table').should('be.visible');
    // cy.get('.oxd-table').contains('Performance Review').should('be.visible');
  });
});
