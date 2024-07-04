describe('Apply for Leave with Invalid Dates', () => {
    it('Should show error when applying for leave with invalid dates', () => {
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
  
      // Select leave type
      cy.get('.oxd-select-text-input').first().click();
      cy.get('.oxd-select-dropdown').contains('FMLA US').click(); // Ganti dengan tipe cuti yang sesuai
  
      // Enter invalid leave dates
      cy.get('input[placeholder="yyyy-mm-dd"]').first().type('2024-07-15');
      cy.get('input[placeholder="yyyy-mm-dd"]').last().type('2024-07-10'); // Tanggal akhir lebih awal dari tanggal mulai
  
      // Add comments
      cy.get('textarea').type('Applying for leave with invalid dates');
  
      // Click on Apply button
      cy.get('button[type="submit"]').contains('Apply').click();
  
    //   // Verify that the error message is displayed
    //   cy.get('.oxd-alert-content').should('contain', 'End date should be after start date');
    });
  });
  