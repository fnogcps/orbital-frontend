describe("Create products", () => {
  it("Create one product", () => {
    cy.visit("http://localhost:8001");
    cy.get(".btn").click({force: true});
    cy.get("a[href='/product']").click({force: true});
    cy.get("#name").type("Product A", {force: true});
    cy.get("#price").type("9.99", {force: true});
    cy.get("#category").type("Category B", {force: true});
    cy.get("#description").type("Lorem ipsum", {
      force: true
    });
    cy.get(".btn").click({force: true});
    cy.get(".card-compact").last().contains("Product A");
  });
  it("Create more one product", () => {
    cy.visit("http://localhost:8001");
    cy.get(".btn").click({force: true});
    cy.get("a[href='/product']").click({force: true});
    cy.get("#name").type("Product B", {force: true});
    cy.get("#price").type("9.99", {force: true});
    cy.get("#category").type("Category C", {force: true});
    cy.get("#description").type("Lorem ipsum", {
      force: true
    });
    cy.get(".btn").click({force: true});
    cy.get(".card-compact").last().contains("Product B");
  });
});
