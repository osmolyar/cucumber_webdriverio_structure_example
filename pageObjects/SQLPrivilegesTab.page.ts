/**
 * Page Object for SQLPrivileges
 * Created by osmolyar on yyyy-mm-dd
 */

import SQLPrivilegesLocators  from '../LocatorDefinitions/SQLPrivilegesTab.locators';

class SQLPrivilegesPage extends SQLPrivilegesLocators {
    
    selectPrivilege(privilege){
        this.availablePrivilege(privilege)._click();
    };

    clickAddOnePrivilege(){
        this.addOnePrivilege._click();
    };

    clickAddAllPrivileges(){
        this.addAllPrivileges._click();
    };

    clickRemoveOnePrivilege(){
        this.removeOnePrivilege._click();
    };

    clickRemoveAllPrivileges(){
        this.removeAllPrivileges._click();
    };

    clickAssignPrivilege(){
        this.assignPrivilege._click();
    };

    clickAssignWithGrantPermissions(){
        this.assignWithGrantPermissions._click();
    };
    clickRemoveLinkByName(name){
        this.removeLinkByName(name)._click();
    };

    clickGrantOptionByName(name){
        this.grantOptionByName(name)._click();
    };
    
    clickEditUserBreadcrumb(){
        this.breadcrumbEditUser._click();
    };

    clickEditRoleBreadcrumb(){
        this.breadcrumbEditRole._click();
    };
    assignGrantOptionByName(name, assign=true){
        this.grantOptionByName(name)._setCheckBox(assign);
    };
}


export default SQLPrivilegesPage;