describe("Authentication", () => {
  it("Login test", () => {
    cy.visit("http://localhost:8001");
    cy.get(".btn").click({force: true});
    cy.get("#tb_products");
  });
  it("Logout test", () => {
    cy.visit("http://localhost:8001");
    cy.get(".btn").first().click({force: true});
    cy.get("li button").contains("Logout");
    cy.get("li button").last().click({force: true});
    cy.get("form button").contains("Login");
  });
});
