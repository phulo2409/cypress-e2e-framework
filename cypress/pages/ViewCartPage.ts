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
}

export const viewCartPage = new ViewCartPage();