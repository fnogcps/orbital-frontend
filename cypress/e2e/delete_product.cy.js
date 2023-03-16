describe("Delete items", () => {
  it("Remove first item", () => {
    cy.visit("http://localhost:8001");
    cy.get(".btn").click({force: true});
    cy.get(".card .bg-red-500").first().click({force: true});
    cy.get(".card-compact").first().contains("Product B");
  });
});
