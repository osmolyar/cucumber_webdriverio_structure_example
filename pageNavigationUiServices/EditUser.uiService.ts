/**
 * Created by osmolyar on 1/18/2018.
 */

import EditUserPage  from '../pageObjects/EditUser.page';
import validateUtilities  from '../common/utilities/validateUtilities';
import GenericUtilities  from '../common/utilities/genericUtilities';
import RolesTab  from './RolesTab.uiService';
import PrivilegesTab  from './SQLPrivilegesTab.uiService';
import SQLTablesTab  from './SQLTablesTab.uiService';
import SQLViewsTab  from './SQLViewsTab.uiService';
import SQLProceduresTab  from './SQLProceduresTab.uiService';
import {pushP, popP}  from '../common/utilities/stack_p';
let privilegesTab, rolesTab,tablesTab,viewsTab, proceduresTab;

class EditUserPageUiService extends EditUserPage {
    editArray=["fullName","comment","chgPasswdNextLogin","expDate","passwdNeverExpires","userEnabled","acctNeverExpires","startupNamespace","startupTagRoutine",
    "emailAddress","mobilePhoneNumber","mobilePhoneServiceProvider"];
    validateArray=["responseText","routineHint","namespaceHint"];
    constructor(validate=false) {
        super();
        if (validate===true)
            this.validatePageOpen();
        pushP(this);
    };

    getValidationElements(validationOptions) {
        this.getElementProperties(validationOptions,this.validateArray);
        validationOptions.nameHintRed=this.getNameErrorHintHighlighted();
        validationOptions.passwdHintRed=this.getPasswdErrorHintHighlighted();
        validationOptions.passwdConfirmHintRed=this.getPasswordConfirmErrorHintHighlighted();
        console.log("validationOptions is " + JSON.stringify(validationOptions));
    };

    createUser(user,validationOptions,update='') {
        if(update==='') {
            this.setName(user.login);
            this.setCopyFrom(user.copyFrom);
            this.setPasswd(user.passwd);
            this.setConfirmPasswd(user.passwdConfirm);
        }
        else if (update==='update')
            {if (user.passwd !== null) {
                this.selectUpdatePasswd();
                this.setPasswd(user.passwd);
                this.setConfirmPasswd(user.passwdConfirm);
            }
        }
        this.setElementProperties(user,this.editArray);
        this.clickSaveBtn();
        this.getValidationElements(validationOptions);
        if (user.role==='All')
            this.assignAllRoles(user);
        else
        if (user.role!=='' && user.role!==undefined)
            this.assignRole(user);
    };

    removeRole(role) {
        let rolesTab;
        if (!(context.page instanceof RolesTab)) {
            rolesTab=this.switchToRolesTab();
        } else {
            rolesTab=context.page;
        }
        rolesTab.removeRole(role);
    };
    toggleRoleGrantOption(role) {
        if (!(context.page instanceof RolesTab)) {
            rolesTab=this.switchToRolesTab();
        } else {
            rolesTab=context.page;
        }
        rolesTab.clickGrantOptionByName(role);
    };

    goToUsers() {
        this.clickUsersBreadcrumb();
        this.acceptAlertIfPresent();
        return popP(true);
    };

    cancel() {
        this.clickCancelBtn();
        this.acceptAlertIfPresent();
        return popP(true);
    };

    assignRole(options) {
        if (!(context.page instanceof RolesTab)) {
            rolesTab=this.switchToRolesTab();
        } else {
            rolesTab=context.page;
        }
        rolesTab.assignOneRole(options);
    };

    assignAllRoles(options) {
        if (!(context.page instanceof RolesTab)) {
            this.goToEditUser();
            rolesTab=this.switchToRolesTab();
        } else {
            rolesTab=context.page;
        }
        rolesTab.assignAllRoles(options);
    };

    switchToRolesTab() {
        GenericUtilities.injectJQuery();
        this.goToRolesTab();
        return new RolesTab();
    };

    switchToPrivilegesTab() {
        GenericUtilities.injectJQuery();
        this.goToPrivilegesTab();
        return new PrivilegesTab();
    };

    switchToTablesTab() {
        GenericUtilities.injectJQuery();
        console.log("Switching to SQL tables tab");
        this.goToTablesTab();
        return new SQLTablesTab();
    };

    switchToViewsTab() {
        GenericUtilities.injectJQuery();
        this.goToViewsTab();
        return new SQLViewsTab();
    };

    switchToProceduresTab() {
        GenericUtilities.injectJQuery();
        this.goToProceduresTab();
        return new SQLProceduresTab();
    };
    //region Privileges
    assignPrivilege(options) {
        if (!(context.page instanceof PrivilegesTab)) {
            privilegesTab=this.switchToPrivilegesTab();
        } else {
            privilegesTab=context.page;
        }
        privilegesTab.assignOnePrivilege(options);
        privilegesTab.goToEditUser();
    };

    assignPrivileges(options) {
        if (!(context.page instanceof PrivilegesTab)) {
            privilegesTab=this.switchToPrivilegesTab();
        } else {
            privilegesTab=context.page;
        }
        privilegesTab.assignPrivileges(options);
        privilegesTab.goToEditUser();
    };

    assignAllPrivileges(options) {
        if (!(context.page instanceof PrivilegesTab)) {
            privilegesTab=this.switchToPrivilegesTab();
        } else {
            privilegesTab=context.page;
        }
        privilegesTab.assignAllPrivileges(options);
        privilegesTab.goToEditUser();
    };

