describe("Home page", () => {
  beforeEach(() => {
    cy.visit("localhost:3001");
  });

  it("checks to see if the title contains the correct words", () => {
    cy.get(".title-link").contains("Tool Swapping");
  });
});
