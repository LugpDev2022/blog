describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to an article page when 'Leer más' is clicked", () => {
    cy.contains("Leer más").click();
    cy.url().should("contain", "/articulos");
  });

  it("should navigate to articles page when 'Ver más' is clicked", () => {
    cy.contains("Ver más").click();
    cy.url().should("eq", "http://localhost:3000/articulos");
  });

  it("should show the 'sobre el autor' section", () => {
    cy.contains("Sobre el autor").should("be.visible");
  });

  it("should navigate to category page when a category btn is clicked", () => {
    cy.contains("JavaScript").click();
    cy.url().should("eq", "http://localhost:3000/categorias/javascript");
  });
});
