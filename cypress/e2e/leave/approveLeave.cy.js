describe('Approve Leave', () => {
    it('Should approve leave successfully', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as an admin
      cy.get('input[name="username"]').type('datamining');
      cy.get('input[name="password"]').type('datamining123');
      cy.get('button[type="submit"]').click();
  
      // Wait for the dashboard page to load
      cy.url().should('include', '/dashboard');
  
      // Navigate to Leave > Leave List
      cy.get('.oxd-main-menu-item').contains('Leave').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Leave List').click();
  
      // Wait for the Leave List page to load
      cy.url().should('include', '/leave/list');
  
      // Filter the leave list to find the pending leave
      cy.get('input[placeholder="Search"]').type('Data Mining'); // Ganti 'Data Mining' dengan nama karyawan yang terkait
      cy.get('button[type="submit"]').contains('Search').click();
  
      // Wait for the search results to load
      cy.wait(2000);
  
      // Approve the leave application
      cy.get('tr').contains('Pending').parents('tr').within(() => {
        cy.get('.oxd-icon.bi-check').click(); // Klik tombol approve (centang)
      });
  
      // Confirm the approval
      cy.get('button[type="button"]').contains('Yes, Approve').click();
  
    //   // Verify the leave application is approved successfully
    //   cy.get('.oxd-toast').should('contain', 'Successfully Updated');
    });
  });
  