import { homePage } from "./pages/home_page"
import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()
const customUrl = Cypress.env('customUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Login Module', () => {

  beforeEach(function() {
    cy.visit(customUrl)

  })
    it('TCL001 User cant login with incorrect credentials', () => {
      loginPage.enterUsername('sdsd')                                                                 
      loginPage.enterPassword('dsdsd')
      loginPage.clickLoginButton()
      cy.get(loginPage.login_msg_error).should('be.visible')                                     //Validate error message is visible
    });
  
    it('TCL002 User cant login with empty fields', () => {
      loginPage.clickLoginButton()
      cy.get(loginPage.login_msg_error).should('be.visible')                                     //Validate error message is visible
    });

    it('TCL003 User can login as an admin', () => {
      loginPage.enterUsername(username)
      loginPage.enterPassword(password)
      loginPage.clickLoginButton()
      cy.contains('Welcome to the Sustainability Data Platform!').should('be.visible')           //Validate dashboard content is visible
    });

    it('TCL004 User can login as a supplier', () => {
      loginPage.enterUsername("KimySupplier")
      loginPage.enterPassword("Test123!")
      loginPage.clickLoginButton()
      cy.contains('Submission Progress').should('be.visible')                                    //Validate dashboard content is visible
    });
})
