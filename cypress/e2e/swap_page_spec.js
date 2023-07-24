import headerPage from "../pages/headerPage";
import homePage from "../pages/homePage";
import swapPage from "../pages/swapPage";

const { amountToSwap,
  elementTimeout, 
  explicitWait, 
  waitingTimeout,
  homePageUrl,
  swapPageUrl } = require("../commons/constants");

describe("Swap Page Tests", () => {
  beforeEach(() => {
    // Navigate to Swap page
    cy.visit(swapPageUrl);

    // Validate that Swap page body is visible
    swapPage.elements.swapPage({ 
      timeout: elementTimeout 
    }).should("be.visible");
  });

  it("Connect Metamask wallet and swap ETH token", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Enter the input in the first input field
    swapPage.elements.firstTokenInput().type(amountToSwap);

    // Click on the `Swap` button
    swapPage.elements.swapButton().click();

    cy.wait(waitingTimeout);

    // Confirm Metamask transation in the new window
    cy.confirmMetamaskTransaction();

    // Verify that `Pending` message is shown
    swapPage.elements.popupMessage().should(
      "have.text",
      "Pending"
    );

    cy.wait(explicitWait);

    // Verify that `Success` message is shown
    swapPage.elements.popupMessage({
      timeout: waitingTimeout,
    }).should("have.text", "Success");
  });

  it("Connect Metamask wallet and swap stETH token via dropdown", { scrollBehavior: false }, () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click `ETH` to open the dropdown list
    swapPage.elements.ETHDropDown().click({ force: true });

    // Click `stETH`
    swapPage.elements.stETH().click();

    // Enter the input in the first input field
    swapPage.elements.firstTokenInput().type(amountToSwap);

    // Scroll to the bottom of the page
    cy.scrollTo("bottom");

    // Click on the `Swap` button
    swapPage.elements.swapButton().click();

    cy.wait(waitingTimeout);

    // Confirm Metamask permission to spend in the new window
    cy.confirmMetamaskPermissionToSpend();

    // Verify that `Pending` message is shown
    swapPage.elements.popupMessage().should(
      "have.text",
      "Pending"
    );

    cy.wait(explicitWait);

    // Verify that `Success` message is shown
    swapPage.elements.popupMessage({
      timeout: waitingTimeout,
    }).should("have.text", "Success");
  });

  it("Connect Metamask wallet and swap rETH token via dropdown", { scrollBehavior: false }, () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click `ETH` to open the dropdown list
    swapPage.elements.ETHDropDown().click({ force: true });

    // Click `rETH`
    swapPage.elements.rETH().click();

    // Enter the input in the first input field
    swapPage.elements.firstTokenInput().type(amountToSwap);

    // Scroll to the bottom of the page
    cy.scrollTo("bottom");

    // Click on the `Swap` button
    swapPage.elements.swapButton().click();

    cy.wait(waitingTimeout);

    // Confirm Metamask permission to spend in the new window
    cy.confirmMetamaskPermissionToSpend();

    // Verify that `Pending` message is shown
    swapPage.elements.popupMessage().should(
      "have.text",
      "Pending"
    );

    cy.wait(explicitWait);

    // Verify that `Success` message is shown
    swapPage.elements.popupMessage({
      timeout: waitingTimeout,
    }).should("have.text", "Success");
  });

  it("Connect Metamask wallet and swap wETH token with insufficient balance", { scrollBehavior: false }, () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click `ETH` to open the dropdown list
    swapPage.elements.ETHDropDown().click({ force: true });

    // Click `wETH`
    swapPage.elements.wETH().click();

    // Enter the input in the first token input
    swapPage.elements.firstTokenInput().type(amountToSwap);

    // Check error message
    swapPage.elements.errorMessage({ timeout: waitingTimeout }).should(
      "have.text",
      "Insufficient wETH transferable balance"
    );
  });

  it("Connect Metamask wallet and redirect to the home page", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click on the `Tapio` logo
    headerPage.elements.logo().click();

    // Assert that user is redirected to Home page
    cy.url().should("eq", homePageUrl);

    // Assert that Home page body is visible
    homePage.elements.homePage().should("be.visible");
  });
});
