/**
 * Created by osmolyar on 11/6/2017.
 */

import ManagementPortalHomeValidationService from './ManagementPortal.validationService';
import validateUtilities  from '../common/utilities/validateUtilities';
import LoginPage  from '../pageObjects/Login.page';
let loginPage = new LoginPage()
const managementPortalValidationService=new ManagementPortalHomeValidationService();

class loginPageValidationService extends LoginPage {

    static validateLogin(loginStatus) {
        if (loginStatus === true)
            managementPortalValidationService.validateSuccessfulLogIn();
        else
            this.validateUnsuccessfulLogIn();
    };

    static validatePageOpen() {
        this.validatePageTitle();
    };

    static validateUnsuccessfulLogIn () {
        expect(loginPage.getFlashText()).toBe('ERROR #822: Access Denied','Failed to validate login error page');
    };

    static validatePageTitle() {
        validateUtilities.validatePageTitle('Login');
    };
}

export default loginPageValidationService;