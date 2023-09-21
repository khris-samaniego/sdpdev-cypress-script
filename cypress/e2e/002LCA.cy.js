import { homePage } from "./pages/home_page"
import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()
const customUrl = Cypress.env('customUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('LCA Module', () => {

  beforeEach(function() {
    
      cy.visit(customUrl),
      loginPage.enterUsername(username),
      loginPage.enterPassword(password),
      loginPage.clickLoginButton()
  })
    it('TCLC001 User can click LCA from the left panel', () => {
      cy.contains('LCA').click(),
      cy.contains('Dashboard').should('be.visible'),
      cy.contains('Projects').should('be.visible'),
      cy.contains('Value Chain').should('be.visible')
    })
    it('TCLC002 User can see the dashboard contents', () => {
      cy.contains('LCA').click(),
      cy.contains('Existing Products').should('be.visible')
      cy.contains('MTCO2-Eq').should('be.visible')
      cy.contains('Simulated Products').should('be.visible')
      cy.contains('Taxable Products').should('be.visible')

      cy.contains('Top 5 Products by Environment Impact').should('be.visible')
      cy.contains('Active Projects').should('be.visible')
      cy.contains('+ Create New Project').should('be.visible')
      cy.contains('Impacts by Life Stage').should('be.visible')
      cy.contains('View Impact').should('be.visible')
    })
    it('TCLC003 User can see the top 5 products by impact category', () => {
      cy.contains('LCA').click(),
      cy.scrollTo('top')
      cy.get('#ProductYear').should('be.visible')
      cy.get('[style="height: 300px;"] > [style="height: 300px; padding-bottom: 40px;"] > .mantine-4admmy > .rc-slider > .rc-slider-step').should('be.visible')
    })
    it('TCLC004 User can see the list of active Projects', () => {
      cy.contains('LCA').click(),
      cy.scrollTo('top')
      cy.contains('Start Date').should('be.visible').should('be.visible')
      cy.contains('Product').should('be.visible').should('be.visible')
      cy.contains('Simulations').should('be.visible').should('be.visible')
      cy.get('tbody > tr > :nth-child(1)').should('be.visible')
      cy.get('tbody > tr > :nth-child(2)').should('be.visible')
      cy.get('tbody > tr > :nth-child(3)').should('be.visible')
      cy.get('tbody > tr > :nth-child(4)').should('be.visible')
      cy.get('tbody > tr > :nth-child(5)').should('be.visible')
    })
    it('TCLC005 User can click an active Project', () => {
      cy.contains('LCA').click(),
      cy.scrollTo('top')
      cy.get(':nth-child(1) > :nth-child(1) > a > .mantine-Text-root').click()
      cy.contains('Project Details').should('be.visible')
      cy.contains('Simulation Type').should('be.visible')
      cy.contains('LCA Assessment Type').should('be.visible')
      cy.contains('Started on').should('be.visible')
      cy.contains('Project Owner').should('be.visible')
      cy.contains('Project Members').should('be.visible')
      cy.contains('Add').should('be.visible')
      cy.get('.mantine-eoj356 > .mantine-1wpc1xj > .mantine-1ryt1ht').should('have.text', 'Compare Simulation')
      cy.get('.mantine-lk5lqt > .mantine-1wpc1xj').should('have.text', 'Create Simulation')
      cy.go('back')
    })
    // it('TCLC00X User can create a Project from the dashboard', () => { //To be continued
    //   cy.contains('LCA').click(),
    //   cy.scrollTo('top')
    //   cy.contains('Create New Project').click()
    //   cy.get('[value="New Project"]')
    //     .clear()
    //     .type('Test Project')
    //     .trigger('keydown', { keyCode: 9, which: 9 })
    //   // cy.contains('Define Project Details') can't find the define project details input field
    //   // cy.get('mantine-InputWrapper-label mantine-TextInput-label mantine-1ar991')
    //   //   .next('input')
    //   //   .click()
    //   //   .type('ddfdfdf')
    //   cy.get('#simulationType')
    //     .click()
    //   cy.get('[aria-activedescendant="simulationType-2"]').click()
    // })


  })

