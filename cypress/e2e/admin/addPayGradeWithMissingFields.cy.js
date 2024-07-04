describe('Add Pay Grade with Missing Fields', () => {
    it('Should display error messages when required fields are missing', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as admin
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      // Wait for the dashboard page to load
      cy.url().should('include', '/dashboard');
  
      // Navigate to Admin > Job > Pay Grades
      cy.get('.oxd-main-menu-item').contains('Admin').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Job').click();
      cy.get('.oxd-topbar-body-nav-tab-link').contains('Pay Grades').click();
  
      // Wait for the Pay Grades page to load
      cy.url().should('include', '/admin/viewPayGrades');
  
      // Click on "Add" button
      cy.get('.oxd-button--secondary').contains('Add').click();
  
      // Wait for the Add Pay Grade form to appear
      cy.get('.oxd-form').should('be.visible');
  
      // Try to save without entering any details
      cy.get('button[type="submit"]').contains('Save').click();
  
      // Check for error messages
      cy.get('.oxd-input-group__label-wrapper + .oxd-input-group__error')
        .should('contain', 'Required')
        .and('be.visible');
    });
  });
  