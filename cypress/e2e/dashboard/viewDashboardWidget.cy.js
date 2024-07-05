describe('View Employment Status as Employee', () => {
  it('Should login as an employee and view employment status', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as Admin
    cy.get('input[name="username"]').type('Admin'); // Ganti dengan username employee
    cy.get('input[name="password"]').type('admin123'); // Ganti dengan password employee
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to My Info > Job
    cy.get('.oxd-main-menu-item').contains('Dashboard').click(); // Navigate to My Info menu
  });
});
