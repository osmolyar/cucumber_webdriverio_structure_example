/**
 * History:
 * Created by osmolyar on yyyy-mm-dd.
 *
 * Description: Locators for RolesTab page
 */
import BaseModalPage  from '../common/pageObjects/base.modal.page';

class GrantPrivilegesModalLocators extends BaseModalPage {

    get alterCheckbox() {return $('//*[@id="control_17"]')};
    get selectCheckbox() {return $('//*[@id="control_18"]')};
    get insertCheckbox() {return $('//*[@id="control_19"]')};
    get updateCheckbox() {return $('//*[@id="control_20"]')};
    get deleteCheckbox() {return $('//*[@id="control_21"]')};
    get referencesCheckbox() {return $('//*[@id="control_22"]')};
    get executeCheckbox() {return $('//*[@id="control_24"]')};
    get alterGrantAdminCheckbox() {return $('//*[@id="control_29"]')};
    get selectGrantAdminCheckbox() {return $('//*[@id="control_30"]')};
    get insertGrantAdminCheckbox() {return $('//*[@id="control_31"]')};
    get updateGrantAdminCheckbox() {return $('//*[@id="control_32"]')};
    get deleteGrantAdminCheckbox() {return $('//*[@id="control_33"]')};
    get referencesGrantAdminCheckbox() {return $('//*[@id="control_34"]')};
    get executeGrantAdminCheckbox() {return $('//*[@id="control_36"]')};
    get selectAllPrivsCheckbox() {return $('//*[@id="control_15"]')};
    get selectAllGrantAdminCheckbox() {return $('//*[@id="control_27"]')};
    get applyButton() {return $('//*[@id="control_39"]')};
    get cancelButton() {return $('//*[@id="control_41"]')};

}
export default GrantPrivilegesModalLocators;