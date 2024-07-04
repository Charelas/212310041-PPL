describe('Edit General Information', () => {
  it('Should edit the general information with all fields completed', () => {
    // Visit the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login as admin
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Wait for the dashboard page to load
    cy.url().should('include', '/dashboard');

    // Navigate to Admin > Organization > General Information
    cy.get('.oxd-main-menu-item').contains('Admin').click();
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Organization').click();
    cy.get('.oxd-topbar-body-nav-tab-link').contains('General Information').click();

    // Wait for the General Information page to load
    cy.url().should('include', '/admin/viewOrganizationGeneralInformation');

    // Click on "Edit" button (represented by oxd-switch-wrapper)
    cy.get('.oxd-switch-wrapper').click();

    // Wait for the Edit General Information form to appear
    cy.get('.oxd-form').should('be.visible');

    // Edit general information details
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div.oxd-grid-item.oxd-grid-item--gutters.organization-name-container > div > div:nth-child(2) > input')
      .clear()
      .type('OrangeHRM Inc');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > input').clear().type('123456789');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > input').clear().type('987654321');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input').clear().type('123-456-7890');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(2) > input').clear().type('098-765-4321');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div:nth-child(3) > div > div:nth-child(2) > input').clear().type('info@orangehrm.com');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(6) > div > div:nth-child(1) > div > div:nth-child(2) > input').clear().type('123 OrangeHRM Street');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(6) > div > div:nth-child(2) > div > div:nth-child(2) > input').clear().type('Suite 400');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(6) > div > div:nth-child(3) > div > div:nth-child(2) > input').clear().type('Orange City');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(7) > div > div:nth-child(1) > div > div:nth-child(2) > input').clear().type('Orange Province');
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(7) > div > div:nth-child(2) > div > div:nth-child(2) > input').clear().type('12345');

    // Select country from dropdown
    cy.get('div[class="oxd-select-text--after"]').click();
    cy.get('.oxd-select-dropdown').contains('United States').click();
    // cy.get('.oxd-select-text-input').contains('Indonesia').click();
    // cy.get('.oxd-select-wrapper').contains('Indonesia').click();

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > textarea').clear().type('This is a note for the organization.');

    // Save the changes
    cy.get('button[type="submit"]').contains('Save').click();

    // // Verify the general information is updated
    // cy.get('input[name="organization[name]"]').should('have.value', 'OrangeHRM Inc');
    // cy.get('input[name="organization[registrationNumber]"]').should('have.value', '123456789');
    // cy.get('input[name="organization[taxId]"]').should('have.value', '987654321');
    // cy.get('input[name="organization[phone]"]').should('have.value', '123-456-7890');
    // cy.get('input[name="organization[fax]"]').should('have.value', '098-765-4321');
    // cy.get('input[name="organization[email]"]').should('have.value', 'info@orangehrm.com');
    // cy.get('input[name="organization[street1]"]').should('have.value', '123 OrangeHRM Street');
    // cy.get('input[name="organization[street2]"]').should('have.value', 'Suite 400');
    // cy.get('input[name="organization[city]"]').should('have.value', 'Orange City');
    // cy.get('input[name="organization[province]"]').should('have.value', 'Orange Province');
    // cy.get('input[name="organization[zipCode]"]').should('have.value', '12345');
    // cy.get('.oxd-select-text-input').should('contain', 'United States');
    // cy.get('textarea[name="organization[notes]"]').should('have.value', 'This is a note for the organization.');
  });
});
