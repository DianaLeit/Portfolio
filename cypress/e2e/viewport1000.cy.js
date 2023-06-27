describe("Main page tests", () => {
  it("checks socials badges", () => {
    cy.visit("https://dileit.com/");
    cy.get('[data-cy="linkedin-badge"]').should("be.visible");
    cy.get('[data-cy="github-badge"]').should("be.visible");
    cy.get('[data-cy="instagram-badge"]').should("be.visible");
  });

  it("goes to About me section via the navigation bar", () => {
    cy.visit("https://dileit.com/");
    cy.get('[data-cy="catpaw-button"]').click();
    cy.get('[data-cy="about-link"]').click();
    cy.get("#about-me").should("contain", "Hello. My name is Diana Voronova");
  });
  it("goes to About me section via the button", () => {
    cy.visit("https://dileit.com/");
    cy.get('[data-cy="about-button"]').click();
    cy.get("#about-me").should("contain", "Hello. My name is Diana Voronova");
  });
  it("goes to Projects section via the navigation bar", () => {
    cy.visit("https://dileit.com/");
    cy.get('[data-cy="catpaw-button"]').click();
    cy.get('[data-cy="projects-link"]').click();
    cy.get('[data-cy="project-container"]').should("contain", "UITAP", "Age In Days Calculator");
    cy.get('[data-cy="project-one"]').should("be.visible");
    cy.get('[data-cy="project-two"]').should("be.visible");
  });
  it("goes to Contact Me section via the navigation bar", () => {
    cy.visit("https://dileit.com/");
    cy.get('[data-cy="catpaw-button"]').click();
    cy.get('[data-cy="contactme-link"]').click();
    cy.get('[data-cy="contactme"]').should("contain", "hanwi1994@gmail.com", "LinkedIn");
  });
});
