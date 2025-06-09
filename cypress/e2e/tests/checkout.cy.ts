import User from "../../datatest/User";
import { homePage } from "../../pages/HomePage";
import { loginPage } from "../../pages/LoginPage";
import { viewCartPage } from "../../pages/ViewCartPage";


const user = new User();
describe("Check out test cases", () => {

    beforeEach(() => {
        homePage.load();
        homePage.getSlider().should("be.visible");
    });

    it("Place Order: Register while Checkout", () => {
        homePage.addProduct("Men Tshirt");
        homePage.openCartPage();
        viewCartPage.getCartDescription().should("be.visible");
        viewCartPage.clickOnCheckOut();
        viewCartPage.clickOnLoginLinkCart();
        loginPage.registerAccountAPI(user);
        loginPage.login(user);
        homePage.openCartPage();
        viewCartPage.clickOnCheckOut();
        viewCartPage.getDeliveryAddress().should("be.visible");
        viewCartPage.getBillingAddress().should("be.visible");
        viewCartPage.comment("Check out");
        viewCartPage.payment(user.getName(), "123456789", "254", "12", "2030");
        viewCartPage.getPaymentSuccessMessage().should("have.text","Congratulations! Your order has been confirmed!");
        viewCartPage.clickOnContinueOrder();
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", "Account Deleted!");
    });

    it("Place Order: Register before Checkout", () => {
        homePage.openSignupLoginPage();
        loginPage.registerAccountAPI(user);
        loginPage.login(user);
        homePage.addProduct("Men Tshirt");
        homePage.openCartPage();
        viewCartPage.getCartDescription().should("be.visible");
        viewCartPage.clickOnCheckOut();
        viewCartPage.getDeliveryAddress().should("be.visible");
        viewCartPage.getBillingAddress().should("be.visible");
        viewCartPage.comment("Check out");
        viewCartPage.payment(user.getName(), "123456789", "254", "12", "2030");
        viewCartPage.getPaymentSuccessMessage().should("have.text","Congratulations! Your order has been confirmed!");
        viewCartPage.clickOnContinueOrder();
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", "Account Deleted!");
    });

    it("Download Invoice after purchase order", () => {
        homePage.addProduct("Men Tshirt");
        homePage.openCartPage();
        viewCartPage.getCartDescription().should("be.visible");
        viewCartPage.clickOnCheckOut();
        viewCartPage.clickOnLoginLinkCart();
        loginPage.registerAccountAPI(user);
        loginPage.login(user);
        homePage.openCartPage();
        viewCartPage.clickOnCheckOut();
        viewCartPage.getDeliveryAddress().should("be.visible");
        viewCartPage.getBillingAddress().should("be.visible");
        viewCartPage.comment("Check out");
        viewCartPage.payment(user.getName(), "123456789", "254", "12", "2030");
        viewCartPage.getPaymentSuccessMessage().should("have.text","Congratulations! Your order has been confirmed!");
        viewCartPage.clickOnDownloadInvoice();
        cy.verifyDownload("invoice.txt");
        viewCartPage.clickOnContinueOrder();
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", "Account Deleted!");
    });

})