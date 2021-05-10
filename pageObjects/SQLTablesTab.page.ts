/**
 * Page Object for SQLTables
 * Created by osmolyar on yyyy-mm-dd
 */

import SQLTablesLocators  from '../LocatorDefinitions/SQLTablesTab.locators';

class SQLTablesPage extends SQLTablesLocators{

    clickAddTables(){
        this.addTablesButton._click();
    };

    clickAddColumns(){
        this.addColumnsButton._click();
    };

    selectNamespace(namespace){
        this.switchNamespace._selectValue(namespace);
    };

    selectIncludeSystemItems() {
        this.includeSystemItems._setCheckBox();
    };

    clickEditLinkByName(name){
        this.editLinkByName(name)._click();
    };
    clickEditColumnsLinkByName(name){
        this.editColumnsLinkByName(name)._click();
    };
    clickRevokeLinkByName(name){
        this.revokeLinkByName(name)._click();
    };

    getAlterCellByName(name) {
        return this.alterCellByName(name)._getText();
    };

    getSelectCellByName(name) {
        return this.selectCellByName(name)._getText();
    };

    getInsertCellByName(name) {
        return this.insertCellByName(name)._getText();
    };

    getUpdateCellByName(name) {
        return this.updateCellByName(name)._getText();
    };

    getDeleteCellByName(name) {
        return this.deleteCellByName(name)._getText();
    };
    getReferencesCellByName(name) {
        return this.referencesCellByName(name)._getText();
    };
    getGrantedViaCellByName(name) {
        return this.grantedViaCellByName(name)._getText();
    };
    getGrantedByCellByName(name) {
        return this.grantedByCellByName(name)._getText();
    };
    getColumnPrivCellByName(name) {
        return this.columnPrivCellByName(name)._getText();
    };
    clickEditUserBreadcrumb(){
        this.breadcrumbEditUser._click();
    };
    clickEditRoleBreadcrumb(){
        this.breadcrumbEditRole._click();
    };
}

export default SQLTablesPage;