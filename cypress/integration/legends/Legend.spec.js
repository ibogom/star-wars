import moment from "moment";

describe("Legend item test", () => {
  before(() => {
    cy.intercept("GET", "https://swapi.dev//api/people/1", {
      fixture: "legend.json",
    }).as("getLegend");

    cy.visit("/people/1");

    cy.wait("@getLegend");
  });

  it("Should legend item correctly", () => {
    cy.findByTestId("legend-title").should("be.visible");

    cy.fixture("legend").then((data) => {
      Object.keys(data).forEach((name) => {
        cy.findByTestId(name).should("be.visible");

        if (Array.isArray(data[name])) {
          const links = data[name];
          links.forEach((link) => {
            const href = link.replace("https://swapi.dev/api/", "/");
            cy.findByTestId(`link-${href.replace("/", "")}`).contains(
              href.replace("/", "")
            );
          });
        } else if (name === "created" || name === "edited") {
          moment(data[name]).format("MMM Do YY");
        } else {
          cy.findByTestId(`${name}-value`).contains(data[name]);
        }

        cy.findByTestId(`${name}-value`).should("be.visible");
      });
    });
  });
});
