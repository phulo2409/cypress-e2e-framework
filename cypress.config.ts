import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 15000,
  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },
  },
  env:{
    URL: "https://automationexercise.com/",
  }
});
