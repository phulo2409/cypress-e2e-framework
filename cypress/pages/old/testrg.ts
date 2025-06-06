class testrg{
    private firstNameTextbox: string = '#input-firstname';
    private lastNameTextbox: string = '#input-lastname';
    private emailTextbox: string = '#input-email';
    private telephoneTextbox: string = '#input-telephone';
    private passwordTextbox: string = '#input-password';
    private passwordConfirmTextbox: string = '#input-confirm';
    private policyCheckbox: string = 'input[type="checkbox"]';
    private continueButton: string = '.btn.btn-primary';
    
    openURL(){
        cy.visit(Cypress.env('URL'));
    }

    enterFirstName(firstName: string): void{
        cy.get(this.firstNameTextbox).type(firstName);
    }

    enterLastName(lastName: string): void{
        cy.get(this.lastNameTextbox).type(lastName);
    }

    enterEmail(email: string): void{
        cy.get(this.emailTextbox).type(email);
    }

    enterTelephone(phoneNumber: string): void{
        cy.get(this.telephoneTextbox).type(phoneNumber);
    }

    enterPassword(password: string): void{
        cy.get(this.passwordTextbox).type(password);
        cy.get(this.passwordConfirmTextbox).type(password);
    }

    selectCheckbox(): void{
        cy.get(this.policyCheckbox).check();
    }

    clickOnContinueButton(): void{
        cy.get(this.continueButton).click();
    }    
}
