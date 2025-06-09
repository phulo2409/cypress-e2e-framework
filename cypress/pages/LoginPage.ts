import UserAPI from "../api/UserAPI";
import User from "../datatest/User";
import { BasePage } from "./BasePage";

class LoginPage extends BasePage{
    private get signupTitle(){
        return "div.signup-form>h2";
    }

    private get loginTitle(){
        return "div.login-form>h2";
    }

    private get nameSignupTextbox(){
        return "input[name='name']";
    }

    private get emailSignupTextbox(){
        return "form[action='/signup'] input[name='email']";
    }

    private get signupButton(){
        return "form[action='/signup'] button";
    }

    private get emailLoginTextbox(){
        return "form[action='/login'] input[name='email']";
    }

    private get passwordLoginTextbox(){
        return "input[name='password']";
    }

    private get loginButton(){
        return "form[action='/login'] button";
    }

    private get loginValidationMessage(){
        return "form[action='/login']>p";
    }

    private get signupValidationMessage(){
        return "form[action='/signup']>p";
    }

    getSignUpTitle(){
        return cy.get(this.signupTitle);
    }

    getLoginTitle(){
        return cy.get(this.loginTitle);
    }

    registerAccount(user: User): void{
        cy.get(this.nameSignupTextbox).type(user.getName());
        cy.get(this.emailSignupTextbox).type(user.getEmail());
        cy.get(this.signupButton).click();
    }

    registerAccountAPI(user: User){
        return new UserAPI().registerAPI(user);
    }

    loginAPI(user: User){
        return new UserAPI().loginAPI(user);
    }

    getUserInfoAPI(user: User){
        return new UserAPI().getUserAPI(user);
    }

    // login(user: User || email: string, password: string){
    //     cy.get(this.emailLoginTextbox).type(user.getEmail());
    //     cy.get(this.passwordLoginTextbox).type(user.getpassword());
    //     cy.get(this.loginButton).click();
    // }

    login(user: User | string, password?: string) {
        if (typeof user === 'string' && password) {
            cy.get(this.emailLoginTextbox).type(user);
            cy.get(this.passwordLoginTextbox).type(password);
        } 
        else if (typeof user === 'object' && user.getEmail && user.getPassword) {
            cy.get(this.emailLoginTextbox).type(user.getEmail());
            cy.get(this.passwordLoginTextbox).type(user.getPassword());
        }     
        cy.get(this.loginButton).click();
    }

    getLoginValidationMessage(){
        return cy.get(this.loginValidationMessage);
    }

    getSignUpValidationMessage(){
        return cy.get(this.signupValidationMessage);
    }


}

export const loginPage = new LoginPage();