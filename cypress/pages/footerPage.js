class footerPage {
    elements = {
      communityListBox: () => cy.get(".footer .linkBox"),
      communityList: () => cy.get(".list:nth-child(2)"),
      emailInput: () => cy.get(".footer .inputBox"),
      popupMessage: () => cy.get(".ant-notification-notice-description:nth-child(3)"),
      resourcesList: () => cy.get(".list:nth-child(1)"),
      signUpBtn: () => cy.get(".footer button"),
    };
  }
  
  export default new footerPage();
  