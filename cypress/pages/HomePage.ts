import User from "../datatest/User";
import { BasePage } from "./BasePage";

class HomePage extends BasePage{
    private get slider() {
        return "div[id='slider-carousel']";
    }

    private get logoutButton(){
        return "a[href='/logout']";
    }

    private get contactUSButton(){
        return "a[href='/contact_us']";
    }

    private get username(){
        return "i.fa-user~b";
    }

    private get deleteAccountButton(){
        return "a[href='/delete_account']";
    }

    private get testCasesButton(){
        return "header a[href='/test_cases']";
    }

    private get productButton(){
        return "a[href='/products']";
    }

    private get productRecommendList(){
        return ".item.active .productinfo a";
    }

    private get recommandTitle(){
        return ".recommended_items h2";
    }

    getSlider(){
        return cy.get(this.slider);
    }

    getUsername(){
        return cy.get(this.username);
    }

    openContactUsPage(){
        cy.get(this.contactUSButton).click();
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

    openTestCasesPage(): void{
        cy.get(this.testCasesButton).click();
    }

    openProductPage(){
        cy.get(this.productButton).click();
    }

    getProductRecommendList(){
        return cy.get(this.productRecommendList);
    }

    getRecommendTitle(){
        return cy.get(this.recommandTitle).first();
    }
}

export const homePage = new HomePage();