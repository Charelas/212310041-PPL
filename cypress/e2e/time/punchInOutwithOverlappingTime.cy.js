describe('Punch In/Out with Overlapping Time', () => {
  it('Should punch in and out with overlapping time', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as an employee
    cy.get('input[name="username"]').type('datamining');
    cy.get('input[name="password"]').type('datamining123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Time > Attendance > Punch In/Out
    cy.get('.oxd-main-menu-item').contains('Time').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Attendance').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('Punch In/Out').click();

    // Punch In with overlapping time
    cy.get('.oxd-date-input').click(); // Enter Date
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > i').click();
    cy.get('.oxd-time-picker').type('11:00');
    cy.get('button[type="submit"]').click(); // Click Punch In button

    // Verify Punch In was successful
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved');

    // Punch Out with overlapping time
    cy.get('.oxd-date-input').click(); // Enter overlapping Punch Out time
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > i').click();
    cy.get('.oxd-time-picker').type('17:00');
    cy.get('button[type="submit"]').click(); // Click Punch Out button

    // Verify Punch Out was successful
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved');
  });
});
