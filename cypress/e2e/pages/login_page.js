export class LoginPage {

    login_txtfield_username = '#login-username'
    login_txtfield_password = '#login-password'
    login_btn_submit = '#login-submit'
    login_msg_error = '#login-error'

    enterUsername(username) {
        cy.get(this.login_txtfield_username).type(username)
    }
    enterPassword(password) {
        cy.get(this.login_txtfield_password).type(password)
    }
    clickLoginButton() {
        cy.get(this.login_btn_submit).click()
    }
}

// cy.get('#login-username')
// cy.get('#login-password')
// cy.get('#login-submit')
