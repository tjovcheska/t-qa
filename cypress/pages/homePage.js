class homePage {
	elements = {
    mintTapETHBtn: () => cy.get(".action button:nth-child(1)"),
    homePage: () => cy.get(".homePage"),
	};
}

export default new homePage();
