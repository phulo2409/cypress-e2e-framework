import User from "../../datatest/User";
import { homePage } from "../../pages/HomePage";
import { loginPage } from "../../pages/LoginPage";
import { productDetailPage } from "../../pages/ProductDetailPage";
import { productPage } from "../../pages/ProductsPage";
import { viewCartPage } from "../../pages/ViewCartPage";
import productData from "../../fixtures/productData.json";

const user = new User();

describe("Product Page test cases", () => {

    beforeEach(() => {
        homePage.load();
        homePage.getSlider().should("be.visible");
        homePage.openProductPage();
        productPage.getProductTitle().should("have.text", "All Products");
    });

    it("Verify All Products and product detail page", () =>{
        productPage.getProductList().should("be.visible");
        productPage.getProductDetailList().first().click();
        cy.url().should("contain", "/product_details");
        productDetailPage.getProductName().should("be.visible");
        productDetailPage.getCategory().should("be.visible");
        productDetailPage.getPrice().should("be.visible");
        productDetailPage.getAvailability().should("be.visible");
        productDetailPage.getCondition().should("be.visible");
        productDetailPage.getBrand().should("be.visible");
    })

    it("Search Product", () =>{
        productPage.searchProduct(productData.menTshirtProduct);
        productPage.getProductTitle().should("have.text", "Searched Products");
        productPage.getProductList().should("be.visible");
    });

    it("Add Products in Cart", () =>{
        productPage.getProductList().first().realHover();
        productPage.getAddToCartOverlayList().first().click({waitForAnimations: false});
        productPage.clickOnContinueShopping();
        productPage.getProductList().eq(1).realHover();
        productPage.getAddToCartOverlayList().eq(1).click({waitForAnimations: false});
        productPage.clickOnViewCart();
        viewCartPage.getTableRowName("Blue Top").within(() => {
            viewCartPage.getCartPrice().should("have.text", "Rs. 500");
            viewCartPage.getCartQuantity().should("have.text", "1");
            viewCartPage.getCartTotalPrice().should("have.text", "Rs. 500");
        });
        viewCartPage.getTableRowName(productData.menTshirtProduct).within(() => {
            viewCartPage.getCartPrice().should("have.text", "Rs. 400");
            viewCartPage.getCartQuantity().should("have.text", "1");
            viewCartPage.getCartTotalPrice().should("have.text", "Rs. 400");
        });
    });

    it("View & Cart Brand Products", () =>{
        productPage.getBrandTitle().should("be.visible");
        productPage.openBrandName(productData.madameBrand);
        productPage.getProductTitle().should("have.text", `Brand - ${productData.madameBrand} Products`);
        productPage.openBrandName(productData.poloBrand);
        productPage.getProductTitle().should("have.text", `Brand - ${productData.poloBrand} Products`);
    });

    it("Search Products and Verify Cart After Login", () =>{
        productPage.getProductTitle().should("have.text", "All Products");
        productPage.searchProduct(productData.menTshirtProduct);
        productPage.getProductTitle().should("have.text", "Searched Products");
        productPage.getProductList().should("be.visible");
        productPage.addProduct(productData.menTshirtProduct);
        productPage.openCartPage();
        viewCartPage.getCartDescription().should("contain", productData.menTshirtProduct);
        viewCartPage.openSignupLoginPage();
        cy.registerAccountAPI(user);
        loginPage.login(user);
        homePage.openCartPage();
        viewCartPage.getCartDescription().should("contain", productData.menTshirtProduct);
    });

    it("Add review on product", () =>{
        productPage.getProductTitle().should("have.text", "All Products");
        productPage.getProductDetailList().first().click();
        productDetailPage.writeReview(user, "Great product");
        productDetailPage.getSuccessReviewMessage().should("be.visible");
    });
});

describe("Home Page test cases", () => {
    beforeEach(() => {
        homePage.load();
        homePage.getSlider().should("be.visible");
    });

    it("Verify Product quantity in Cart", () =>{
        homePage.getProductDetailList().first().click();
        cy.url().should("contain", "/product_details");
        productDetailPage.enterQuantity("4");
        productDetailPage.addToCart();
        productDetailPage.clickOnViewCart();
        viewCartPage.getTableRowName("Blue Top").within(() => {
             viewCartPage.getCartQuantity().should("have.text", "4");
         });
     });

    it("Remove Products From Cart", () =>{
        homePage.addProduct(productData.menTshirtProduct);
        homePage.openCartPage();
        viewCartPage.deleteProduct();
        viewCartPage.getCartDescription().should("not.exist");
    });

    it("View Category Products", () =>{
        homePage.openCategory(productData.womenCategory, "Dress")
        productPage.getProductTitle().should("have.text", `${productData.womenCategory} - Dress Products`);
        productPage.openCategory(productData.menCategory, "Tshirts")
        productPage.getProductTitle().should("have.text", `${productData.menCategory} - Tshirts Products`);
    });

    it("Add to cart from Recommended items", () =>{
        homePage.scrollDown();
        homePage.getRecommendTitle().should("have.text", "recommended items");
        homePage.getProductRecommendList().first().click();
        homePage.clickOnViewCart();
        viewCartPage.getCartDescription().should("be.visible");
    });
});

