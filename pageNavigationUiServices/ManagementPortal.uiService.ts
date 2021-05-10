/**
 * Created by osmolyar on 11/6/2017.
 */


import LogoutPageUiService from './Logout.uiService';
import ManagementPortal from '../pageObjects/HomeManagementPortal.page';
import ManagementPortalValidationService  from '../pageValidationUiServices/ManagementPortal.validationService';
import LoginPageValidationService  from '../pageValidationUiServices/Login.validationService';
import SystemAdministrationPageUiService from './SystemAdministration.UiService';

class ManagementPortalUiService extends ManagementPortal {

    constructor(validate: any ='') {
        super();
        if (validate===true)
            this.uiValidation.validateLogin(true);
        else if (validate===false)
            LoginPageValidationService.validateLogin(false);
    }

    get uiValidation() {return new ManagementPortalValidationService()};

    goHome() {
        this.clickHome();
        return this;
    };

    getHelp() {
        this.clickHelp();
    };

    goToHomeLeftNav() {
        this.clickHomeNavItem();
        return this;
    };

    goToSystemAdministrationLeftNav() {
        this.clickSystemAdministrationNavItem();
        return new SystemAdministrationPageUiService();
    };

    selectColumnsView() {
        this.clickColumnsView();
        return this;
    }

    selectListView() {
        this.clickListView();
        return this;
    }

    selectIconsView() {
        this.clickIconsView();
        return this;
    }

   logOut() {
       this.clickLogout();
       return new LogoutPageUiService(true);
    };
}

export default ManagementPortalUiService;
