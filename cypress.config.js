const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    // implement node event listeners here
    },
    video: true, // Enables video recording
    screenshotOnRunFailure: true, // Take a screenshot when a test fails
    reporter: 'mochawesome',  // Specify Mochawesome as the reporter
    reporterOptions: {
      reportDir: 'cypress/reports',  // Custom folder for the report
      overwrite: false,
      html: true,
      json: true,
    }
  },
});