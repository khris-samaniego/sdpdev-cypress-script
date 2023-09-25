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
      // cy.contains('Component').click()                                                --> Check if feasible
      // cy.get('[placeholder="Product Type"][data-mantine-stop-propagation="true"][aria-activedescendant="mantine-vwbr0zrgd-0"]').click()
      // cy.get('[placeholder="Product Group"]').click()

    })
    it('TCMC007 User can click the Sustainability BOM tab', () => {
      cy.contains('MDG').click()
      cy.contains('Sustainability BOM').click()
      cy.get('#mdg-search-bom').should('be.visible')
    })
    it('TCMC008 User can search Sustainability BOMs from the SBOM tab', () => {
      cy.contains('MDG').click()
      cy.contains('Sustainability BOM').click()
      cy.get('#mdg-search-bom')
      .click()
      .type('prd')
      cy.contains('Filtered to').should('be.visible')
    })
    it('TCMC009 User can select a sustainability BOM from the SBOM tab', () => {
      cy.contains('MDG').click()
      cy.contains('Sustainability BOM').click()
      cy.get('.ag-row-first > [aria-colindex="1"]').click()
      cy.url().should('include', '/mdg/SustainabilityBOM/')                       //Validate url
      cy.get('.mantine-d0x3lq').should('be.visible')                              //Validate breadcrumb
      cy.get('#mdg-bom-back-button > .mantine-Text-root').should('be.visible')    //Validate page name
      cy.get('#mdg-bom-back-button').should('be.visible')                         //Validate back button
      cy.get('.mantine-Title-root').should('be.visible')                          //Validate S BOM Product
      cy.get('.mantine-1avyp1d > .mantine-1fovmxc').should('be.visible')          //Validate materialCode
      cy.contains('Status').should('be.visible')                                  //Validate SBOM Details
      cy.contains('Plant').should('be.visible')
      cy.contains('Material Type').should('be.visible')
      cy.contains('Material Group').should('be.visible')
      cy.contains('Product Hierarchy').should('be.visible')
      cy.contains('Net Weight').should('be.visible')
      cy.contains('Base Quantity').should('be.visible')
      cy.contains('Base UOM').should('be.visible')
      cy.contains('Recyclability %').should('be.visible')
      cy.contains('# of Components').should('be.visible')
      cy.get('[placeholder="Search Elements"]').should('be.visible')              //Validate Search bar
      cy.get('#mdg-add-element-button').should('be.visible')                      //Validate Add Element button
    })
    it('TCMC010 User can search elements of a specific S BOM product', () => {
      cy.contains('MDG').click()
      cy.contains('Sustainability BOM').click()
      cy.get('.ag-row-first > [aria-colindex="1"]').click()                       
      cy.get('[placeholder="Search Elements"]')
      .click()
      .type('1')
      cy.contains('Filtered to').should('be.visible')                             //Validate response are filtered depending on the string
    })
    it('TCMC010 User can add an element of a specific S BOM product', () => {
      cy.contains('MDG').click()                                                  //--> To recheck feasibility, typeerror issue
      cy.contains('Sustainability BOM').click()
      cy.get('.ag-row-first > [aria-colindex="1"]').click()
      cy.get('#mdg-add-element-button').click()                                   //Click ADD ELEMENT CTA
    })
    it('TCMC011 User can click the back button from the specific S BOM product page', () => {
      cy.contains('MDG').click()                                                  
      cy.contains('Sustainability BOM').click()
      cy.get('.ag-row-first > [aria-colindex="1"]').click()
      cy.get('[id="mdg-bom-back-button"]').click()                                   //Click back button
      cy.get('#mdg-search-bom').should('be.visible')                                 //Validate component visible
    })
    it('TCMC012 User can click the Elements tab', () => {
      cy.contains('MDG').click()     
      cy.contains('Elements').click()                                                   //Click Elements tab
      cy.url().should('include', '/mdg/elements')                                       //Validate redirection url 
      cy.get('#mdg-search-elements').should('be.visible')                               //Validate search bar
      cy.contains('Filters').should('be.visible')                                       //Validate Filter button
      cy.get('#mdg-add-element-button').should('be.visible')                            //Validate Add Element CTA
      cy.get('[aria-colindex="1"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').should('be.visible')   //Validate Element Name is visible
      cy.get('[aria-colindex="2"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').should('be.visible')   //Validate Category is visible
      cy.get('[aria-colindex="3"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').should('be.visible')   //Validate element Name 2 is visible
      cy.get('.ag-pinned-right-header > .ag-header-row > .ag-header-cell > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').should('be.visible')   //Validate Action is visible
      
      //Search
      cy.get('#mdg-search-elements')
        .click()  //Click search bar
        .type('electric')
      cy.contains('electric').should('be.visible')

      // //Filter
      // cy.contains('Filters').click()
      // cy.get('[placeholder="Category"]').select('ELECTRICITY')  //Select dropdown element  --> to recheck feasibility
      // cy.get('#mdg-add-element-button').click()                                            --> recheck. hard to get objects of dynamic object values 

    })

    
    
  })

