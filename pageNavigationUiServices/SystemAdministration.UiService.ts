/**
 * Created by osmolyar on 1/8/2017.
 */

import SystemAdministrationPage  from '../pageObjects/SystemAdministration.page';
import SystemAdministrationValidationService  from '../pageValidationUiServices/SystemAdministration.validationService';
import UsersUiService from './Users.uiService';
import { pushP}  from '../common/utilities/stack_p';

class SystemAdministrationUiService extends SystemAdministrationPage {
    constructor(validate = false) {
        super();
        pushP(this);
        if (validate===true)
            this.validatePageOpen();
    }

    get uiValidation() {return new SystemAdministrationValidationService;}

    validatePageOpen() {
        this.uiValidation.validatePageOpen();
    };

    //region columnNavigation

    goToUsers() {
        this.clickColumnsSecurity().clickColumnsUsers().clickGoButton();
        return new UsersUiService(true);
    };

    //endregion columnNavigation
}

export default SystemAdministrationUiService;

