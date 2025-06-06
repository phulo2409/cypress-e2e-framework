import { BasePage } from "./BasePage";

class HomePage extends BasePage{
    private get slider() {
        return "div[id='slider-carousel']";
    }

    private get signupLoginButton(){
        return "a[href='/login']";
    }

    private get logoutButton(){
        return "a[href='/logout']";
    }

    private get username(){
        return "i.fa-user~b";
    }

    private get deleteAccountButton(){
        return "a[href='/delete_account']";
    }

    

    getSlider(){
        return cy.get(this.slider);
    }

    getUsername(){
        return cy.get(this.username);
    }

    openSignupLoginPage(): void{
        cy.get(this.signupLoginButton).click();
    }

    deleteAccount(): void{
        cy.get(this.deleteAccountButton).click();
    }

    load(){
        cy.visit(Cypress.env('URL'));
    }

    logout(){
        cy.get(this.logoutButton).click();
    }
}

export const homePage = new HomePage();