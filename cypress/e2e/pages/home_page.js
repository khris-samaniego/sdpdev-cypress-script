export class homePage {

    home_banner = 'Welcome to the Sustainability Data Platform!'

    verifyHome() {
        cy.contains(this.home_banner).should('be.visible')
    }

    // enterUsername(username) {
    //     cy.get(this.login_txtfield_username).type(username)
    // }
    // enterPassword(password) {
    //     cy.get(this.login_txtfield_password).type(password)
    // }
    // clickLoginButton() {
    //     cy.get(this.login_btn_submit).click()
    // }
}
