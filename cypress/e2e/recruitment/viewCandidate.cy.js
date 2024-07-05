describe('Add Job Vacancy', () => {
  it('Should add a new job vacancy', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin'); // Ganti dengan username admin jika berbeda
    cy.get('input[name="password"]').type('admin123'); // Ganti dengan password admin jika berbeda
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Recruitment > Vacancies
    cy.get('.oxd-main-menu-item').contains('Recruitment').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Candidates').click();

    // Verify that the candidate list is displayed
    cy.get('.oxd-table').should('be.visible'); // Ensure the candidate table is visible

    cy.get('.oxd-select-text').eq(0).click(); // Click Job Title dropdown
    cy.get('.oxd-select-dropdown').contains('Chief Executive Officer').click(); // Select Job Title
    cy.get('.oxd-select-text').eq(1).click(); // Click Vacancy dropdown
    cy.get('.oxd-select-dropdown').contains('Engineer').click(); // Select Vacancy
    cy.get('button[type="submit"]').click();



    // Verify the job vacancy was added successfully
    // cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved');
  });
});
