import { homePage } from "./pages/home_page"
import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()
const customUrl = Cypress.env('customUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('MDG Module', () => {

  beforeEach(function() {
    
      cy.visit(customUrl),
      loginPage.enterUsername(username),
      loginPage.enterPassword(password),
      loginPage.clickLoginButton()
  })
    it('TCMC001 User can click MDG from the left panel', () => {
      cy.contains('MDG').click()
      cy.contains('Change Requests').should('be.visible')       //MDG tabs should be visible
      cy.contains('Products').should('be.visible')              //MDG tabs should be visible
      cy.contains('Sustainability BOM').should('be.visible')    //MDG tabs should be visible
      cy.contains('Elements').should('be.visible')              //MDG tabs should be visible
      cy.get('#mdg-search-request').should('be.visible')        //search feature should be visible
      cy.contains('Draft').should('be.visible')                 //Request status should be visible
      cy.contains('Submitted').should('be.visible')             //Request status should be visible
      cy.contains('Approved').should('be.visible')              //Request status should be visible
      cy.contains('Posted').should('be.visible')                //Request status should be visible
      cy.get('#mdg-search-request').should('be.visible')        //Search bar should be visible
    })
    it('TCMC002 User can search requests through a valid keyword', () => {
      cy.contains('MDG').click()
      cy.get('#mdg-search-request')
        .click()
        .type('modify')
    })
    it('TCMC003 User can click any request card', () => {
      cy.contains('MDG').click()
      cy.get('.mantine-11kyg8y > :nth-child(4) > :nth-child(2)').click()
      cy.get('[style="flex: 1 1 0%;"] > .mantine-6bt1d9').should('be.visible')
      cy.get('.mantine-rlwcn6').should('be.visible')
      cy.get('.mantine-1w0l2tw').should('be.visible')
      cy.get('[id="mdg-request-close"]').should('be.visible')
    })
    it('TCMC004 User can navigate through the expanded request card', () => {
      
      // Click the card hyperlink
      cy.contains('MDG').click()
      cy.get('.mantine-11kyg8y > :nth-child(4) > :nth-child(2)').click()
      cy.get('.mantine-1w0l2tw').click()
      cy.url().should('include', '/mdg/Elements')
      cy.go('back')
      
      // Close the card
      cy.get('.mantine-11kyg8y > :nth-child(4) > :nth-child(2)').click()
      cy.get('#mdg-request-close').click()
      cy.contains('Change Requests').should('be.visible')       //MDG tabs should be visible
      cy.contains('Products').should('be.visible')              //MDG tabs should be visible
      cy.contains('Sustainability BOM').should('be.visible')    //MDG tabs should be visible
      cy.contains('Elements').should('be.visible')              //MDG tabs should be visible
      cy.get('#mdg-search-request').should('be.visible')        //search feature should be visible
      cy.contains('Draft').should('be.visible')                 //Request status should be visible
      cy.contains('Submitted').should('be.visible')             //Request status should be visible
      cy.contains('Approved').should('be.visible')              //Request status should be visible
      cy.contains('Posted').should('be.visible')                //Request status should be visible
      cy.get('#mdg-search-request').should('be.visible')        //Search bar should be visible

      // Go to Request Details
      cy.contains('MDG').click()
      cy.get('.mantine-11kyg8y > :nth-child(4) > :nth-child(2)').click()
      cy.contains('Request Details').click()
      cy.get('.mantine-93z23z').should('be.visible')
      cy.get('#mdg-request-priority-label').should('be.visible')
      cy.get('#mdg-request-priority-label').should('be.visible')
      cy.get('#mdg-request-due-time-label').should('be.visible')
      cy.get('#mdg-request-note-label').should('be.visible')
      cy.get('#mdg-request-approver-label').should('be.visible')
      cy.get('#mdg-request-delete-link').should('be.visible')
      cy.get('#mdg-request-close').click()
    })

    it('TCMC005 User can click the Products tab', () => {
      cy.contains('MDG').click()
      cy.contains('Products').click()
      cy.get('#mdg-search-product').should('be.visible')
      cy.contains('Filters').should('be.visible')
    })
    it('TCMC006 User can navigate through the Products tab', () => {
      // Search
      cy.contains('MDG').click()
      cy.contains('Products').click()
      cy.get('#mdg-search-product')
        .type('plastic')
        .clear()

      // Filter
      cy.contains('Filters').click()
      cy.get('[placeholder="Product Type"]').click()
      cy.contains('Component').click()
      // cy.get('[placeholder="Product Type"][data-mantine-stop-propagation="true"][aria-activedescendant="mantine-vwbr0zrgd-0"]').click()
      cy.get('[placeholder="Product Group"]').click()

    })
    it('TCMC007 User can click the Sustainability BOM tab', () => {
      cy.contains('MDG').click()
      cy.contains('Sustainability BOM').click()
      cy.get('#mdg-search-bom').should('be.visible')
    })
    it('TCMC008 User can ', () => {
      cy.contains('MDG').click()
      cy.contains('Sustainability BOM').click()

    })

    
  })

