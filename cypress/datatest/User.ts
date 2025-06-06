import { faker } from '@faker-js/faker';

export default class User {
    private name: string;
    private email: string;
    private title: string;
    private password: string;
    private day: string;
    private month: string;
    private year: string;
    private lastName: string;
    private company: string;
    private address1: string;
    private address2: string;
    private country: string;
    private state: string;
    private city: string;
    private zipcode: string;
    private mobileNumber: string;

    constructor() {
        this.name = faker.person.firstName();
        this.email = faker.internet.email();
        this.title = "Mr";
        this.password = "Test1234";
        this.day = "1";
        this.month = "January";
        this.year = "1980";
        this.lastName = faker.person.lastName();
        this.company = faker.company.name();
        this.address1 = faker.address.streetAddress();
        this.address2 = faker.address.streetAddress();
        this.country = "Canada"
        this.state = faker.address.state();
        this.city = faker.address.city();
        this.zipcode = "700000";
        this.mobileNumber = "0123456789";
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getTitle(){
        return this.title;
    }

    getPassword(){
        return this.password;
    }

    getDay(){
        return this.day;
    }

    getMonth(){
        return this.month;
    }

    getYear(){
        return this.year;
    }

    getLastName(){
        return this.lastName;
    }

    getCompany(){
        return this.company;
    }

    getAddress1(){
        return this.address1;
    }

    getAddress2(){
        return this.address2;
    }

    getCountry(){
        return this.country;
    }

    getState(){
        return this.state;
    }

    getCity(){
        return this.city;
    }

    getZipCode(){
        return this.zipcode;
    }

    getMobileNumber(){
        return this.mobileNumber;
    }


}