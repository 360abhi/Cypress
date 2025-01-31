class HomePage {
    constructor() {
        // Locators
        this.addToCartButton = "(//button[.='Add to cart'])[1]"
        this.cartIcon = "//a[@class='shopping_cart_link']"
    }

    addToCart() {
        cy.xpath(this.addToCartButton).click()
    }

    goToCart() {
        cy.xpath(this.cartIcon).click()
    }

    homeAll(){
        this.addToCart()
        this.goToCart()
    }
}

export default HomePage
