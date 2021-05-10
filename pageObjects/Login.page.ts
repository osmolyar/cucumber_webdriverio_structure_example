/**
 * History: 11/13/2017: osmolyar:  converted to use ES6 classes
 * Modified by osmolyar on 11/7/2017
 *
 * Created by alewis on 10/4/16.
 */
import LoginPageLocators  from '../LocatorDefinitions/login.locators';
import testConfig  from '../testConfig/wdio.local.config';
import speed from '../common/config/speed';
import _ from "lodash"

"use strict";
class LoginPage extends LoginPageLocators {

    //region navigationMethods
    open() {
        const url='/csp/sys/UtilHome.csp';
        console.log("in LoginPage.open(): testConfig.config.baseUrl is" + testConfig.config.baseUrl);
        super.open(testConfig.config.baseUrl + url);
    } ;

    setCredentials(credentials){
        console.log(credentials);
        browser.pause(500)
        this.loginButton._waitForExist();
        this.loginText._setValue(credentials.login,speed.implicit,speed.implicit)
        this.loginPassword._setValue(credentials.password,speed.implicit,speed.implicit)
    };

    clickLogin(){
        browser.pause(speed.implicit);
        this.loginButton._click(speed.implicit,speed.slow);
    };
    //endregion navigationMethods

    //region validationUtilities
    getFlashText() {
        return this.flashText.getText();
    }
    //endregion validationUtilities
}

export default LoginPage;
