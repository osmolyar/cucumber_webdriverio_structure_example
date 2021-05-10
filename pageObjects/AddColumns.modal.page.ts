/**
 * Page Object for SQLPrivileges
 * Created by osmolyar on yyyy-mm-dd
 */

import AddColumnsLocators  from '../LocatorDefinitions/AddColumnsModal.locators';

class AddColumnsModal extends AddColumnsLocators {

    selectASchema(schema) {
        this.selectSchema._selectValue(schema);
    };

    selectATable(table){
        this.selectTable._selectValue(table);
    };

    selectAView(view){
        this.selectView._selectValue(view);
    };

    // selectColumn(column){
    //     this.availableColumns(column));
    // };

    clickAddOneColumn(){
        this.addOneColumn._click();
    };

    clickAddAllColumns(){
        this.addAllColumns._click();
    };

    clickRemoveOneColumn(){
        this.removeOneColumn._click();
    };

    clickRemoveAllColumns(){
        this.removeAllColumns._click();
    };

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

    selectSelectPrivilege(){
        this.selectCheckbox._setCheckBox();
    };
    selectInsertPrivilege(){
        this.insertCheckbox._setCheckBox();
    };
    selectUpdatePrivilege(){
        this.updateCheckbox._setCheckBox();
    };
    selectReferencesPrivilege(){
        this.referencesCheckbox._setCheckBox();
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
    selectReferencesGrantAdmin(){
        this.referencesGrantAdminCheckbox._setCheckBox();
    };
    clickEditLinkByName(name){
        this.editLinkByName(name)._click();
    };
    clickRevokeLinkByName(name){
        this.revokeLinkByName(name)._click();
    };
}

export default AddColumnsModal;