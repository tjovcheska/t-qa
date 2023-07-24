const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  userAgent: "synpress",
  chromeWebSecurity: true,
  video: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    specPattern: "cypress/e2e/**/*spec.{js,jsx,ts,tsx}",
    testIsolation: true,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/mochawesome-report",
    },
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
    },
    baseUrl: "https://test.tapio.finance",
    supportFile: "cypress/support/e2e.js",
  },
});
