/// <reference types="cypress"/>

describe("Main page tests", () => {
  beforeEach(function () {
    cy.viewport(1024, 768);
    cy.visit("/");
  });

  it("checks links buttons", () => {
    cy.get('[data-cy="mail"]').should("be.visible");
    cy.get('[data-cy="cv"]').should("be.visible");
    cy.get('[data-cy="linkedin"]').should("be.visible");
    cy.get('[data-cy="github"]').should("be.visible");
    cy.get('[data-cy="insta"]').should("be.visible");
  });

  it("checks work of calculator", () => {
    cy.get('[data-cy="project-2"]').find('[data-cy="My-Age-in-Days-button"]').click();
    cy.get('[data-test="date-input"]').type("1994-10-10").trigger("change");
    cy.get('[data-test="result"]')
      .invoke("text")
      .should("match", /\d{1,5}/);
  });
});

