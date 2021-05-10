/**
 * History:
 * Created by osmolyar on yyyy-mm-dd.
 *
 * Description: Locators for RolesTab page
 */
import BaseModalPage  from '../common/pageObjects/base.modal.page';

class AddColumnsModalLocators extends BaseModalPage {

    get selectSchema() {return $('//*[@id="control_9"]')};
    get selectTable() {return $('//*[@id="input_12"]')};
    get selectView() {return $('//*[@id="input_12"]')};

    get addColumnsCheckbox() {return $('//div[@id="chkAdd"]/span/input[@type="checkbox]')};
    get columnsTable() {return $('//*[@id="idTable"]/div/table')};

    get availableColumns() {return $('//*[@id="avaList"]')};
    get addOneColumn() {return $('//*[@id="selectBoxes"]/column/tbody/tr[2]/td[2]/div[1]/img')};
    get addAllColumns() {return $('//*[@id="selectBoxes"]/column/tbody/tr[2]/td[2]/div[3]/img')};
    get removeOneColumn() {return $('//*[@id="SQLPrivs"]/column/tbody/tr[2]/td[2]/div[2]/img')};
    get removeAllColumns() {return $('//*[@id="SQLPrivs"]/column/tbody/tr[2]/td[2]/div[4]/img')};

    get selectCheckbox() {return $('//*[@id="control_22"]')};
    get insertCheckbox() {return $('//*[@id="control_23"]')};
    get updateCheckbox() {return $('//*[@id="control_24"]')};
    get referencesCheckbox() {return $('//*[@id="control_25"]')};
    get selectGrantAdminCheckbox() {return $('//*[@id="control_30"]')};
    get insertGrantAdminCheckbox() {return $('//*[@id="control_31"]')};
    get updateGrantAdminCheckbox() {return $('//*[@id="control_32"]')};
    get referencesGrantAdminCheckbox() {return $('//*[@id="control_33"]')};

    get selectAllPrivsCheckbox() {return $('//*[@id="control_20"]')};
    get selectAllGrantAdminCheckbox() {return $('//*[@id="control_28"]')};

    get applyButton() {return $('//*[@id="control_36"]')};
    get cancelButton() {return $('//*[@id="control_38"]')};

    availablePrivilege(privilege) {
        return $(`//*[@id="avaList"]//option[contains(.,"${privilege}")]`);
    };


    editLinkByName(name) {
        return $(`//*[@id="idTable"]/div/table/tbody/tr[td[contains(.,"${name}")]]/td[8]/a`);
    };

    revokeLinkByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[9]/a`);
    };
}
export default AddColumnsModalLocators;