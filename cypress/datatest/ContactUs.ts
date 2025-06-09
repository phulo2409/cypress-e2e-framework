import { faker } from "@faker-js/faker";

export default class ContactUs{
    private _name: string;
    private _email: string;
    private _subject: string;
    private _message: string;
    private _attachment: string;

    constructor(){
        this._name = faker.person.firstName();
        this._email = faker.internet.email();
        this._subject = "Asking for some information";
        this._message = "I would like to ask for some information";
        this._attachment = "example.json"
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get subject() {
        return this._subject;
    }

    get message() {
        return this._message;
    }

    get attachment() {
        return this._attachment;
    }
}