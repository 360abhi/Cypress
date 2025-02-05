const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    // implement node event listeners here
      on('task',{

        // Function to write logs
        writeLog(message){
          const logFile = 'cypress/logs/log_file.txt'
          fs.appendFileSync(logFile,message + '\n');
          return null
        },

        // Function to read json data
        readJsonData(){
          const data = fs.readFileSync('cypress/fixtures/testdata.json','utf-8');
          return JSON.parse(data)
        }, 

        // Function to Store data in Json
        saveJsonData(data){
          fs.writeFileSync('cypress/logs/scraped.json',JSON.stringify(data,null,2));
          return null
        }
      });
    },
    video: false, // Enables video recording
    screenshotOnRunFailure: false, // Take a screenshot when a test fails
    reporter: 'mochawesome',  // Specify Mochawesome as the reporter
    reporterOptions: {
      reportDir: 'cypress/reports',  // Custom folder for the report
      overwrite: true,
      html: true,
      json: true,
    }
  },
});