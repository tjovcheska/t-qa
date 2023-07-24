import headerPage from "../pages/headerPage";
import homePage from "../pages/homePage";

const { elementTimeout,
  homePageUrl,
  mintPageUrl, 
  swapPageUrl,
  rewardsPageUrl } = require("../commons/constants");

describe("Home Page Header Tests", () => {
  beforeEach(() => {
    // Navigate to Home page
    cy.visit(homePageUrl);

    // Validate that Home page body is visible
    homePage.elements.homePage({
      timeout: elementTimeout
    }).should("be.visible");
  });

  it("Check redirect to Mint page by pressing a mintTapETH button", () => {
    // Click on the `Mint tapETH` button
    homePage.elements.mintTapETHBtn().click();

    // Check that user is in Mint page by URL
    cy.url().should("eq", mintPageUrl);
  });

  it("Check redirect to Mint page by pressing a Mint tab", () => {
    // Force click on the `Mint` tab due to the responsive design
    headerPage.elements.mintTab().click({ force: true });

    // Check that user is in Mint page by URL
    cy.url().should("eq", mintPageUrl);
  });

  it("Check redirect to Swap page by pressing a Swap tab", () => {
    // Force click on the `Swap` tab due to the responsive design
    headerPage.elements.swapTab().click({ force: true });

    // Check that user is in Swap page by URL
    cy.url().should("eq", swapPageUrl);
  });

  it("Check redirect to Rewards page by pressing a Rewards tab", () => {
    // Force click on the `Rewards` tab due to the responsive design
    headerPage.elements.rewardsTab().click({ force: true });

    // Check that user is in Rewards page by URL
    cy.url().should("eq", rewardsPageUrl);
  });
});