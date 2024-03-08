const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://pushing-it.vercel.app",
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },

  env: {

    usuario: "pushingit",
    password:"123456!",
    token: ''
  }
})