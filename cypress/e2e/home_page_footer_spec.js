import footerPage from "../pages/footerPage";
import homePage from "../pages/homePage";

import { generateRandomString } from "../commons/helperFunctions";

const { elementTimeout,
  homePageUrl,
  waitingTimeout } = require("../commons/constants");

describe("Home Page Footer Tests", () => {
  beforeEach(() => {
    // Navigate to Home page
    cy.visit(homePageUrl);

    // Validate that Home page body is visible
    homePage.elements.homePage({
      timeout: elementTimeout
    }).should("be.visible");
  });

  it("Validate Resources list", () => {
    // Loop through Resources list
    footerPage.elements.resourcesList().each(($element, index) => {
      if (index !== 0 && index !== $element.length - 1) {
        // Get the href attribute of the element
        const href = $element.attr("href"); 
  
        cy.wrap($element).click().then(() => {
          // Validate that the current URL matches the href attribute
          cy.url().should("eq", href);
          // Go back to the previous page for the next iteration
          cy.go("back");
        });
      }
    });
  });

  it("Validate Community list", () => {
    // Loop through Community list
    footerPage.elements.communityList().each(($element, index) => {
      if (index !== 0) {
        // Get the href attribute of the element
        const href = $element.attr("href"); 
  
        cy.wrap($element).click().then(() => {
          // Validate that the current URL matches the href attribute
          cy.url().should("eq", href);
          // Go back to the previous page for the next iteration
          cy.go("back");
        });
      }
    });
  });

  it("Validate Community list box", () => {
    // Loop through Community list box
    footerPage.elements.communityListBox().each(($element, index) => {
      if (index !== 0) {
        // Get the href attribute of the element
        const href = $element.attr("href"); 

        cy.wrap($element).click().then(() => {
          // Validate that the current URL matches the href attribute
          cy.url().should("eq", href);
          // Go back to the previous page for the next iteration
          cy.go("back");
        });
      }
    });
  });

  it("Join the mailing list for mounthly update", () => {
    // Input `Email` in the input field
    footerPage.elements.emailInput().type(`${generateRandomString(10)}@testdevlab.com`);

    // Click `Sign up` button
    footerPage.elements.signUpBtn().click();

    // Verify that `Success` message is shown
    footerPage.elements.popupMessage({
      timeout: waitingTimeout,
    }).should("have.text", "Success");
  });
});
