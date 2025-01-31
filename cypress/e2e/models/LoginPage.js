export class LoginPage {

    usernameInput = "//input[@name='user-name']"
    passwordInput = "//input[@name='password']"
    loginButton = "//input[@name='login-button']"

    visit(url){
        cy.visit(url)
    }

    enterUsername(uname){
        cy.xpath(this.usernameInput).type(uname)
    }

    enterPasswrod(pswd){
        cy.xpath(this.passwordInput).type(pswd)
    }

    clickLogin(){
        cy.xpath(this.loginButton).click()
    }

    loginAll({uname,paswd,url}){
        this.visit(url)
        this.enterUsername(uname)
        this.enterPasswrod(paswd)
        this.clickLogin()
    }

}

export function myname(){
    console.log("My name is abhishek")
}
