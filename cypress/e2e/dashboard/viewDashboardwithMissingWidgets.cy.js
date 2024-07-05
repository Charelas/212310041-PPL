describe('View Dashboard with Missing Widgets', () => {
    beforeEach(() => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      
      // Login as employee
      cy.get('input[name="username"]').type('datamining'); // Ganti dengan username employee
      cy.get('input[name="password"]').type('datamining123123'); // Ganti dengan password employee
      cy.get('button[type="submit"]').click();
      // Wait for the dashboard to load
      cy.url().should('include', '/dashboard');
    });
  
    it('Should handle missing widgets gracefully', () => {
      // Verify absence of widgets
      cy.get('.widget').should('not.exist');
      cy.contains('No widgets available').should('exist'); // Adjust this text based on actual message when no widgets are present
    });
  });
  