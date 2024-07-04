describe('Add Employment Status', () => {
    it('Should add a new employment status with all fields completed', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as admin
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      // Wait for the dashboard page to load
      cy.url().should('include', '/dashboard');
  
      // Navigate to Admin > Job > Employment Status
      cy.get('.oxd-main-menu-item').contains('Admin').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Job').click();
      cy.get('.oxd-topbar-body-nav-tab-link').contains('Employment Status').click();
  
      // Wait for the Employment Status page to load
      cy.url().should('include', '/admin/employmentStatus');
  
      // Click on "Add" button
      cy.get('.oxd-button--secondary').contains('Add').click();
  
      // Wait for the Add Employment Status form to appear
      cy.get('.oxd-form').should('be.visible');
  
      // Enter employment status details
      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type('Full-Time Permanent');
  
      // Click on "Save" button
      cy.get('button[type="submit"]').contains('Save').click();
  
      // Verify the new employment status is added
      cy.get('.oxd-table-cell').contains('Full-Time Permanent').should('be.visible');
    });
  });
  