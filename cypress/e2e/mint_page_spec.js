import { ethers } from "ethers";

import headerPage from "../pages/headerPage";
import homePage from "../pages/homePage";
import mintPage from "../pages/mintPage";
import redeemPage from "../pages/redeemPage";

const { address,
  amountToMint,
  elementTimeout, 
  explicitWait,
  insufficienBalance,
  waitingTimeout,
  mintPageUrl,
  redeemPageUrl, 
  homePageUrl } = require("../commons/constants");

describe("Mint Page Tests", () => {
  beforeEach(() => {
    // Navigate to Mint page
    cy.visit(mintPageUrl);

    // Validate that Mint page body is visible
    mintPage.elements.mintPage({
      timeout: elementTimeout
    }).should("be.visible");
  });

  it("Connect Metamask wallet and mint token successfully", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Accept Metamask access
    cy.acceptMetamaskAccess();

    // Get ETH balance before the transaction and log it to console
    const provider = ethers.getDefaultProvider("goerli");
    provider.getBalance(address).then((balance) => {
      const balanceInEthBefore = ethers.utils.formatEther(balance);

      // Log the transaction balance on Console
      console.log(`Balance: ${balanceInEthBefore} ETH`);
    });

    // Click `Switchbox`
    mintPage.elements.switchBox().click({ force: true });

    cy.wait(explicitWait);

    // Input value in the first token input
    mintPage.elements.firstTokenInput().type(amountToMint);

    // Click `Mint` button
    mintPage.elements.mintButton().click({ multiple: true });

    cy.wait(waitingTimeout);

    // Confirm transaction
    cy.confirmMetamaskTransaction();

    // Verify that the mint was successful
    mintPage.elements.successMessage({
      timeout: waitingTimeout
    }).should("be.visible");
  });

  it("Connect Metamask wallet and mint token with insufficient balance", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click `Switchbox`
    mintPage.elements.switchBox().click({ force: true });

    // Input insufficient wallet value
    mintPage.elements.firstTokenInput().type(insufficienBalance);

    // Check error message
    mintPage.elements.errorMessage({
      timeout: waitingTimeout
    }).should(
      "have.text",
      "Insufficient ETH transferable balance"
    );
  });

  it("Connect Metamask wallet and redirect to the Home page", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click on the `Tapio` logo
    headerPage.elements.logo().click();

    // Assert that user is redirected to Home page
    cy.url().should("eq", homePageUrl);

    // Assert that Home page body is visible
    homePage.elements.homePage().should("be.visible");
  });

  it("Connect Metamask wallet and redirect to the Redeem page", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Click on the `Redeem` button
    mintPage.elements.redeemButton().click();

    // Assert that user is redirected to Redeem page
    cy.url().should("eq", redeemPageUrl);

    // Assert that Redeem page body is visible
    redeemPage.elements.redeemPage().should("be.visible");
  });
});
