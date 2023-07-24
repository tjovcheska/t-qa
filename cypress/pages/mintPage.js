class mintPage {
    elements = {
      errorMessage: () => cy.get(".rulesResult div"),
      firstTokenBalance: () => cy.get(".inputBox:nth-child(2) .balance"),
      firstTokenInput: () => cy.get("#first"),
      mintButton: () => cy.get(".btnBox button"),
      mintPage: () => cy.get(".mintPage"),
      redeemButton: () => cy.get(".btnBox span:nth-child(2)"),
      secondTokenBalance: () => cy.get(".inputBox:nth-child(3) .balance"),
      secondTokenInput: () => cy.get("#second"),
      successMessage: () => cy.get(".mintComplete"),
      switchBox: () => cy.get(".switchBox button"),
    };
  }
  
  export default new mintPage();
  