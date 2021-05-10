/**
 * Created by osmolyar on 1/17/2018.
 */


import ConfirmDeleteDialog  from '../pageObjects/modals/confirmDelete.modal.page';
import { pushP, popP}  from '../common/utilities/stack_p';

class ConfirmDeleteDialogUiService extends ConfirmDeleteDialog {
    constructor(validate=false) {
        super();
        if (validate===true)
            this.validatePageOpen();
        this.switchToIFrame();
        pushP(this);
    };

    cancelDelete() {
        this.clickModalCancelBtn();
        browser.switchToFrame(null);
        popP(true);
    };

    confirmDelete() {
        this.clickModalOkBtn();
        browser.switchToFrame(null);
        popP(true);
    };

    //Validation methods
    validatePageOpen() {
        this.validateTitleText();
    };

    validateTitleText() {
        assert.equal(this.getTitleText(),'Delete');
    };

    validateDeleteUserWarningText(user='') {
        assert.include(this.getWarningText(),'Are you sure you want to delete user \'' + user);
    };

    validateDeleteRoleWarningText(role='') {
        console.log('Validation warning text');
        assert.include(this.getWarningText(),'Are you sure you want to delete role \'' + role +'\'');
    };

    validateDeleteWebApplicationWarningText(webApplication='') {
        assert.include(this.getWarningText(),'Are you sure you want to delete application \'' + webApplication +'\'');
    };

}

export default ConfirmDeleteDialogUiService;



