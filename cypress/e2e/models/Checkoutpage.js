class CheckoutPage {

    // Xpaths
    checkoutButton = "//button[@id='checkout']"
    firstNameInput = "//input[@id='first-name']"
    lastNameInput = "//input[@id='last-name']"
    postalCodeInput = "//input[@id='postal-code']"
    continueButton = "//input[@id='continue']"
    finishButton = "//button[@id='finish']"
    backToHomeButton = "//button[@id='back-to-products']"

    clickCheckout(){
        cy.xpath(this.checkoutButton).click()
    }

    enterPersonalInfo(firstName, lastName, postalCode) {
        cy.xpath(this.firstNameInput).type(firstName)
        cy.xpath(this.lastNameInput).type(lastName)
        cy.xpath(this.postalCodeInput).type(postalCode)
    }

    clickContinue() {
        cy.xpath(this.continueButton).click()
    }

    clickFinish() {
        cy.xpath(this.finishButton).click()
    }

    clickBackToHome() {
        cy.xpath(this.backToHomeButton).click()
    }

    completeCheckout(firstName, lastName, postalCode) {
        this.clickCheckout()
        this.enterPersonalInfo(firstName, lastName, postalCode)
        this.clickContinue()
        this.clickFinish()
        this.clickBackToHome()
    }
}
export default CheckoutPage
