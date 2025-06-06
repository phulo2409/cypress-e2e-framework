import User from "../datatest/User";
import { BasePage } from "./BasePage";

class SignUpPage extends BasePage{

    private get titleText(){
        return "div.login-form h2>b";
    }

    private get titleRadioButton(){
        return "input[type='radio']";
    }

    private get passwordTextbox(){
        return "#password";
    }

    private get firstNameTextbox(){
        return "#first_name";
    }

    private get lastNameTextbox(){
        return "#last_name";
    }

    private get companyTextbox(){
        return "#company";
    }

    private get address1Textbox(){
        return "#address1";
    }

    private get address2Textbox(){
        return "#address2";
    }

    private get stateTextbox(){
        return "#state";
    }

    private get cityTextbox(){
        return "#city";
    }

    private get zipCodeTextbox(){
        return "#zipcode";
    }

    private get mobileNumberTextbox(){
        return "#mobile_number";
    }

    private get newsletterCheckbox(){
        return "#newsletter";
    }

    private get offerCheckbox(){
        return "#optin";
    }

    private get daysSelect(){
        return "#days";
    }

    private get monthSelect(){
        return "#months";
    }

    private get yearSelect(){
        return "#years";
    }

    private get countrySelect(){
        return "#country";
    }

    private get createAccountButton(){
        return "button[data-qa='create-account']";
    }

    fillAccountInformation(user: User): void{
        cy.get(this.titleRadioButton).check(user.getTitle());
        cy.get(this.passwordTextbox).type(user.getPassword());
        cy.get(this.daysSelect).select(user.getDay());
        cy.get(this.monthSelect).select(user.getMonth());
        cy.get(this.yearSelect).select(user.getYear());
        cy.get(this.newsletterCheckbox).check();
        cy.get(this.offerCheckbox).check();
        cy.get(this.firstNameTextbox).type(user.getName());
        cy.get(this.lastNameTextbox).type(user.getLastName());
        cy.get(this.companyTextbox).type(user.getCompany());
        cy.get(this.address1Textbox).type(user.getAddress1());
        cy.get(this.address2Textbox).type(user.getAddress2());
        cy.get(this.countrySelect).select(user.getCountry());
        cy.get(this.stateTextbox).type(user.getState());
        cy.get(this.cityTextbox).type(user.getCity());
        cy.get(this.zipCodeTextbox).type(user.getZipCode());
        cy.get(this.mobileNumberTextbox).type(user.getMobileNumber());
        cy.get(this.createAccountButton).click();
    }

    getTitleSignUp(){
        return cy.get(this.titleText).first();
    }
}

export const signUpPage = new SignUpPage();