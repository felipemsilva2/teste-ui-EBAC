const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://lojaebac.ebaconline.art.br",
    "projectId": "aaii8w",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
