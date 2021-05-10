/**
 *
 * History         : 2017-11-06 OS  Modified config to loginLocators
 *
 * Created by alewis on 10/4/16.
 * Description     : Locators for Login screen
 */
import BasePage  from '../common/pageObjects/base.page';

class LoginLocators extends BasePage {

    get loginText() {return $('[name=IRISUsername]')};
    get loginPassword() {return $('[name=IRISPassword]')};
    get loginButton() {return $('[name=IRISLogin]');}
    get flashText() {return $(`/html/body/table[2]/tbody/tr/td/table/tbody/tr[3]/td/center/p[2]/b/font`)};

}

export default LoginLocators;
