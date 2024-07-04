describe('Apply for Leave', () => {
    it('Should apply for leave successfully', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as an employee
      cy.get('input[name="username"]').type('datamining'); 
      cy.get('input[name="password"]').type('datamining123'); 
      cy.get('button[type="submit"]').click();
  
      // Wait for the dashboard page to load
      cy.url().should('include', '/dashboard');
  
      // Navigate to Leave > Apply
      cy.get('.oxd-main-menu-item').contains('Leave').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Apply').click();
  
      // Wait for the Apply Leave page to load
      cy.url().should('include', '/leave/apply');
  
      // Fill in the leave application form
      cy.get('.oxd-select-text-input').eq(0).click(); // Select Leave Type dropdown
      cy.get('.oxd-select-dropdown').contains('Annual Leave').click();
      
      cy.get('.oxd-date-input input').eq(0).type('2023-07-10'); // Select From Date
      cy.get('.oxd-date-input input').eq(1).type('2023-07-12'); // Select To Date
  
      cy.get('textarea[name="applyleave[txtComment]"]').type('Going on vacation'); // Enter a comment
  
      // Submit the form
      cy.get('button[type="submit"]').contains('Apply').click();
  
    //   // Verify the leave application is submitted successfully
    //   cy.get('.oxd-toast').should('contain', 'Successfully Saved');
    });
  });
  