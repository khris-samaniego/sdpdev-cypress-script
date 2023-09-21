// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', () => {
//     cy.request({
//         method: 'POST',
//         url: 'https://sdpdev.vupico.io/IAMService/auth/login',
//         body: {
//             username: 'kimy.s',
//             password: 'rootadmin',
//         }
//     })
//     .then((Response) => {
//         window.localStorage.setItem('jwt', Response.body.token)
//     })
// })

// Cypress.Commands.add('loginBackend', (username, password => {
//     cy.request({
//       method: 'POST',
//       url: 'https://sdpdev.vupico.io/IAMService/auth/login',
//       body: {
//         username: username,
//         password: password,
//       },
//     }).then((response) => {
//       // Assuming your backend returns a token upon successful login
//       if (response.status === 200 && response.body.token) {
//         // Store the token in Cypress environment for future use (optional)
//         Cypress.env('authToken', response.body.token);
//       } else {
//         throw new Error('Login failed');
//       }
//     });
//   }))

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  