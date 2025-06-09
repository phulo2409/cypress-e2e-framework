import User from "../datatest/User";

class BasePage{
    private get accountDeleteMessage(){
        return "h2[data-qa='account-deleted']";
    }

    private get successMessage(){
        return "h2[data-qa='account-created']";
    }

    private get continueButton(){
        return "a[data-qa='continue-button']";
    }

    private get subscriptionTitle(){
        return "footer h2";
    }

    private get subscribeTextbox(){
        return "#susbscribe_email";
    }

    private get subscribeButton(){
        return "#subscribe";
    }

    private get subscriptionSuccessMessage(){
        return "footer .alert-success";
    }

    private get scrollUpButton(){
        return "#scrollUp";
    }

    private get productDetailList(){
        return "a[href*='/product_details']"
    }
    
    private get viewCartButton(){
        return "#cartModal a[href='/view_cart']";
    }

    private get addToCartOverlayList(){
        return "div.product-overlay a.add-to-cart";
    }

    private get continueShoppingButton(){
        return "#cartModal button.btn-success";
    }

    private get productList(){
        return "div.product-image-wrapper";
    }

    private get womenCategory(){
        return "#accordian a";
    }

    private get brandTitle(){
        return "div.brands_products h2";
    }

    private get brandName(){
        return "div.brands-name a";
    }

    private get productName(){
        return ".productinfo p"
    }

    private get cartButton(){
        return "header a[href='/view_cart']";
    }

    private get signupLoginButton(){
        return "header a[href='/login']";
    }

    clickOnViewCart(){
        cy.get(this.viewCartButton).click();
    }

    getSuccessMessage(){
        return cy.get(this.successMessage);
    }

    getAccountDeteleMessage(){
        return cy.get(this.accountDeleteMessage);
    }

    clickOnContinue(): void{
        cy.get(this.continueButton).click();
    }

    scrollDown(){
        cy.scrollTo("bottom");
    }

    scrollUp(){
        cy.scrollTo("top");
    }

    getSubscriptionTitle(){
        return cy.get(this.subscriptionTitle);
    }

    subscribe(user: User){
        cy.get(this.subscribeTextbox).type(user.getEmail());
        cy.get(this.subscribeButton).click();
    }

    getSubscriptionSuccessMessage(){
        return cy.get(this.subscriptionSuccessMessage);
    }

    clickOnScrollUpButton(){
        cy.get(this.scrollUpButton).click();
    }

    getProductDetailList(){
        return cy.get(this.productDetailList);
    }

    getAddToCartOverlayList(){
        return cy.get(this.addToCartOverlayList);
    }

    clickOnContinueShopping(){
        cy.get(this.continueShoppingButton).click();
    }

    getProductList(){
        return cy.get(this.productList);
    }

    openCategory(category: string, detail?: string){
        cy.get(this.womenCategory).contains(category).click();
        if (detail){
            cy.get(this.womenCategory).contains(category).parents("div.panel-default").find('a').contains(detail).click();
        }
    }

    getBrandTitle(){
        return cy.get(this.brandTitle);
    }

    openBrandName(name: string){
        cy.get(this.brandName).contains(name).click();
    }

    addProduct(name: string, viewCart?: boolean){
        cy.get(this.productName).contains(name).next("a").click({force: true}).then(() => {
            if(viewCart){
                cy.get(this.viewCartButton).click();
            } else {
                cy.get(this.continueShoppingButton).click();
            }
        });
    }

    openCartPage(){
        cy.get(this.cartButton).click();
    }

    openSignupLoginPage(): void{
        cy.get(this.signupLoginButton).click();
    }
}

export {BasePage};