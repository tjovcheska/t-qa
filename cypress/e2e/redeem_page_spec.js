import headerPage from "../pages/headerPage";
import redeemPage from "../pages/redeemPage";

const { amountToRedem,
  elementTimeout, 
  explicitWait,
  slippage,
  waitingTimeout,
  redeemPageUrl } = require("../commons/constants");

describe("Redeem Page Tests", () => {
  beforeEach(() => {
    // Navigate to Redeem page
    cy.visit(redeemPageUrl);

    // Validate that Redeem page body is visible
    redeemPage.elements.redeemPage({
      timeout: elementTimeout
    }).should("be.visible");
  });

  it("Connect Metamask wallet and redeem token from first pool", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Input value in the first token input
    redeemPage.elements.amountToReedemInput().type(amountToRedem);

    // Choose the first pool
    redeemPage.elements.firstPool().click();

    // Click on the `Redeem` button
    redeemPage.elements.redeemButton().click();

    cy.wait(waitingTimeout);

    // Confirm amount to spend in the new window
    cy.confirmMetamaskPermissionToSpend(amountToRedem);

    // Verify that `Pending` message is shown
    redeemPage.elements.popupMessage().should(
      "have.text",
      "Pending"
    );

    cy.wait(explicitWait);

    // Verify that `Success` message is shown
    redeemPage.elements.popupMessage({
      timeout: waitingTimeout,
    }).should("have.text", "Success");
  });

  it("Connect Metamask wallet and change slippage", { scrollBehavior: false }, () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click on the `Settings` button
    redeemPage.elements.settings({ 
      timeout: elementTimeout
    }).should("be.visible").click();

    // Click all slippages and check for class active
    redeemPage.elements.slippages().each(($span, index, $spans) => {
      if (index != $spans.length - 1) {
        // Click on the element
        cy.wrap($span).click();

        // Check for active status
        cy.wrap($span).should('have.class', 'active');
      } else {
        cy.wrap($span).type(slippage);
      }
    });
  });
});
