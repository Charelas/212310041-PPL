describe('Add Job Vacancy', () => {
    it('Should add a new job vacancy', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Login as admin
      cy.get('input[name="username"]').type('Admin'); // Ganti dengan username admin jika berbeda
      cy.get('input[name="password"]').type('admin123'); // Ganti dengan password admin jika berbeda
      cy.get('button[type="submit"]').click();
  
      // Wait for the dashboard page to load
      cy.url().should('include', '/dashboard');
  
      // Navigate to Recruitment > Vacancies
      cy.get('.oxd-main-menu-item').contains('Recruitment').click();
      cy.get('.oxd-topbar-body-nav-tab-item').contains('Vacancies').click();
  
      // Click Add button to add a new job vacancy
      cy.get('.oxd-button--secondary').contains('Add').click();
  
      // // Fill in the form to add a new job vacancy
      // cy.get('.oxd-select-text').eq(0).click(); // Click Job Title dropdown
      // cy.get('.oxd-select-dropdown').contains('Chief Executive Officer').click(); // Select Job Title
  
    //   cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > input').type('Engineer'); // Enter Vacancy Name
    //   cy.get('.oxd-select-text').eq(0).click(); // Click Job Title dropdown
    //   cy.get('.oxd-select-dropdown').contains('Chief Executive Officer').click(); // Select Job Title
    //   cy.get('.oxd-textarea').type('We are looking for a skilled Software Engineer to join our team.'); // Enter Description
    //   cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('Orange Test'); // Click Hiring Manager dropdown
    //   cy.get('.oxd-autocomplete-dropdown').contains('Orange Test').click(); // Select Hiring Manager
  
      // Save the new job vacancy
      cy.get('button[type="submit"]').click();
  
      // Verify the job vacancy was added successfully
      // cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved');
    });
  });
  