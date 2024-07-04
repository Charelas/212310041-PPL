describe('Add Pay Grade and Currency', () => {
    it('Should add a new pay grade and then add a currency to it', () => {
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
  
      // Enter the Pay Grade name
      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type('Test Pay Grade2');
      // Save the Pay Grade
      cy.get('button[type="submit"]').contains('Save').click();
  
      //   // Check if the Pay Grade was successfully added
      //   cy.get('.oxd-table-cell').should('contain', 'Test Pay Grade');
  
      //   // Select the newly added Pay Grade to add currency
      //   cy.get('.oxd-table-cell').contains('Test Pay Grade').click();
  
      // Click on "Add" button to add a currency
      cy.get('.oxd-button--secondary').contains('Add').click();
  
      // Wait for the Add Currency form to appear
      cy.get('.oxd-form').should('be.visible');
  
      // Select the currency from the dropdown
      cy.get('div[class="oxd-select-text--after"]').click();
      cy.get('.oxd-select-dropdown').contains('Indonesian Rupiah').click();
  
       // Enter the Minimum Salary
       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-card-container > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > input').type('10000000');
  
       // Enter the Maximum Salary
       cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-card-container > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > input').type('50000000');
  
      // Save the Currency
      cy.get('button[type="submit"]').contains('Save').click();
  
      // // Check if the Currency was successfully added
      // cy.get('.oxd-table-card').should('contain', 'USD - United States Dollar');
    });
  });
  