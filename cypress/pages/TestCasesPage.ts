class TestCasesPage{
    private get title(){
        return "h2.title";
    }

    getPageTitle(){
        return cy.get(this.title);
    }
}

export const testCasesPage = new TestCasesPage();