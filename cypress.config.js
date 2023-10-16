const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 15000,
    viewportWidth: 1366,
    viewportHeight: 768, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // "env": {
    //   "customUrl": "https://dev-sdp.vupico.io/",
    //   "username": "sdp-admin",
    //   "password": "rootadmin"

    // }

    "env": {
        "customUrl": "https://sdpdev.vupico.io/",
        "username": "sdp-admin",
        "password": "rootadmin"
  
      }

    
    
  },
});

// https://dev-sdp.vupico.io/
// https://sdpdev.vupico.io/