import User from "../../datatest/User";
import { homePage } from "../../pages/HomePage";
import { loginPage } from "../../pages/LoginPage";
import { signUpPage } from "../../pages/SignUpPage";
import messageValidation from "../../fixtures/messageValidation.json";

const user = new User();

describe('Account Testcases', () => {
    beforeEach(() => {
        homePage.load();
        homePage.getSlider().should("be.visible");
        homePage.openSignupLoginPage();
        loginPage.getLoginTitle().should("be.visible");
    });

    it('Register User', () => {
        loginPage.getSignUpTitle().should("have.text", "New User Signup!");
        loginPage.registerAccount(user);
        signUpPage.getTitleSignUp().should("have.text", "Enter Account Information");
        signUpPage.fillAccountInformation(user);
        signUpPage.getSuccessMessage().should("have.text", messageValidation.accountCreated);
        signUpPage.clickOnContinue();
        homePage.getUsername().should("have.text", user.getName());
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", messageValidation.accountDeleted);
        homePage.clickOnContinue();
    });

    it('Login User with correct email and password', () => {
        cy.registerAccountAPI(user);
        loginPage.login(user);
        homePage.getUsername().should("have.text", user.getName());
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", messageValidation.accountDeleted);
    })

    it('Login User with incorrect email and password', () => {
        loginPage.login("wrongEmail@gmail.com", "wrongPassword");
        loginPage.getLoginValidationMessage().should("have.text", messageValidation.loginInvalid)
    })

    it('Logout User', () => {
        cy.registerAccountAPI(user);
        loginPage.login(user);
        homePage.getUsername().should("have.text", user.getName());
        homePage.logout();
        cy.url().should("contain", "/login");
    })

    it('Register User with existing email', () => {
        cy.registerAccountAPI(user);
        loginPage.registerAccount(user);
        loginPage.getSignUpValidationMessage().should("have.text", messageValidation.emailExist);
    })
});