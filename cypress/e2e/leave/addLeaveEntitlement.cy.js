describe('Add Leave Entitlement', () => {
    it('Should add leave entitlement successfully', () => {
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
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Add Entitlements').click();
  
      // Wait for the Add Entitlements page to load
      cy.url().should('include', '/leave/entitlements/add');
  
      // Select leave type
      cy.get('.oxd-select-text-input').first().click();
      cy.get('.oxd-select-dropdown').contains('FMLA US').click(); // Ganti dengan tipe cuti yang sesuai
  
      // Select employee
      cy.get('.oxd-autocomplete-text-input').click().type('John Doe'); // Ganti dengan nama karyawan yang sesuai
      cy.get('.oxd-autocomplete-dropdown').contains('John Doe').click();
  
      // Enter entitlement
      cy.get('input[name="entitlement[entitlement]"]').type('10');
  
      // Click on Save button
      cy.get('button[type="submit"]').contains('Save').click();
  
    //   // Verify that the leave entitlement is added successfully
    //   cy.get('.oxd-toast-content').should('contain', 'Successfully Saved');
    });
  });
  