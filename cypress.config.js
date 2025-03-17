const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5000',
    // env: {
    //   BACKEND: 'http://localhost:5000',
    // },
  },
})
