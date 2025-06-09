import User from "../datatest/User";
import { BasePage } from "./BasePage";

class ProductDetailPage extends BasePage{
    private get productNameDetail(){
        return "div.product-information h2";
    }

    private get productState(){
        return "div.product-information p";
    }

    private get price(){
        return "div.product-information span";
    }

    private get quantityTextbox(){
        return "#quantity";
    }

    private get addToCartButton(){
        return "button.cart";
    }

    private get nameTextbox(){
        return "#name";
    }

    private get emailTextbox(){
        return "#email";
    }

    private get reviewTextarea(){
        return "#review";
    }

    private get submitButton(){
        return "#button-review";
    }

    private get successReviewMessage(){
        return "#review-section span";
    }


    getCategory(){
        return cy.get(this.productState).contains("Category:");
    }

    getAvailability(){
        return cy.get(this.productState).contains("Availability:");
    }

    getCondition(){
        return cy.get(this.productState).contains("Condition:");
    }

    getBrand(){
        return cy.get(this.productState).contains("Brand:");
    }

    getPrice(){
        return cy.get(this.price).contains("Rs.");
    }

    getProductName(){
        return cy.get(this.productNameDetail);
    }

    enterQuantity(numberQuantity: string){
        cy.get(this.quantityTextbox).clear().type(numberQuantity);
    }

    addToCart(){
        cy.get(this.addToCartButton).click();
    }

    writeReview(user: User, review: string){
        cy.get(this.nameTextbox).type(user.getName());
        cy.get(this.emailTextbox).type(user.getEmail());
        cy.get(this.reviewTextarea).type(review);
        cy.get(this.submitButton).click();
    }

    getSuccessReviewMessage(){
        return cy.get(this.successReviewMessage);
    }
}

export const productDetailPage = new ProductDetailPage();