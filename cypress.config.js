const { defineConfig } = require('cypress')
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth:  1920,
  video: false,
  retries: {
    runMode:2,     //Headless Mode
    openMode:0,    //UI Mode
  },
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
          });
          on("file:preprocessor", bundler);
      return config;
    },
    specPattern:'cypress/e2e/feature/test/*',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
