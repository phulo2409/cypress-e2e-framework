import User from "../datatest/User";

export default class UserAPI{
    getUserAPI(user: User) {
        return cy.request({
            method: 'GET',
            url: `/api/getUserDetailByEmail?email=${user.getEmail()}`,
        });
    }

    registerAPI(user: User){
        return cy.request({
            method: 'POST',
            url: '/api/createAccount',
            form: true,
            body: {
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                title: user.getTitle(),
                birth_date: user.getDay(),
                birth_month: user.getMonth(),
                birth_year: user.getYear(),
                firstname: user.getName(),
                lastname: user.getLastName(),
                company: user.getCompany(),
                address1: user.getAddress1(),
                address2: user.getAddress2(),
                country: user.getCountry(),
                zipcode: user.getZipCode(),
                state: user.getState(),
                city: user.getCity(),
                mobile_number: user.getMobileNumber(),
            },
        });
    }

    verifyLoginAPI(user: User){
        return cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            body: {
                email: user.getEmail(),
                password: user.getPassword(),
            },
        });
    }

    deleteUserAccountAPI(user: User){
        return cy.request({
            method: 'DELETE',
            url: '/api/deleteAccount',
            form: true,
            body: {
                email: user.getEmail(),
                password: user.getPassword(),
            },
        });
    }
}

