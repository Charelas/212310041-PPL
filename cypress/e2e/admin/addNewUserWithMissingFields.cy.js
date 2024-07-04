describe('Add User with Missing Fields', () => {
    it('Should show error messages when mandatory fields are missing', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as admin
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      // Navigate to Admin > User Management > Users
      cy.get('.oxd-main-menu-item').contains('Admin').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('User Management').click();
      cy.get('.oxd-topbar-body-nav-tab-link').contains('Users').click();
  
      // Click on "Add" button
      cy.get('.oxd-button--secondary').contains('Add').click();
  
      // Attempt to save the form with missing mandatory fields
      cy.get('button[type="submit"]').contains('Save').click();
  
      // Check for error messages
      cy.get('.oxd-input-group__message').should('contain', 'Required');
    });
  });
  