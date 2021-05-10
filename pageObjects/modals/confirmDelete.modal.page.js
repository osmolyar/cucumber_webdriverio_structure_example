/**
 * Created by osmolyar on 1/17/2018
 */

import confirmDeleteLocators from '../../LocatorDefinitions/confirmDelete.locators';

class ConfirmDeleteModalDialog extends confirmDeleteLocators {

    get map() { return confirmDeleteLocators}

    clickModalOkBtn(){
        this.modalOkBtn._click();
    };
    clickModalCancelBtn(){
        this.modalCancelBtn._click();
    };
    getWarningText() {
        return this.warningText._getText();
    };
    getTitleText() {
        return this.titleText._getText();
    };
}

export default  ConfirmDeleteModalDialog;