import User from "../../datatest/User";
import { homePage } from "../../pages/HomePage";
import { loginPage } from "../../pages/LoginPage";
import { signUpPage } from "../../pages/SignUpPage";

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
        signUpPage.getSuccessMessage().should("have.text", "Account Created!");
        signUpPage.clickOnContinue();
        homePage.getUsername().should("have.text", user.getName());
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", "Account Deleted!");
        homePage.clickOnContinue();
    });

    it('Login User with correct email and password', () => {
        loginPage.registerAccountAPI(user);
        loginPage.login(user);
        homePage.getUsername().should("have.text", user.getName());
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", "Account Deleted!");
    })

    it('Login User with incorrect email and password', () => {
        loginPage.login("wrongEmail@gmail.com", "wrongPassword");
        loginPage.getLoginValidationMessage().should("have.text", "Your email or password is incorrect!")
    })

    it('Logout User', () => {
        loginPage.registerAccountAPI(user);
        loginPage.login(user);
        homePage.getUsername().should("have.text", user.getName());
        homePage.logout();
        cy.url().should("contain", "/login");
    })

    it('Register User with existing email', () => {
        loginPage.registerAccountAPI(user);
        loginPage.registerAccount(user);
        loginPage.getSignUpValidationMessage().should("have.text", "Email Address already exist!");
    })
});