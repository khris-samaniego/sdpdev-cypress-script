import { homePage } from "./pages/home_page"
import { LoginPage } from "./pages/login_page"
import { lcaPage } from "./pages/lca_page"

const lca = new lcaPage()
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
    // it('TCLC001 User can click LCA from the left panel', () => {
    //   cy.contains('LCA').click()                                                                 
    //   cy.contains('Dashboard').should('be.visible')                       //Validate LCA page contents
    //   cy.contains('Projects').should('be.visible')                        //Validate LCA page contents
    //   cy.contains('Value Chain').should('be.visible')                     //Validate LCA page contents
    // })
    // it('TCLC002 User can see the dashboard contents', () => {
    //   cy.contains('LCA').click()
    //   cy.contains('Existing Products').should('be.visible')                  //Validate LCA summary contents
    //   cy.contains('KgCO2-Eq').should('be.visible')                           //Validate LCA summary contents
    //   cy.contains('Simulated Products').should('be.visible')                 //Validate LCA summary contents
    //   cy.contains('Taxable Products').should('be.visible')                   //Validate LCA summary contents

    //   cy.contains('Top 5 Products by Environment Impact').should('be.visible')
    //   cy.contains('Active Projects').should('be.visible')                    //Validate LCA page contents
    //   cy.contains('+ Create New Project').should('be.visible')               //Validate LCA page contents
    //   cy.contains('Impacts by Life Stage').should('be.visible')              //Validate LCA page contents
    //   cy.contains('View Impact').should('be.visible')                        //Validate LCA page contents
    // })
    it('TCLC003 User can see navigate thru the dashboard', () => {
      
      //Top 5 Products by Environmental Impact
      cy.contains('LCA').click()
      cy.scrollTo('top')
      cy.get('#ProductYear').should('be.visible')                                     //Validate dropdown field
      // cy.get(lca.lca_dash_top5_zoomslider).should('be.visible')                       //Validate zoom slider - No more slider 101623

      //See Active Projects
      cy.contains('Start Date').should('be.visible').should('be.visible')             //Validate headers
      cy.contains('Product').should('be.visible').should('be.visible')                //Validate headers
      cy.contains('Simulations').should('be.visible').should('be.visible')            //Validate headers
      cy.get(lca.lca_dash_activeProjects_column_project).should('be.visible')         //Validate project name column 
      cy.get(lca.lca_dash_activeProjects_column_startDate).should('be.visible')       //Validate start date column
      cy.get(lca.lca_dash_activeProjects_column_product).should('be.visible')         //Validate product column
      cy.get(lca.lca_dash_activeProjects_column_simulations).should('be.visible')     //Validate simulations column
      cy.get(lca.lca_dash_activeProjects_column_actionButton).should('be.visible')    //Validate action button column

      //Click an Active Project
      cy.get(lca.lca_dash_activeProjects_firstProject).click()                        //Click first project
      cy.contains('Project Details').should('be.visible')                             //Validate project labels
      cy.contains('Simulation Type').should('be.visible')                             //Validate project labels
      cy.contains('LCA Assessment Type').should('be.visible')                         //Validate project labels
      cy.contains('Started on').should('be.visible')                                  //Validate project labels
      cy.contains('Project Owner').should('be.visible')                               //Validate project labels
      cy.contains('Project Members').should('be.visible')                             //Validate project labels
      cy.contains('Add').should('be.visible')                                         //Validate add project member CTA
      cy.contains('Compare Simulation')
        .should('be.visible')                                                         //Validate Simulation Compare CTA
        .should('have.attr', 'data-disabled', 'true')                                 //Validate Simulation Compare CTA be disabled
      cy.contains('Create Simulation').should('be.visible')                           //Validate Simulation Create CTA
      cy.go('back')                                                                   //Go back to dashboard

      // //Create a Project 
      // cy.contains('Create New Project').click()                                          //Click Create New Project CTA
      // cy.get('[value="New Project"]')
      //   .clear()
      //   .type('Test Project')                                                            //Input Name field
      // cy.contains('Define Project Details')
      //   .invoke('attr', 'for')
      //   .then((forAttribute) => {
      //     const dynamicInputId = forAttribute.replace('-5n4suh5th', '');
      //     cy.get(`input[id="${dynamicInputId}"]`)
      //       .should('exist')
      //       .type('Project detail definition')                                           //Input Define Project Details field
      //     });
      // cy.get('[aria-controls="simulationType"]').as('dropdownButton')
      //   cy.get('@dropdownButton').should('have.attr', 'aria-expanded', 'false');
      //   cy.get('@dropdownButton').click();
      //   cy.get('@dropdownButton').should('have.attr', 'aria-expanded', 'true');
      //   cy.get('@dropdownButton').invoke('attr', 'aria-activedescendant', 'simulationType-2') 
      //   cy.contains('BOM-COMPLETE').click()                                              //Select simulation type
      // cy.get('[placeholder="Product"]')
      //   .click()
      //   .type('{downarrow}')
      //   .type('{enter}')                                                                 //Select Product
      // cy.get('[placeholder="Year"]')
      //   .click()                    
      //   cy.contains('2022').click()                                                      //Select Year
      // cy.get(lca.lca_project_create_addTargetBtn).click()                                //Click Add Target CTA
      // cy.get('[placeholder="Impact Category"]')                                          //Select target impact category
      //   .click()
      //   .type('{downarrow}')
      //   .type('{downarrow}')
      //   .type('{enter}')
      // cy.get(lca.lca_project_create_targetReduce)                                        //Select target reduce %
      //   .click()
      //   .type('10')
      // cy.get(lca.lca_project_create_addPlantBtn).click()                                 //Click Add Plant CTA
      // cy.get('[placeholder="Plant"]')                                                    //Select plant
      //   .click()
      //   .type('{downarrow}')
      //   .type('{enter}')
      // cy.get('[class="mantine-NumberInput-control mantine-NumberInput-controlUp mantine-x0i9fi"]') //Stuck here. Unable to enter batch size.
      //   .click()
      // cy.get('[class="mantine-UnstyledButton-root mantine-Button-root mantine-1141agv"]').click()  //Click Add CTA
// Disabling create a project Test Case. Blocked by Add batch size command.

  })

})
