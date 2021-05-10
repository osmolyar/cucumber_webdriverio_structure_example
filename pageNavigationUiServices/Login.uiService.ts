/**
 * Created by osmolyar on 11/6/2017.
 */

import LoginPage from "../pageObjects/Login.page";
import ManagementPortalUiService from "./ManagementPortal.uiService";
import LoginPageValidationService from "../pageValidationUiServices/Login.validationService";
import {pushP} from "../common/utilities/stack_p";

class LoginPageUiService extends LoginPage {

    constructor(validate = false) {
        // const proxy = super();
        super();
        if (validate === true) LoginPageValidationService.validatePageOpen();
    }

    get uiValidation() {
        return new LoginPageValidationService();
    }

    logIn(credentials, status : any = true) {
        this.open();
        this.setCredentials(credentials);
        this.clickLogin();
        if (status === false) {
            this.flashText._waitForExist();
        }
        return new ManagementPortalUiService(status);
    }

    //To test invalid login, use LoginPageUiService.LogIn() function directory
    logInToApplication(credentials, status = "true") {
        new LoginPage();
        pushP(this);
        console.log("Submitting " + credentials);
        return this.logIn(credentials, status);
    }
}

export default LoginPageUiService;
