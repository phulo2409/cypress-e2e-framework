import User from "../../datatest/User";
import { homePage } from "../../pages/HomePage";

const user = new User();
describe('API Test Dependency', () =>{
    beforeEach(function() {
        if (Cypress.env('skipRemainingTests') === true) {
            this.skip();
        }
        homePage.load();
    });

    it('API Test - Register', () => {
        cy.registerAccountAPI(user).then((response) =>{
            expect(JSON.parse(response.body).responseCode).to.equal(201);
            expect(JSON.parse(response.body).message).to.equal("User created!");
        });
    });

    it('API Test - Login', () => {
        cy.verifyLoginAPI(user).then((response) => {
            expect(JSON.parse(response.body).responseCode).to.equal(200);
            expect(JSON.parse(response.body).message).to.equal("User exists!");
        });
    });

    it('API Test - Get User', () => {
        cy.getUserInfoAPI(user).then((response) =>{
            expect(JSON.parse(response.body).responseCode).to.equal(200);
            expect(JSON.parse(response.body).user.name).to.equal(user.getName());
            expect(JSON.parse(response.body).user.email).to.equal(user.getEmail());
            expect(JSON.parse(response.body).user.title).to.equal(user.getTitle());
            expect(JSON.parse(response.body).user.birth_day).to.equal(user.getDay());
            expect(JSON.parse(response.body).user.birth_month).to.equal(user.getMonth());
            expect(JSON.parse(response.body).user.birth_year).to.equal(user.getYear());
            expect(JSON.parse(response.body).user.first_name).to.equal(user.getName());
            expect(JSON.parse(response.body).user.last_name).to.equal(user.getLastName());
            expect(JSON.parse(response.body).user.company).to.equal(user.getCompany());
            expect(JSON.parse(response.body).user.address1).to.equal(user.getAddress1());
            expect(JSON.parse(response.body).user.address2).to.equal(user.getAddress2());
            expect(JSON.parse(response.body).user.country).to.equal(user.getCountry());
            expect(JSON.parse(response.body).user.state).to.equal(user.getState());
            expect(JSON.parse(response.body).user.city).to.equal(user.getCity());
            expect(JSON.parse(response.body).user.zipcode).to.equal(user.getZipCode());
        });
    });

    it('API Test - Delete User', () => {
        cy.deleteUserAccountAPI(user).then((response) =>{
            expect(JSON.parse(response.body).responseCode).to.equal(200);
            expect(JSON.parse(response.body).message).to.equal("Account deleted!");
        });
        cy.getUserInfoAPI(user).then((response) =>{
            expect(JSON.parse(response.body).responseCode).to.equal(404);
        });
    });

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            Cypress.env('skipRemainingTests', true);
        }
    });
});