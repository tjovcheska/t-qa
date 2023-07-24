class rewardsPage {
    elements = {
      claimRewardButton: () => cy.get(".actionMain button:nth-child(2)"),
      mintRedeemButton: () => cy.get(".actionMain button:nth-child(1)"),
      modalClaimButton: () => cy.get(".claimRewards .actionMain button"),
      popupMessage: () => cy.get(".ant-notification-notice-description:nth-child(3)"),
      rewardsPage: () => cy.get(".rewardsPage"),
    };
  }
  
  export default new rewardsPage();
  