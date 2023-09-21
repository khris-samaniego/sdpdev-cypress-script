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
      cy.get(loginPage.login_msg_error).should('be.visible')
    });
  
    it('TCL002 User cant login with empty fields', () => {
      loginPage.clickLoginButton()
      cy.get(loginPage.login_msg_error).should('be.visible')
    });

    it('TCL003 User can login as a sustainability user', () => {
      loginPage.enterUsername(username)
      loginPage.enterPassword(password)
      loginPage.clickLoginButton()
      cy.contains('Welcome to the Sustainability Data Platform!').should('be.visible')
    });
    // it('TCL004 User can login as an approver', () => {
    //   loginPage.enterUsername('KC_Approver')
    //   loginPage.enterPassword('Test123!')
    //   loginPage.clickLoginButton()
    //   //continue capturing homepage elements from home_page
    // })
  
    // it('TCL005 User can login as a supplier', () => {
    //   loginPage.enterUsername('KimySupplier')
    //   loginPage.enterPassword('Test123!')
    //   loginPage.clickLoginButton()
    // })
})
