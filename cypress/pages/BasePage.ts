class BasePage{
    private get accountDeleteMessage(){
        return "h2[data-qa='account-deleted']";
    }

    private get successMessage(){
        return "h2[data-qa='account-created']";
    }

    private get continueButton(){
        return "a[data-qa='continue-button']";
    }

    getSuccessMessage(){
        return cy.get(this.successMessage);
    }

    getAccountDeteleMessage(){
        return cy.get(this.accountDeleteMessage);
    }

    clickOnContinue(): void{
        cy.get(this.continueButton).click();
    }
}

export {BasePage};