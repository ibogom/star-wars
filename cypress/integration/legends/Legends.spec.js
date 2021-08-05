describe("Legends list test", () => {
  before(() => {
    cy.intercept("GET", "https://swapi.dev//api/people/*", {
      fixture: "legends.json",
    }).as("getLegends");

    cy.intercept("GET", "https://swapi.dev//api/people/3", {
      fixture: "legend.json",
    }).as("getLegend");

    cy.visit("/people");

    cy.wait("@getLegends");
  });

  it("Should show list correctly", () => {
    cy.findByTestId("legends-title").should("be.visible");
    cy.fixture("legends").then((data) => {
      data.results.forEach((item) => {
        const id = item.url.match(/(\d+)/g)[0];

        cy.findByTestId(`name-${id}`).contains(item.name);
        cy.findByTestId(`action-${item.name}-${id}`).should("be.visible");
      });

      cy.findByTestId("action-R2-D2-3").click();
      cy.findByTestId("checked-R2-D2-3").should("be.visible");
      cy.findByTestId("action-R2-D2-3").click();
      cy.findByTestId("unchecked-R2-D2-3").should("be.visible");
      cy.findByTestId("action-R2-D2-3").click();

      cy.findByTestId("name-3").click();

      cy.wait("@getLegend");

      cy.findByTestId("checked-R2-D2-3").should("be.visible");
      cy.findByTestId("action-R2-D2-3").click();
      cy.go("back");
      cy.findByTestId("unchecked-R2-D2-3").should("be.visible");
    });
  });
});
