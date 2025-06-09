import { BasePage } from "./BasePage";

class ProductsPage extends BasePage{
    private get productTitle(){
        return "div.container h2.title";
    }

    

    

    private get searchProductTextbox(){
        return "input#search_product";
    }

    private get searchButton(){
        return "button#submit_search";
    }

    

   


    

    getProductTitle(){
        return cy.get(this.productTitle);
    }

    searchProduct(productName: string){
        cy.get(this.searchProductTextbox).type(productName);
        cy.get(this.searchButton).click();
    }

    

    

    
}

export const productPage = new ProductsPage();