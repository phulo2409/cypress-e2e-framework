class teshp {
    private search_textbox: string = '.form-control.input-lg';
    private search_button: string = '.btn.btn-default.btn-lg';
    private product_img: string = 'img[title="MacBook"]';
    private addToCart_button: string = 'Add to Cart';
    private success_Messages: string = '.alert-success';

    searchProduct(productName: string){
        cy.get(this.search_textbox).type(productName)
        cy.get(this.search_button).click();
    }

    addToCart(){
        cy.contains(this.addToCart_button).first().click();
    }

    verifySuccessMessage(){
        return cy.get(this.success_Messages)
    }
}
