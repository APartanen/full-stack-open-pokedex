const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8080',
    env: {
      BACKEND: 'http://localhost:3001/api',
    },
  },
})
