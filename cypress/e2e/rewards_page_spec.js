import headerPage from "../pages/headerPage";
import rewardsPage from "../pages/rewardsPage";

const { elementTimeout, 
  explicitWait, 
  waitingTimeout,
  rewardsPageUrl } = require("../commons/constants");

describe("Rewards Page Tests", () => {
  beforeEach(() => {
    // Navigate to Rewards page
    cy.visit(rewardsPageUrl);

    // Validate that Rewards page body is visible
    rewardsPage.elements.rewardsPage({
      timeout: elementTimeout
    }).should("be.visible");
  });

  it("Connect Metamask wallet and claim rewards", () => {
    // Connect to Metamask wallet
    headerPage.connectMetamaskWallet();

    // Verify claimRewardButton is disabled
    cy.get(".actionMain button:nth-child(2)").then(($btn) => {
      if ($btn.is(':disabled')) {
        cy.get(".actionMain button:nth-child(2)").should('be.disabled');
      } else {
        rewardsPage.elements.claimRewardButton().click();

        cy.wait(explicitWait);
    
        rewardsPage.elements.modalClaimButton().click();
    
        cy.wait(waitingTimeout);
    
        // Confirm transaction
        cy.confirmMetamaskTransaction();
    
        // Verify that `Pending` message is shown
        rewardsPage.elements.popupMessage().should(
          "have.text",
          "Pending"
        );
    
        cy.wait(explicitWait);
    
        // Verify that `Success` message is shown
        rewardsPage.elements.popupMessage({
          timeout: waitingTimeout,
        }).should("have.text", "Success");
      }
    });
  });
});