    removePrivilege(privilege) {
        if (!(context.page instanceof PrivilegesTab)) {
            privilegesTab=this.switchToPrivilegesTab();
        } else {
            privilegesTab=context.page;
        }
        privilegesTab.removePrivilege(privilege);
    };

    togglePrivilegeGrantOption(privilege) {
        if (!(context.page instanceof PrivilegesTab)) {
            privilegesTab=this.switchToPrivilegesTab();
        } else {
            privilegesTab=context.page;
        }
        privilegesTab.clickGrantOptionByName(privilege);
    };

    assignPrivilegeGrantOption(privilege) {
        if (!(context.page instanceof PrivilegesTab)) {
            privilegesTab=this.switchToPrivilegesTab();
        } else {
            privilegesTab=context.page;
        }
        privilegesTab.assignGrantOptionByName(privilege);
    };

    //endregion Privileges;

    //region SQLTables
    assignSQLTable(options) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.assignOneTable(options.table,options.schema);
        tablesTab.goToEditUser();
    };

    assignSQLTableColumn(options) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.assignOneColumn(options.column,options.table,options.schema);
        tablesTab.goToEditUser();
    };

    assignSQLTablesWithPermissions(options) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.assignSQLTablesWithPermissions(options);
        tablesTab.goToEditUser();
    };

    assignSQLColumnsWithPermissions(options) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.assignSQLColumnsWithPermissions(options);
        tablesTab.goToEditUser();
    };

    revokeSQLTablePrivilege(SQLTable) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.revokePrivilege(SQLTable);
        tablesTab.goToEditUser();
    };

    revokeSQLColumnPrivilege(column,table) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.revokeColumnPrivilege(column,table);
        tablesTab.goToEditUser();
    };

    editSQLTablePrivileges(options) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.editTablePrivileges(options,options.table);
        tablesTab.goToEditUser();
    };

    editSQLColumnPrivileges(options,column,table) {
        if (!(context.page instanceof SQLTablesTab)) {
            tablesTab=this.switchToTablesTab();
        } else {
            tablesTab=context.page;
        }
        tablesTab.editColumnPrivileges(options,column,table);
        tablesTab.goToEditUser();
    };
    //endregion SQLTables

    //region SQLViews
    assignSQLView(SQLView,schema) {
        if (!(context.page instanceof SQLViewsTab)) {
            viewsTab=this.switchToViewsTab();
        } else {
            viewsTab=context.page;
        }
        viewsTab.assignOneView(SQLView,schema);
        viewsTab.goToEditUser();
    };

    assignSQLViewsWithPermissions(options) {
        if (!(context.page instanceof SQLViewsTab)) {
            viewsTab=this.switchToViewsTab();
        } else {
            viewsTab=context.page;
        }
        viewsTab.assignSQLViewsWithPermissions(options);
        viewsTab.goToEditUser();
    };

    revokeSQLViewPrivilege(SQLView) {
        if (!(context.page instanceof SQLViewsTab)) {
            viewsTab=this.switchToViewsTab();
        } else {
            viewsTab=context.page;
        }
        viewsTab.revokePrivilege(SQLView);
        viewsTab.goToEditUser();
    };

    editSQLViewPrivileges(options,SQLView) {
        if (!(context.page instanceof SQLViewsTab)) {
            viewsTab=this.switchToViewsTab();
        } else {
            viewsTab=context.page;
        }
        viewsTab.editViewPrivileges(options,SQLView);
        viewsTab.goToEditUser();
    };
    //endregion SQLViews

    //region SQLProcedures
    assignSQLProcedure(SQLProcedure,schema) {
        if (!(context.page instanceof SQLProceduresTab)) {
            proceduresTab=this.switchToProceduresTab();
        } else {
            proceduresTab=context.page;
        }
        proceduresTab.assignOneProcedure(SQLProcedure,schema);
        proceduresTab.goToEditUser();
    };

    assignSQLProceduresWithPermissions(options) {
        if (!(context.page instanceof SQLProceduresTab)) {
            proceduresTab=this.switchToProceduresTab();
        } else {
            proceduresTab=context.page;
        }
        proceduresTab.assignSQLProceduresWithPermissions(options);
        proceduresTab.goToEditUser();
    };

    revokeSQLProcedurePrivilege(SQLProcedure) {
        if (!(context.page instanceof SQLProceduresTab)) {
            proceduresTab=this.switchToProceduresTab();
        } else {
            proceduresTab=context.page;
        }
        proceduresTab.revokePrivilege(SQLProcedure);
        proceduresTab.goToEditUser();
    };

    editSQLProcedurePrivileges(options,SQLProcedure) {
        if (!(context.page instanceof SQLProceduresTab)) {
            proceduresTab=this.switchToProceduresTab();
        } else {
            proceduresTab=context.page;
        }
        proceduresTab.editProcedurePrivileges(options,SQLProcedure);
        proceduresTab.goToEditUser();
    };
    //endregion SQLProcedures

    goToEditUser() {
        this.clickEditUserBreadcrumb();
        this.acceptAlertIfPresent();
        return this;
    };

    //Validation methods
    validatePageOpen() {
        this.validatePageTitle();
    };

    validatePageTitle() {
        validateUtilities.validatePageTitle('Edit User');
    };
}

export default EditUserPageUiService;
