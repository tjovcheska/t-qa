class redeemPage {
    elements = {
      amountToReedemInput: () => cy.get(".redeemMain #first"),
      firstPool: () => cy.get(".pairMain .rowBox:nth-child(2)"),
      popupMessage: () => cy.get(".ant-notification-notice-description:nth-child(3)"),
      redeemButton: () => cy.get(".btnBox button"),
      redeemPage: () => cy.get(".redeemPage"),
      secondPool: () => cy.get(".pairMain .rowBox:nth-child(3)"),
      settings: () => cy.get('.slippage svg'),
      slippages: () => cy.get('.typeBox span:nth-child(n)'),
      switchBox: () => cy.get(".switchBox"),
    };
  }
  
  export default new redeemPage();
  