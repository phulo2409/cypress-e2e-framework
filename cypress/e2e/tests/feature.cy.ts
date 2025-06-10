import ContactUs from "../../datatest/ContactUs";
import User from "../../datatest/User";
import { contactUsPage } from "../../pages/ContactUsPage"
import { homePage } from "../../pages/HomePage";
import { testCasesPage } from "../../pages/TestCasesPage";
import { viewCartPage } from "../../pages/ViewCartPage";
import messageValidation from "../../fixtures/messageValidation.json";

const contactUs = new ContactUs();
const user = new User();

describe("Header feature  test", () => {

    beforeEach(() => {
        homePage.load();
        homePage.getSlider().should("be.visible");
    });

    it("Contact Us Form", ()=> {
        homePage.openContactUsPage();
        contactUsPage.getContactTitle().should("have.text", "Contact Us");
        contactUsPage.submitContact(contactUs);
        contactUsPage.getSuccessMessage().should("have.text", messageValidation.submitContact);
        contactUsPage.clickOnHomeButton();
        homePage.getSlider().should("be.visible");
    });

    it("Verify Test Cases Page", ()=> {
        homePage.openTestCasesPage();
        testCasesPage.getPageTitle().should("have.text", "Test Cases");
    });

    it("Verify Subscription in home page", () => {
        homePage.scrollDown();
        homePage.getSubscriptionTitle().should("have.text", "Subscription");
        homePage.subscribe(user);
        homePage.getSubscriptionSuccessMessage().should("have.text", messageValidation.subcribeSuccess);
    });

    it("Verify Subscription in Cart page", () => {
        homePage.openCartPage();
        viewCartPage.scrollDown();
        viewCartPage.getSubscriptionTitle().should("have.text", "Subscription");
        viewCartPage.subscribe(user);
        viewCartPage.getSubscriptionSuccessMessage().should("have.text", messageValidation.subcribeSuccess);
    });

    it("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
        homePage.scrollDown();
        homePage.getSubscriptionTitle().should("have.text", "Subscription");
        homePage.clickOnScrollUpButton();
        cy.window().should((win => {
            expect(win.scrollY).to.be.closeTo(0, 100);
        }));
        homePage.getSlider().should("be.visible");

    });

    it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
        homePage.scrollDown();
        homePage.getSubscriptionTitle().should("have.text", "Subscription");
        homePage.scrollUp();
        homePage.getSlider().should("be.visible");
        cy.window().should((win => {
            expect(win.scrollY).to.be.closeTo(0, 100);
        }));
    });



});