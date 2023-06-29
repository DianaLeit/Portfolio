describe("Main page tests", () => {
  beforeEach(function () {
    cy.viewport("iphone-8");
    cy.visit("/");
  });
  it("goes to About me section via the navigation bar", () => {
    cy.get('[data-cy="catpaw-button"]').click();
    cy.get('[data-cy="about-link"]').click();
    cy.url().should("be.equal", "https://dileit.com/#about-me");
    cy.get("#about-me").should("contain", "Hello. My name is Diana Voronova");
  });
  it("goes to About me section via the button", () => {
    cy.get('[data-cy="about-button"]').click();
    cy.url().should("be.equal", "https://dileit.com/#about-me");
    cy.get("#about-me").should("contain", "Hello. My name is Diana Voronova");
  });
  it("goes to Projects section via the navigation bar", () => {
    cy.get('[data-cy="catpaw-button"]').click();
    cy.get('[data-cy="projects-link"]').click();
    cy.url().should("be.equal", "https://dileit.com/#projects");
    cy.get('[data-cy="project-container"]').should("contain", "UITAP", "Age In Days Calculator");
    cy.get('[data-cy="project-one"]').should("be.visible");
    cy.get('[data-cy="project-two"]').should("be.visible");
    cy.get('[data-cy="project-three"]').should("be.visible");
    // cy.get('[data-cy="project-four"]').should("be.visible");
  });
  it("goes to Contact Me section via the navigation bar", () => {
    cy.get('[data-cy="catpaw-button"]').click();
    cy.get('[data-cy="contactme-link"]').click();
    cy.url().should("be.equal", "https://dileit.com/#contact-me");
    cy.get('[data-cy="contactme"]').should("contain", "hanwi1994@gmail.com", "LinkedIn");
  });
  it("checks socials badges and logo", () => {
    cy.get('[data-cy="linkedin-badge"]').should("be.visible");
    cy.get('[data-cy="github-badge"]').should("be.visible");
    cy.get('[data-cy="instagram-badge"]').should("be.visible");
    cy.get(".logo").should("be.hidden");
  });
});
