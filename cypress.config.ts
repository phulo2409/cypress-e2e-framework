import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 15000,
  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    URL: "https://automationexercise.com/",
  }
});
