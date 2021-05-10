/**
 * Page Object for SQLPrivileges
 * Created by osmolyar on yyyy-mm-dd
 */

import GrantPrivilegesLocators  from '../LocatorDefinitions/GrantPrivilegesModal.locators';

class GrantPrivilegesModal extends GrantPrivilegesLocators {

    clickApply() {
        this.applyButton._click();
    };
    close() {
        this.cancelButton._click();
    };

    selectAllPrivileges(){
        this.selectAllPrivsCheckbox._setCheckBox();
    };

    grantAllAdminPrivileges(){
        this.selectAllGrantAdminCheckbox._setCheckBox();
    };

    selectAlterPrivilege(){
        this.alterCheckbox._setCheckBox();
    };
    selectSelectPrivilege(){
        this.selectCheckbox._setCheckBox();
    };
    selectInsertPrivilege(){
        this.insertCheckbox._setCheckBox();
    };
    selectUpdatePrivilege(){
        this.updateCheckbox._setCheckBox();
    };
    selectDeletePrivilege(){
        this.deleteCheckbox._setCheckBox();
    };
    selectReferencesPrivilege(){
        this.referencesCheckbox._setCheckBox();
    };
    selectExecutePrivilege(){
        this.executeCheckbox._setCheckBox();
    };
    selectAlterGrantAdmin(){
        this.alterGrantAdminCheckbox._setCheckBox();
    };
    selectSelectGrantAdmin(){
        this.selectGrantAdminCheckbox._setCheckBox();
    };
    selectInsertGrantAdmin(){
        this.insertGrantAdminCheckbox._setCheckBox();
    };
    selectUpdateGrantAdmin(){
        this.updateGrantAdminCheckbox._setCheckBox();
    };
    selectDeleteGrantAdmin(){
        this.deleteGrantAdminCheckbox._setCheckBox();
    };
    selectReferencesGrantAdmin(){
        this.referencesGrantAdminCheckbox._setCheckBox();
    };
    selectExecuteGrantAdmin(){
        this.executeGrantAdminCheckbox._setCheckBox();
    };
}

export default GrantPrivilegesModal;