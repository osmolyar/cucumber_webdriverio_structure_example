/**
 * Created by osmolyar on 1/17/2018.
 */

import UsersPage  from '../pageObjects/Users.page';
import EditUserUiService  from './EditUser.uiService';
import ConfirmDeleteDialogUiService from "./ConfirmDeleteDialog.uiService";
import validateUtilities  from '../common/utilities/validateUtilities';
import GenericUtilities  from '../common/utilities/genericUtilities';
import { processTable }  from '../common/utilities/processTable';
import { pushP}  from '../common/utilities/stack_p';
let editUserPage;

class UsersPageUiService extends UsersPage {
    constructor(validate = false) {
        super();
        this.waitForZenPageReady();
        pushP(this);
        if (validate === true)
            this.validatePageOpen();
    }
    createNewUser(user,validationOptions) {
        console.log('Creating new user ' + user.login);
        browser.switchToFrame(null);
        this.waitForZenPageReady();
        const createUser=this.openEditUserPage();
        console.log('Inputting user data');
        createUser.createUser(user,validationOptions);
    };

    createNewUserWithNoRole(user,validationOptions) {
        console.log('Creating new user ' + user.login);
        browser.switchToFrame(null);
        const createUserPage=this.openEditUserPage();
        console.log('Inputting user data');
        createUserPage.createUser(user,validationOptions);
    };

    deleteUser(user,confirm='confirm') {
        console.log('Deleting user ' + user.login);
        this.goToUsers();
        this.setNameFilter(user.login);
        this.clickFullNameHeaderCell(); //Needed on IE10/11 to get filter to work
        let confirmDeleteDialog=this.deleteThisUser(0);
        confirmDeleteDialog.validateDeleteUserWarningText(user.login);
        if (confirm==='confirm' || confirm ==='true') {
            console.log("Confirming deletion");
            confirmDeleteDialog.confirmDelete();
        }
        //cancel deletion
        else {
            console.log("Canceling deletion");
            confirmDeleteDialog.cancelDelete();
        }
        browser.switchToFrame(null);
    };

    openEditUserPage() {
        this.clickCreateNewUserBtn();
        return new EditUserUiService();
    };

    openUser(user) {
        this.setNameFilter(user.login);
        this.clickFullNameHeaderCell(); //Needed on IE10/11 to get filter to work
        this.clickUserByRowId();
        return new EditUserUiService();
    }

    deleteThisUser(rowId=0) {
        this.clickDeleteUserByRowId(rowId);
        return new ConfirmDeleteDialogUiService(true);
    }

    editUser(olduser,newuser,validationOptions) {
        console.log('Editing user ' + olduser.login);
        if (!(context.page instanceof this.constructor) && !(context.page instanceof EditUserUiService))
            this.goToUsers();
        if (!(context.page instanceof EditUserUiService))
            editUserPage=this.openUser(olduser);
        else if (context.page instanceof EditUserUiService)
            editUserPage= context.page;
        console.log('Inputting new user data');
        editUserPage.createUser(newuser,validationOptions,'update');
    };

    goToEditUserGeneralTab(options) {
        console.log(context.page.constructor.name);
        if (!(context.page instanceof this.constructor) && !(context.page instanceof EditUserUiService))
            this.goToUsers();
        if (context.page instanceof this.constructor)
            editUserPage = this.openUser(options);
        else if (context.page instanceof EditUserUiService)
            editUserPage = context.page;
        return editUserPage;
    };

    removeRoleFromUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and removing role '+options.role);
        console.log(editUserPage.constructor.name);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.removeRole(options.role);
    };

    addRoleToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding role '+options.role);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        if (options.role === 'All')
            editUserPage.assignAllRoles(options);
        else if (options.role)
            editUserPage.assignRole(options);
    };

    addGrantOptionToRole(user, editUserPage) {
        console.log('Editing user ' + user.login + ' and adding grant option to ' + user.role);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(user);
        editUserPage.toggleRoleGrantOption(user.role);
    };
    //region SQLPrivileges
    addPrivilegeToUser(options, editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL privilege ' + options.privilege);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        if (options.privilege === 'All')
            editUserPage.assignAllPrivileges(options);
        else if (options.privilege)
            editUserPage.assignPrivilege(options);
    };

    removePrivilegeFromUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and removing privilege '+options.privilege);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.removePrivilege(options.privilege);
    };

    addSQLPrivilegesToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL privileges '+JSON.stringify(options.newSQLPrivileges));
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.assignPrivileges(options);
    };

    addGrantOptionToPrivilege(user, editUserPage) {
        console.log('Editing user ' + user + ' and adding grant option to '+user.privilege);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(user);
        editUserPage.assignPrivilegeGrantOption(user.privilege);
    };
    //endregion SQLPrivileges

    //region SQLTables
    addSQLTableToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL table privilege '+options.table);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        if (options.table)
            editUserPage.assignSQLTable(options);
    };

    addTableColumnToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL table privilege '+options.table);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        if (options.table)
            editUserPage.assignSQLTableColumn(options);
    };

    addSQLTablesWithPrivilegesToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL table privileges '+JSON.stringify(options.newSQLTables));
        console.log(editUserPage.constructor.name);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        console.log(editUserPage.constructor.name);
        editUserPage.assignSQLTablesWithPermissions(options);
    };

    addSQLColumnsWithPrivilegesToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL column privileges '+JSON.stringify(options.newSQLColumns));
        console.log(editUserPage.constructor.name);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        console.log(editUserPage.constructor.name);
        editUserPage.assignSQLColumnsWithPermissions(options);
    };

    revokeSQLTableFromUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and revoking SQL table privilege '+options.table);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.revokeSQLTablePrivilege(options.table);
    };

    revokeSQLColumnFromUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and revoking SQL column privilege '+options.column);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.revokeSQLColumnPrivilege(options.column,options.table);
    };

    editSQLTablePrivileges(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and editing SQL table privilege '+options.table + 'to grant the following permissions: '+ JSON.stringify(options.newSQLTablePermissions));
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.editSQLTablePrivileges(options);
    };

    editSQLColumnPrivileges(options, editUserPage) {
        console.log('Editing user ' + options.login + ' and editing SQL column privilege '+options.column + 'to grant the following permissions: '+ JSON.stringify(options.newSQLColumnPermissions));
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.editSQLColumnPrivileges(options,options.column, options.table);
    };

    //endregion SQLTables

    //region SQLViews
    addSQLViewToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL view privilege '+options.view);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        if (options.view)
            editUserPage.assignSQLView(options.view,options.schema);
    };

    addSQLViewsWithPrivilegesToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL privileges '+JSON.stringify(options.newSQLViews));
        console.log(editUserPage.constructor.name);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        console.log(editUserPage.constructor.name);
        editUserPage.assignSQLViewsWithPermissions(options);
    };

    revokeSQLViewFromUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and revoking SQL view privilege '+options.view);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.revokeSQLViewPrivilege(options.view);
    };

    editSQLViewPrivileges(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and editing SQL view privilege '+options.view + 'to grant the following permissions: '+ JSON.stringify(options.newSQLViewPermissions));
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.editSQLViewPrivileges(options,options.view);
    };
    //endregion SQLViews


    //region SQLProcedures
    addSQLProcedureToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL procedure privilege '+options.procedure);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        if (options.procedure)
            editUserPage.assignSQLProcedure(options.procedure,options.schema);
    };

    addSQLProceduresWithPrivilegesToUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and adding SQL privileges '+JSON.stringify(options.newSQLProcedures));
        console.log(editUserPage.constructor.name);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        console.log(editUserPage.constructor.name);
        editUserPage.assignSQLProceduresWithPermissions(options);
    };

    revokeSQLProcedureFromUser(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and revoking SQL procedure privilege '+options.procedure);
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.revokeSQLProcedurePrivilege(options.procedure);
    };

    editSQLProcedurePrivileges(options,editUserPage) {
        console.log('Editing user ' + options.login + ' and editing SQL procedure privilege '+options.procedure + 'to grant the following permissions: '+ JSON.stringify(options.newSQLProcedurePermissions));
        if (!editUserPage)
            editUserPage=this.goToEditUserGeneralTab(options);
        editUserPage.editSQLProcedurePrivileges(options,options.procedure);
    };
    //endregion SQLProcedures

    //Validation methods
    validatePageOpen() {
        this.validatePageTitle();
    }

    validatePageTitle() {
        validateUtilities.validatePageTitle('Users');
    };

    validateUserNameByRowId(user,exists='exists',rowId=0){
        this.setNameFilter(user.login);
        this.clickDeleteHeaderCell(); //Needed on IE10/11 to get filter to work
        if (exists==='exists' || exists==='true')
            assert.include(this.getUserByRowId(rowId),user.login);
        else
            assert.notEqual(this.getUserByRowId(rowId),user.login);

    };

    getUserRowId(user) {
        return GenericUtilities.getRowId(this.userTable+'/tbody/tr/td[2]',user);
    };

    processUsersTable(user) {
        // $(this.nameFilter).clearValue();
        // this.element.appendValue(this.nameFilter,"\n");
        this.clickDeleteHeaderCell();
        const rowId=this.getUserRowId(user);
        console.log("row is is "+rowId);
        return processTable(this.userTable,{rowNumbers: [rowId],blankHeaders: ['Selector','Delete','Profile']});
    };

    goToUsers() {
        this.clickUsersBreadcrumb();
        return this;
    };
}

export default UsersPageUiService;


