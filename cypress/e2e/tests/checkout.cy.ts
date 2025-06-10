import User from "../../datatest/User";
import { homePage } from "../../pages/HomePage";
import { loginPage } from "../../pages/LoginPage";
import { viewCartPage } from "../../pages/ViewCartPage";
import productData from "../../fixtures/productData.json";
import checkOutData from "../../fixtures/checkOutData.json";
import messageValidation from "../../fixtures/messageValidation.json";


const user = new User();
describe("Check out test cases", () => {

    beforeEach(() => {
        homePage.load();
        homePage.getSlider().should("be.visible");
    });

    it("Place Order: Register while Checkout", () => {
        homePage.addProduct(productData.menTshirtProduct);
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
        viewCartPage.payment(user.getName(), checkOutData.cardNumber, checkOutData.cvcNumber, checkOutData.monthExpire, checkOutData.yearExpire);
        viewCartPage.getPaymentSuccessMessage().should("have.text", messageValidation.paymentSuccess);
        viewCartPage.clickOnContinueOrder();
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", messageValidation.accountDeleted);
    });

    it("Place Order: Register before Checkout", () => {
        homePage.openSignupLoginPage();
        loginPage.registerAccountAPI(user);
        loginPage.login(user);
        homePage.addProduct(productData.menTshirtProduct);
        homePage.openCartPage();
        viewCartPage.getCartDescription().should("be.visible");
        viewCartPage.clickOnCheckOut();
        viewCartPage.getDeliveryAddress().should("be.visible");
        viewCartPage.getBillingAddress().should("be.visible");
        viewCartPage.comment("Check out");
        viewCartPage.payment(user.getName(), checkOutData.cardNumber, checkOutData.cvcNumber, checkOutData.monthExpire, checkOutData.yearExpire);
        viewCartPage.getPaymentSuccessMessage().should("have.text", messageValidation.paymentSuccess);
        viewCartPage.clickOnContinueOrder();
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", messageValidation.accountDeleted);
    });

    it("Download Invoice after purchase order", () => {
        homePage.addProduct(productData.menTshirtProduct);
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
        viewCartPage.payment(user.getName(), checkOutData.cardNumber, checkOutData.cvcNumber, checkOutData.monthExpire, checkOutData.yearExpire);
        viewCartPage.getPaymentSuccessMessage().should("have.text", messageValidation.paymentSuccess);
        viewCartPage.clickOnDownloadInvoice();
        cy.verifyDownload("invoice.txt");
        viewCartPage.clickOnContinueOrder();
        homePage.deleteAccount();
        homePage.getAccountDeteleMessage().should("have.text", messageValidation.accountDeleted);
    });

})