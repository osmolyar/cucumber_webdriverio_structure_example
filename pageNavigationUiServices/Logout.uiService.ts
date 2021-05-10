/**
 * Created by osmolyar on 11/6/2017.
 * This page service needed to be separated from LoginPageUiService because otherwise there is a circular dependency created between LoginPageUiService
 * and ManagementPortalUiService, and ManagementPortalUiService then says that LoginPageUiService() is not a constructor.  Apparently because it is masked by
 * something due to the circular reference.
 */


import LoginPage  from '../pageObjects/Login.page';
import LoginPageValidationService  from '../pageValidationUiServices/Login.validationService';


class LogoutPageUiService extends LoginPageValidationService {
    constructor(validate=false) {
        super();
        if (validate===true)
            LoginPageValidationService.validatePageOpen();
    }
}



export default  LogoutPageUiService;