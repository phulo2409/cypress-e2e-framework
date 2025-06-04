import { registerPage } from "../../pages/RegisterPage";
import registerData from "../../fixtures/registerData.json";

describe('Test Automation', () =>{
    it('Register flow', () => {
        registerPage.openURL();
        registerPage.enterFirstName(registerData.firstName);
        registerPage.enterLastName(registerData.lastName);
        registerPage.enterEmail(registerData.email);
        registerPage.enterTelephone(registerData.telephone);
        registerPage.enterPassword(registerData.password);
        registerPage.selectCheckbox();
        registerPage.clickOnContinueButton();
    });
});