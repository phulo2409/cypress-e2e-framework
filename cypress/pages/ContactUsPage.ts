import ContactUs from "../datatest/ContactUs"

class ContactUsPage {
    private get nameTextbox(): string{
        return "input[name='name']";
    }

    private get emailTextbox(): string{
        return "input[name='email']";
    }

    private get subjectTextbox(): string{
        return "input[name='subject']";
    }

    private get messageTextbox(): string{
        return "textarea[name='message']";
    }

    private get uploadFileButton(): string{
        return "input[name='upload_file']";
    }

    private get submitButton(): string{
        return "input[name='submit']";
    }

    private get contactTitle(): string{
        return "div.bg h2";
    }

    private get successMessage(){
        return "div#contact-page div.alert-success";
    }

    private get homeButton(){
        return "a.btn-success";
    }

    submitContact(contact: ContactUs): void{
        cy.get(this.nameTextbox).type(contact.name);
        cy.get(this.emailTextbox).type(contact.email);
        cy.get(this.subjectTextbox).type(contact.subject);
        cy.get(this.messageTextbox).type(contact.message);
        cy.get(this.uploadFileButton).attachFile(contact.attachment);
        cy.get(this.submitButton).click();
        cy.on("windows:confirm", () => true);
    }

    getContactTitle(){
        return cy.get(this.contactTitle);
    }

    getSuccessMessage(){
        return cy.get(this.successMessage);
    }

    clickOnHomeButton(){
        cy.get(this.homeButton).click();
    }


}

export const contactUsPage = new ContactUsPage();