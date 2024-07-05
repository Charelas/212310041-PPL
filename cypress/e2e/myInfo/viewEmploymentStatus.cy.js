describe('View Employment Status as Employee', () => {
    it('Should login as an employee and view employment status', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as employee
      cy.get('input[name="username"]').type('datamining'); // Ganti dengan username employee
      cy.get('input[name="password"]').type('datamining123'); // Ganti dengan password employee
      cy.get('button[type="submit"]').click();
  
      // Wait for the dashboard page to load
      cy.url().should('include', '/dashboard');
  
      // Navigate to My Info > Job
      cy.get('.oxd-main-menu-item').contains('My Info').click(); // Navigate to My Info menu
      cy.get('.orangehrm-tabs-item').contains('Job').click(); // Navigate to Job tab
  
      // Verify the Employment Status section is visible
      cy.get('.orangehrm-card-container').contains('Employment Status').should('be.visible');
  
    //   // Optionally, verify specific employment status information
    //   cy.get('.orangehrm-card-container').contains('Employment Status').next().within(() => {
    //     cy.get('.oxd-text').should('have.length.greaterThan', 0); // Check that there are status entries
    //   });
    });
  });
  