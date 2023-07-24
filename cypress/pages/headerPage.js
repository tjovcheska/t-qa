class headerPage {
    elements = {
      connectWallet: () => cy.get(".walletPart .btn:nth-child(3)"),
      logo: () => cy.get(".logo"),
      metaMaskOption: () => cy.get(".walletList .item:nth-child(1)"),
      mintTab: () => cy.get(".header .nav span:nth-child(1)"),
      rewardsTab: () => cy.get(".header .nav span:nth-child(3)"),
      swapTab: () => cy.get(".header .nav span:nth-child(2)"),
    };
  
    connectMetamaskWallet = () => {
      // Click "Connect wallet" button
      this.elements.connectWallet().click();
  
      // Choose Metamask option
      this.elements.metaMaskOption().click();
    };
  }
  
  export default new headerPage();
  