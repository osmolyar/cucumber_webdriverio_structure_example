/**
 * Page Object for RolesTab of Edit User page
 * Also represents Members Tab or Assigned To tab of Edit Role page, depending on constructor parameter
 * Which controls which locator file is to be used
 * Created by osmolyar on 2018-01-01
 */

import RolesTabLocators  from '../LocatorDefinitions//RolesTab.locators';

class RolesTabPage extends RolesTabLocators {

    selectRole(role){
        this.availableRoles._selectLabel(role);
    };

    selectUserIncludes(user){
        this.availableRoles._selectLabelIncludes(user);
    };

    clickAddOneRole(){
        this.addOneRole._click();
    };

    clickAddAllRoles(){
        this.addAllRoles._click();
    };

    clickRemoveOneRole(){
        this.removeOneRole._click();
    };

    clickRemoveAllRoles(){
        this.removeAllRoles._click();
    };

    clickAssignRole(){
        this.assignRole._click();
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

    assignGrantOptionByName(name,assign=true){
        this.grantOptionByName(name)._setCheckBox(assign);
    };

    clickEditUserBreadcrumb(){
        this.breadcrumbEditUser._click();
    };
    clickEditRoleBreadcrumb(){
        this.breadcrumbEditRole._click();
    };

}

export default RolesTabPage;