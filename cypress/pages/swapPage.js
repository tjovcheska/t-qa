class swapPage {
    elements = {
      approveButton: () => cy.get('.btnBox button:nth-child(1)'),
      errorMessage: () => cy.get(".rulesResult div"),
      ETH: () => cy.get('.selectBox .item:nth-child(1)'),
      ETHDropDown: () => cy.get('input#first + span path'),
      firstTokenInput: () => cy.get("#first"),
      popupMessage: () => cy.get(".ant-notification-notice-description:nth-child(3)"),
      rETH: () => cy.get('.selectBox .item:nth-child(3)'),
      secondTokenInput: () => cy.get("#second"),
      settings: () => cy.get('.slippage svg'),
      stETH: () => cy.get('.selectBox .item:nth-child(3)'),
      switchButton: () => cy.get(".iconBox"),
      swapButton: () => cy.get(".btnBox button"),
      swapPage: () => cy.get(".swapPage"),
      tokenSelectMask: () => cy.get(".tokenSelectMask"),
      wETH: () => cy.get('.selectBox .item:nth-child(2)'),
    };
  }
  
  export default new swapPage();
  