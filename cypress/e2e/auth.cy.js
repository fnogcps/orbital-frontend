describe("Authentication", () => {
  it("Login test", () => {
    cy.visit("http://localhost:8001");
    cy.get(".btn").click({force: true});
    cy.get("#tb_products");
  });
  it("Logout test", () => {
    cy.visit("http://localhost:8001");
    cy.get(".btn").click({force: true});

    cy.get("#");
  });
});
