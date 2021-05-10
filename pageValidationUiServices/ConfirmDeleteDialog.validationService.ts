/**
 * Created by osmolyar on 1/17/2018.
 */

import ConfirmDeleteDialog  from '../pageObjects/modals/ConfirmDelete.modal.page.js';
import validateUtilities  from '../common/utilities/validateUtilities';

class ConfirmDeleteDialogValidationService extends ConfirmDeleteDialog {

    //Validation methods
   validatePageOpen() {
        this.validateTitleText();
    }

    validateTitleText() {
       assert.equal(this.getTitleText(),'Delete');
    };

    validateWarningText(user='') {
        assert.include(this.getWarningText(),'Are you sure you want to delete user \'' + user +'\'');
    };


}

export default  ConfirmDeleteDialogValidationService;


