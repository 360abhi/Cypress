import {LoginPage,myname} from "../models/LoginPage";
import CheckoutPage from "../models/Checkoutpage";
import HomePage from "../models/HomePage";

describe("Login Functionality",()=>{

    const login = new LoginPage()
    const home = new HomePage()
    const checkout = new CheckoutPage()

    it('Login',()=>{
        login.loginAll({uname:'standard_user',paswd:'secret_sauce',url:'https://www.saucedemo.com/'})
        home.homeAll()
        checkout.completeCheckout('Abhishek','Chhawari','400005')
    })
})