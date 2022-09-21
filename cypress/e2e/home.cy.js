describe("Home page", () => {
  beforeEach(() => {
    cy.visit("localhost:3001");
  });

  it("checks to see if the title contains the correct words", () => {
    cy.get(".title-link").contains("Tool Swapping");
  });

  it("Logs in", () => {
    cy.intercept('POST', '/login').as('login')
    cy.get('.container > :nth-child(3)').click();
    cy.get('input[name=username]').type('Tom');
    cy.get('input[name=password]').type('password{enter}')
    cy.wait('@login').its('response').should('have.property', 'statusCode', 200)
  })

  it.only("Doesnt log in with wrong password", () => {
    cy.intercept('POST', '/login').as('login')
    cy.get('.container > :nth-child(3)').click();
    cy.get('input[name=username]').type('Tom');
    cy.get('input[name=password]').type('wrong{enter}')
    cy.wait('@login').its('response').to.contain('Not Allowed')
  })
})