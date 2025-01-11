describe("The navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the correct pages when navbar links are clicked", () => {
    // Click on "Artículos" and check the URL
    cy.contains("Artículos").click();
    cy.url().should("include", "/articulos");

    // Click on "Categorías" and check the URL
    cy.contains("Categorías").click();
    cy.url().should("include", "/categorias");

    // Click on the logo and check the URL
    cy.get("img").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should perform a search and navigate to the search results page", () => {
    // Type a query in the search box and press enter
    cy.get("input[type=search]").type("Hola{enter}");
    cy.url().should("include", "/articulos?q=Hola");

    // Check that the search input retains the query value
    cy.get("input[type=search]").should("have.value", "Hola");
  });

  it("should show no active links initially", () => {
    // Check that there are no active links initially
    cy.get(".nav-active-link").should("have.length", 0);
  });

  it("should highlight the active link based on the current page", () => {
    // Navigate to "Artículos" and check the active link
    cy.visit("/articulos");
    cy.get(".nav-active-link").should("contain", "Artículos");

    // Navigate to "Categorías" and check the active link
    cy.visit("/categorias");
    cy.get(".nav-active-link").should("contain", "Categorías");

    // Navigate back to the home page and check that no links are active
    cy.visit("/");
    cy.get(".nav-active-link").should("have.length", 0);
  });
});
