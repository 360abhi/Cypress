import {LoginPage,myname} from "../models/LoginPage";
import CheckoutPage from "../models/Checkoutpage";
import HomePage from "../models/HomePage";

export class CheckerEntries {

    check(data){
        const login = new LoginPage()
        const home = new HomePage()
        const checkout = new CheckoutPage()

        login.loginAll({uname:data['username'],paswd:data['password'],url:data['url']})
        home.homeAll()
        checkout.completeCheckout(data['firstname'],data['lastname'],data['zipcode'])
        
    }
}
