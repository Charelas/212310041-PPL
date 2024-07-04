describe('Add Employee Entitlements', () => {
    it('Should add employee entitlements successfully', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as an admin
      cy.get('input[name="username"]').type('datamining'); 
      cy.get('input[name="password"]').type('datamining123');
      cy.get('button[type="submit"]').click();
  
      // Wait for the dashboard page to load
      cy.url().should('include', '/dashboard');
  
      // Navigate to Leave > Entitlements > Add Entitlements
      cy.get('.oxd-main-menu-item').contains('Leave').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Entitlements').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Employee Entitlements').click();
  
      // Wait for the Employee Entitlements page to load
      cy.url().should('include', '/leave/viewEmployeeEntitlements');
  
      // Select leave type
      cy.get('.oxd-select-text-input').first().click();
      cy.get('.oxd-select-dropdown').contains('FMLA US').click();
  
      // Select employee
      cy.get('.oxd-autocomplete-text-input').click().type('Data Mining');
      cy.get('.oxd-autocomplete-dropdown').contains('Data Mining').click();
  
      // Click on Search button
      cy.get('button[type="submit"]').contains('Search').click();
  
    //   // Verify that the employee entitlements are displayed
    //   cy.get('.oxd-table').should('be.visible');
    //   cy.get('.oxd-table-cell').should('contain', 'John Doe'); // Verifikasi bahwa data karyawan ditampilkan
    });
  });
  