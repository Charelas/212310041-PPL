describe('Add Job Title with Missing Fields', () => {
    it('Should display validation errors when required fields are missing', () => {
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
  
      // Leave the job title field empty
      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input')
        .should('be.visible')
        .clear();
  
      // Enter other details if necessary (can also leave them empty to test different validations)
      // Here we leave description and note fields empty for simplicity
      // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div > textarea').clear();
      // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div > textarea').clear();
  
      // Attempt to save the job title
      cy.get('button[type="submit"]').contains('Save').click();
  
      // Check for validation errors
      cy.get('.oxd-input-group__message').should('contain', 'Required');
    });
  });
  