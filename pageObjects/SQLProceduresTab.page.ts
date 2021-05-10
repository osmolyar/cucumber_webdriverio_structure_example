/**
 * Page Object for SQLProcedures
 * Created by osmolyar on yyyy-mm-dd
 */

import SQLProceduresLocators  from '../LocatorDefinitions/SQLProceduresTab.locators';

class SQLProceduresPage extends SQLProceduresLocators {

    clickAddProcedures(){
        this.addProceduresButton._click();
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
    clickRevokeLinkByName(name){
        this.revokeLinkByName(name)._click();
    };

    getExecuteCellByName(name) {
        return this.executeCellByName(name)._getText();
    };
    getGrantedViaCellByName(name) {
        return this.grantedViaCellByName(name)._getText();
    };
    getGrantedByCellByName(name) {
        return this.grantedByCellByName(name)._getText();
    };
    clickEditUserBreadcrumb(){
        this.breadcrumbEditUser._click();
    };
    clickEditRoleBreadcrumb(){
        this.breadcrumbEditRole._click();
    };
}

export default SQLProceduresPage;