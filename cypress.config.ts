import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
  },
  env:{
    URL: "https://automationexercise.com/",
    allure: true,
    allureAttrachRequests: true,
    allureAddVideoOnPass: true,
  },
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 15000,
  video: true,
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress E2E Framework',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
