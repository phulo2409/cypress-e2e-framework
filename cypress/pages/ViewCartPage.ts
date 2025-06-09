import { BasePage } from "./BasePage";

class ViewCartPage extends BasePage{
    private get cartDescription(){
        return ".cart_description a";
    }

    private get cartPrice(){
        return ".cart_price p";
    }

    private get cartQuantity(){
        return ".cart_quantity>button";
    }

    private get cartTotalPrice(){
        return ".cart_total_price";
    }

    private get deleteProductButton(){
        return ".cart_quantity_delete";
    }

    private get checkOutButton(){
        return "a.check_out";
    }

    private get registerLoginLink(){
        return "#checkoutModal a[href='/login']";
    }

    private get deliveryTitle(){
        return "#address_delivery h3"
    }

    private get billingTitle(){
        return "#address_invoice h3"
    }

    private get commentTextarea(){
        return "textarea[name='message']";
    }

    private get placeOrderButton(){
        return "a[href='/payment']";
    }

    private get nameOnCartTextbox(){
        return "input[name='name_on_card']";
    }

    private get cardNumberTextbox(){
        return "input[name='card_number']";
    }

    private get cvcTextbox(){
        return "input[name='cvc']";
    }

    private get expirationTextbox(){
        return "input[name='expiry_month']";
    }

    private get yearTextbox(){
        return "input[name='expiry_year']";
    }

    private get submitButton(){
        return "#submit";
    }

    private get paymentSuccessMessage(){
        return "section div.container p"
    }

    private get downloadInvoiceButton(){
        return "a[href*='/download_invoice']";
    }

    private get continueButtonOrder(){
        return "a[data-qa='continue-button']";
    }

    private get orderPlaceTitle(){
        return "div.container h2.title";
    }

    getCartDescription(){
        return cy.get(this.cartDescription);
    }

    getCartPrice(){
        return cy.get(this.cartPrice);
    }

    getCartQuantity(){
        return cy.get(this.cartQuantity);
    }

    getCartTotalPrice(){
        return cy.get(this.cartTotalPrice);
    }

    deleteProduct(){
        cy.get(this.deleteProductButton).click();
    }

    getTableRowName(productName: string){
        return cy.get(this.cartDescription).contains(productName).parents("tr");
    }

    clickOnCheckOut(){
        cy.get(this.checkOutButton).click();
    }

    clickOnLoginLinkCart(){
        cy.get(this.registerLoginLink).click();
    }

    getDeliveryAddress(){
        return cy.get(this.deliveryTitle);
    }

    getBillingAddress(){
        return cy.get(this.billingTitle);
    }

    comment(comment: string){
        cy.get(this.commentTextarea).clear().type(comment);
        cy.get(this.placeOrderButton).click();
    }

    payment(name: string, cardNumber: string, cvc: string, expire: string, year: string){
        cy.get(this.nameOnCartTextbox).type(name);
        cy.get(this.cardNumberTextbox).type(cardNumber);
        cy.get(this.cvcTextbox).type(cvc);
        cy.get(this.expirationTextbox).type(expire);
        cy.get(this.yearTextbox).type(year);
        cy.get(this.submitButton).click();
    }

    getPaymentSuccessMessage(){
        return cy.get(this.paymentSuccessMessage);
    }

    clickOnDownloadInvoice(){
        cy.get(this.downloadInvoiceButton).click();
    }

    clickOnContinueOrder(): void {
        cy.get(this.continueButtonOrder).click();
    }

    getOrderPlaceTitle(){
        return cy.get(this.orderPlaceTitle);
    }


}

export const viewCartPage = new ViewCartPage();