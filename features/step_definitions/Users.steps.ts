import { Given, When, Then }  from 'cucumber';
import GenericUtilities  from '../../common/utilities/genericUtilities';
import UsersUiService from '../../pageNavigationUiServices/Users.uiService';
import EditUserUiService from '../../pageNavigationUiServices/EditUser.uiService';
import RolesTabUiService from '../../pageNavigationUiServices/RolesTab.uiService';
import SQLTablesTabUiService from '../../pageNavigationUiServices/SQLTablesTab.uiService';
import SQLViewsTabUiService from '../../pageNavigationUiServices/SQLViewsTab.uiService';
import SQLProceduresTabUiService from '../../pageNavigationUiServices/SQLProceduresTab.uiService';
import SQLPrivilegesTabUiService from '../../pageNavigationUiServices/SQLPrivilegesTab.uiService';
// import Utilities  from '../../utilities/utilities.ts';
import testConfig from '../../testConfig/wdio.local.config';
import speed from '../../common/config/speed';
import http  from 'http';
import { validateBy, includesValidator}  from '../../utilities/processTable';

let options: any ={};
let editUserPage,userOptions;
let callback = function(response) {
    let str= '';
    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        console.log(str);
    });
};

// language=JSRegexp

//region UsersSteps
Given(/^I navigate to the Users page$/, function () {
    this.nav.usersPage=this.nav.homePage.selectColumnsView().goToSystemAdministrationLeftNav()['goTo'+'Users']();
});

When(/^I create a user$/, function () {    //no colon; uses defaults
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    options=this.context.userBusinessOptions;
    options.login= this.context.userBusinessOptions.login = GenericUtilities.addTimestamp(options.login);
    this.nav.editUserPage=this.nav.usersPage.createNewUser(options,this.context.userValidationOptions);
});

When(/^I create a user with the following options:$/, function (table) {    //expects data table
    console.log("context.page is "+ context.page.constructor.name)
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    options = this.context.userBusinessOptions = table.rowsHash();
    if(options.login) {
        options.login = this.context.userBusinessOptions.login=GenericUtilities.addTimestamp(options.login);
    }
    this.nav.editUserPage=this.nav.usersPage.createNewUser(options,this.context.userValidationOptions);
});

When(/^I create a static user with the following options:$/, function (table) {    //expects data table
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    options = this.context.userBusinessOptions = table.rowsHash();
    this.nav.editUserPage=this.nav.usersPage.createNewUser(options,this.context.userValidationOptions);
});


When(/^I create a user with the given options and assign a role via SQL:$/, function (table) {    //expects data table
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    userOptions = this.context.userBusinessOptions = table.rowsHash();
    console.log("login is "+ options.login);
    const user=this.context.userBusinessOptions.login;
    const role=this.context.userBusinessOptions.role;
    let query1=[];
    query1.push('do $SYSTEM.SQL.Execute("GRANT '+ role+' TO '+user+ '")');
    let query=JSON.stringify(query1);

    this.nav.editUserPage=this.nav.usersPage.createNewUserWithNoRole(userOptions,this.context.userValidationOptions);
    browser.pause(speed.fast);
    let req = http.request(testConfig.config.httpOptions, callback);
    req.write(query);
    req.end();
});

When(/^I delete the user (.*)$/, function (confirm) {
    console.log("context.page is "+context.page.constructor.name);
    if (context.page instanceof EditUserUiService)
        context.page.goToUsers();
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=this.nav.usersPage.deleteUser(options,confirm);
});

When(/^I delete the following user (.*)$/, function (username) {
    console.log("context.page is "+context.page.constructor.name);
    if (context.page instanceof EditUserUiService)
        context.page.goToUsers();
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    this.context.userBusinessOptions.login=username;
    options=this.context.userBusinessOptions;
    this.nav.usersPage=this.nav.homePage.selectColumnsView().goToSystemAdministrationLeftNav().goToUsers();
    this.nav.editUserPage=this.nav.usersPage.deleteUser(options);
});

When(/^I edit the user with the following changes:$/, function (table) {
    console.log("context.page is "+context.page.constructor.name);
    if (context.page instanceof EditUserUiService)
        context.page.goToUsers();
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    options=this.context.userBusinessOptions;
    const newOptions=this.context.editedUserBusinessOptions=table.rowsHash();
    this.nav.editUserPage=this.nav.usersPage.editUser(options,newOptions,this.context.userValidationOptions);
});

Then(/^the Edit User page validation elements are confirmed$/, function (table) {
    const actual=this.context.userValidationOptions;
    const expected=this.context.expectedUserValidationOptions=table.rowsHash();
    assert.include(actual.responseText,expected.responseText);
    if(expected.nameHintRed)
        assert.equal(actual.nameHintRed,expected.nameHintRed);
    if(expected.passwdHintRed)
        assert.equal(actual.passwdHintRed,expected.passwdHintRed);
    if(expected.passwdConfirmHintRed)
        assert.equal(actual.passwdConfirmHintRed,expected.passwdConfirmHintRed);
    if(expected.routineHint)
        assert.equal(actual.routineHint,expected.routineHint);
    if(expected.namespaceHint)
        assert.equal(actual.namespaceHint,expected.namespaceHint);
});

Then(/^the user response should contain (.*)$/, function (responseText) {
    this.context.expectedUserValidationOptions.responseText=responseText;
    const expected=this.context.expectedUserValidationOptions;
    const actual=this.context.userValidationOptions;
    assert.include(actual.responseText,expected.responseText);
//   this.nav.editUserPage.validateResponse(responseText);
});

Then(/^I confirm the user is listed on the Users page (.*)$/, function (status) {
    console.log("context.page is "+context.page.constructor.name);
    if (context.page instanceof EditUserUiService)
        context.page.goToUsers();
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    options=this.context.userBusinessOptions;
    this.nav.usersPage.validateUserNameByRowId(options,status);
});

Then(/^I validate the following subset of columns in the user row (.*)$/, function (exists,table) {
    console.log("context.page is "+context.page.constructor.name);
    if (context.page instanceof EditUserUiService)
        context.page.goToUsers();
    if (!(context.page instanceof UsersUiService)) {
        this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
    }
    console.log('exists is '+ exists);
    if (exists==='true' || exists === 'exists' || exists === undefined) {
        options = this.context.userBusinessOptions;
        const expectedRow = table.hashes();
        if (expectedRow[0].Name) {
            expectedRow[0].Name = options.login;
        }
        console.log("Expected row in step def is "+JSON.stringify(expectedRow));
        const actualRow = this.nav.usersPage.processUsersTable(options.login).tableHash;
        console.log("expected row is: "+JSON.stringify(expectedRow));
        console.log("Actual row is: "+JSON.stringify(actualRow));
        validateBy(expectedRow, actualRow,includesValidator);
        console.log("After validate by");
    }
});

//endregion UsersSteps


//region UserRolesTabSteps

function getToUserGeneralTab(options) {
    if (context.page instanceof EditUserUiService) {
        editUserPage = context.page;
    } else if (context.page instanceof UsersUiService) {
        console.log("Navigating to edit user page from users page");
        editUserPage = this.nav.usersPage.openUser(options);
    } else if (context.page instanceof RolesTabUiService || context.page instanceof SQLPrivilegesTabUiService || context.page instanceof SQLTablesTabUiService || context.page instanceof SQLProceduresTabUiService || context.page instanceof SQLViewsTabUiService) {
        editUserPage=context.page.goToEditUser();
    } else {
        console.log("Navigating to edit user page");
        this.nav.usersPage = this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
        editUserPage = this.nav.usersPage.openUser(options);
    }
    this.nav.editUserPage=editUserPage;
    return editUserPage;
}

function getToUserRolesTab(options)  {
    let rolesTab;
    if (!(context.page instanceof RolesTabUiService) ) {
        if (context.page instanceof EditUserUiService) {
            rolesTab=this.nav.editUserPage.switchToRolesTab();
        } else if (context.page instanceof UsersUiService) {
            console.log("Navigating to roles tab page from users page");
            rolesTab=this.nav.usersPage.openUser(options).switchToRolesTab();
        } else {
            console.log("Navigating to roles tab page");
            this.nav.usersPage = this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
            rolesTab=this.nav.usersPage.openUser(options).switchToRolesTab();
        }
    } else {
        rolesTab=context.page;
    }
    return rolesTab;
}

When(/^I assign the role (.*) to the user$/, function (role) {
    console.log("context.page is "+context.page.constructor.name);
    this.context.userBusinessOptions.role=role;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addRoleToUser(options,this.nav.editUserPage);
});

When(/^I remove the role (.*) from the user$/, function (role) {
    console.log("context.page is "+context.page.constructor.name);
    this.context.userBusinessOptions.role=role;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.removeRoleFromUser(options,this.nav.editUserPage);
});

When(/^I add grant option to the role (.*)$/, function (role) {
    console.log("context.page is "+context.page.constructor.name);
    this.context.userBusinessOptions.role=role;
    options = this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addGrantOptionToRole(options,this.nav.editUserPage);
});


Then(/^I validate the following subset of columns for the role (.*) on the User page roles tab$/, function (role,table) {
    console.log("context.page is "+context.page.constructor.name);
    options = this.context.userBusinessOptions;
    console.log(context.page.constructor.name);
    this.context.rolesTabPage=getToUserRolesTab(options);
    const expectedRow = table.hashes();
    const actualRow = this.context.rolesTabPage.processRolesTable(role).tableHash;
    console.log("expected row is: "+JSON.stringify(expectedRow));
    console.log("Actual row is: "+JSON.stringify(actualRow));
    validateBy(expectedRow, actualRow,includesValidator);
});

//endregion UserRoleTabSteps


//region UserSQLPrivilegesSteps

function getToUserSQLPrivilegesTab(options)  {
    let privilegesTab;
    if (!(context.page instanceof SQLPrivilegesTabUiService) ) {
        if (context.page instanceof EditUserUiService) {
            privilegesTab=context.page.switchToPrivilegesTab();
        } else if (context.page instanceof UsersUiService) {
            console.log("Navigating to SQL Privileges tab page from users page");
            privilegesTab=this.nav.usersPage.openUser(options).switchToPrivilegesTab();
        } else {
            console.log("Navigating to SQL Privileges tab page");
            this.nav.usersPage = this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
            privilegesTab=this.nav.usersPage.openUser(options).switchToPrivilegesTab();
        }
    } else {
        privilegesTab=context.page;
    }
    return privilegesTab;
}

When(/^I assign the SQL privilege (.*) to the user$/, function (privilege) {
    this.context.userBusinessOptions.privilege=privilege;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addPrivilegeToUser(options,this.nav.editUserPage);
});

When(/^I assign the following SQL privileges to the user:$/, function (table) {
    //filter out array entries with null resource
    this.context.userBusinessOptions.newSQLPrivileges = table.hashes().filter(function(val) {
        return val.SQLPrivilege;
    });
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLPrivilegesToUser(options,this.nav.editUserPage);
});

When(/^I remove the privilege (.*) from the user$/, function (privilege) {
    this.context.userBusinessOptions.privilege=privilege;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.removePrivilegeFromUser(options,this.nav.editUserPage);
});

When(/^I add grant option to the user SQL privilege (.*)$/, function (privilege) {
    this.context.userBusinessOptions.privilege=privilege;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addGrantOptionToPrivilege(options,this.nav.editUserPage);
});

Then(/^I validate the following subset of columns for the SQL Privilege (.*) on the User page SQL Privileges tab$/, function (privilege,table) {
    this.context.userBusinessOptions.privilege=privilege;
    options = this.context.userBusinessOptions;
    console.log("context.page.constructor.name is "+context.page.constructor.name);
    context.privilegesTabPage=getToUserSQLPrivilegesTab(options);
    const expectedRow = table.hashes();
    const actualRow = context.privilegesTabPage.processSQLPrivilegesTable(options.privilege).tableHash;
    // context.privilegesTabPage.goToEditUser();
    console.log("expected row is: "+JSON.stringify(expectedRow));
    console.log("Actual row is: "+JSON.stringify(actualRow));
    validateBy(expectedRow, actualRow,includesValidator);
});
//endregion UserSQLPrivilegesSteps

//region UserSQLTablesSteps

function getToUserSQLTablesTab(options)  {
    let tablesTab;
    if (!(context.page instanceof SQLTablesTabUiService) ) {
        if (context.page instanceof EditUserUiService) {
            tablesTab=context.page.switchToTablesTab();
        } else if (context.page instanceof UsersUiService) {
            console.log("Navigating to SQL Tables tab page from users page");
            tablesTab=this.nav.usersPage.openUser(options).switchToTablesTab();
        } else {
            console.log("Navigating to SQL Tables tab page");
            this.nav.usersPage = this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
            tablesTab=this.nav.usersPage.openUser(options).switchToTablesTab();
        }
    } else {
        tablesTab=context.page;
    }
    return tablesTab;
}

When(/^I assign the SQL table privilege (.*) in schema (.*) to the user$/, function (SQLTable,schema) {
    console.log("Adding SQL table privilege to user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.table=SQLTable;
    this.context.userBusinessOptions.schema=schema;
    options=this.context.userBusinessOptions;
    getToUserSQLTablesTab(options);
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLTableToUser(options,this.nav.editUserPage);
});

When(/^I assign the SQL table column (.*) of table (.*) in schema (.*) to the user$/, function (column, SQLTable,schema) {
    console.log("Adding SQL table privilege to user");
    this.context.userBusinessOptions.column=column;
    this.context.userBusinessOptions.table=SQLTable;
    this.context.userBusinessOptions.schema=schema;
    options=this.context.userBusinessOptions;
    console.log("context.page is "+ context.page.constructor.name);
    getToUserSQLTablesTab(options);
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addTableColumnToUser(options,this.nav.editUserPage);
});

//table is a key-value list with keys "schema" "tables", "permissions","grantOptions"
//"tables" is a comma-delimited list of tables
//"permissions" is a comma-delimited list of table permissions
//"grantOptions" is a comma-delimited list of table permissions having grant options
//all tables specified for given step invocation will receive the set of permissions/grant options specified for set of tables
When(/^I assign the following SQL table privileges to the user:$/, function (table) {
    console.log("Adding SQL table privileges to user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.newSQLTables = table.rowsHash();
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLTablesWithPrivilegesToUser(options,this.nav.editUserPage);
});

//table is a key-value list with keys "schema" ,"table", "columns", "permissions","grantOptions"
//"columns" is a comma-delimited list of tables
//"permissions" is a comma-delimited list of table permissions
//"grantOptions" is a comma-delimited list of table permissions having grant options
//all columns specified for given step invocation will receive the set of permissions/grant options specified for set of tables
When(/^I assign the following SQL column privileges to the user:$/, function (table) {
    console.log("Adding SQL table privileges to user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.newSQLColumns = table.rowsHash();
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLColumnsWithPrivilegesToUser(options,this.nav.editUserPage);
});

When(/^I revoke the SQL table privilege (.*) from the user$/, function (SQLTable) {
    console.log("Revoking SQL table "+SQLTable+" privilege from user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.table=SQLTable;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.revokeSQLTableFromUser(options,this.nav.editUserPage);
});

When(/^I revoke the SQL column privilege (.*) in table (.) from the user$/, function (column,SQLTable) {
    console.log("Revoking SQL column privilege " + column +" from user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.column=column;
    this.context.userBusinessOptions.table=SQLTable;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.revokeSQLColumnFromUser(options,this.nav.editUserPage);
});

//table is a key-value list with keys  "permissions","grantOptions"
//"permissions" is a comma-delimited list of table permissions
//"grantOptions" is a comma-delimited list of table permissions having grant options
//all tables specified for given step invocation will receive the set of permissions/grant options specified for set of table
When(/^I edit the user SQL table privilege (.*) to add the following permissions:$/, function (SQLTable,table) {
    this.context.userBusinessOptions.newSQLTablePermissions = table.rowsHash();
    this.context.userBusinessOptions.table=SQLTable;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.editSQLTablePrivileges(options,this.nav.editUserPage);
});

//table is a key-value list with keys  "permissions","grantOptions"
//"permissions" is a comma-delimited list of table permissions
//"grantOptions" is a comma-delimited list of table permissions having grant options
//all columns specified for given step invocation will receive the set of permissions/grant options specified for set of table
When(/^I edit the user SQL column privilege (.*) in table (.*) to add the following permissions:$/, function (column,SQLTable,table) {
    this.context.userBusinessOptions.newSQLColumnPermissions = table.rowsHash();
    this.context.userBusinessOptions.column=column;
    this.context.userBusinessOptions.table=SQLTable;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.editSQLColumnPrivileges(options,this.nav.editUserPage);
});

Then(/^I validate the following subset of columns for the SQL Table (.*) in schema (.*) on the User page SQL Tables tab$/, function (SQLTable,schema,table) {
    this.context.userBusinessOptions.table=SQLTable;
    options = this.context.userBusinessOptions;
    console.log("context.page.constructor.name is "+context.page.constructor.name);
    this.context.tablesTabPage=getToUserSQLTablesTab(options);
    const expectedRow = table.hashes();
    if (expectedRow[0].Name) {
        expectedRow[0].Name = schema+"."+SQLTable;
    }
    const actualRow = this.context.tablesTabPage.processSQLTablesTable(options.table).tableHash;
    console.log("expected row is: "+JSON.stringify(expectedRow));
    console.log("Actual row is: "+JSON.stringify(actualRow));
    validateBy(expectedRow, actualRow,includesValidator);
});

//endregion UserSQLTablesSteps

//region UserSQLViewsSteps

function getToUserSQLViewsTab(options)  {
    let viewsTab;
    if (!(context.page instanceof SQLViewsTabUiService) ) {
        if (context.page instanceof EditUserUiService) {
            viewsTab=context.page.switchToViewsTab();
        } else if (context.page instanceof UsersUiService) {
            console.log("Navigating to SQL Views tab page from users page");
            viewsTab=this.nav.usersPage.openUser(options).switchToViewsTab();
        } else {
            console.log("Navigating to SQL Views tab page");
            this.nav.usersPage = this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
            viewsTab=this.nav.usersPage.openUser(options).switchToViewsTab();
        }
    } else {
        viewsTab=context.page;
    }
    return viewsTab;
}

When(/^I assign the SQL view privilege (.*) in schema (.*) to the user$/, function (SQLView,schema) {
    console.log("Adding SQL view privilege to user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.view=SQLView;
    this.context.userBusinessOptions.schema=schema;
    options=this.context.userBusinessOptions;
    getToUserSQLViewsTab(options);
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLViewToUser(options,this.nav.editUserPage);
});

//view is a key-value list with keys "schema" "views", "permissions","grantOptions"
//"views" is a comma-delimited list of views
//"permissions" is a comma-delimited list of view permissions
//"grantOptions" is a commma-delimited list of view permissions having grant options
//all views specified for given step invocation will receive the set of permissions/grant options specified for set of views
When(/^I assign the following SQL view privileges to the user:$/, function (table) {
    console.log("Adding SQL view privileges to user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.newSQLViews = table.rowsHash();
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLViewsWithPrivilegesToUser(options,this.nav.editUserPage);
});

When(/^I revoke the SQL view privilege (.*) from the user$/, function (SQLView) {
    console.log("Revoking SQL view privilege from user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.view=SQLView;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.revokeSQLViewFromUser(options,this.nav.editUserPage);
});

//view is a key-value list with keys  "permissions","grantOptions"
//"permissions" is a comma-delimited list of view permissions
//"grantOptions" is a commma-delimited list of view permissions having grant options
//all views specified for given step invocation will receive the set of permissions/grant options specified for set of view
When(/^I edit the user SQL view privilege (.*) to add the following permissions:$/, function (SQLView,table) {
    this.context.userBusinessOptions.newSQLViewPermissions = table.rowsHash();
    this.context.userBusinessOptions.view=SQLView;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.editSQLViewPrivileges(options,this.nav.editUserPage);
});

Then(/^I validate the following subset of columns for the user SQL View (.*) in schema (.*) on the User page SQL Views tab$/, function (SQLView,schema,table) {
    this.context.userBusinessOptions.view=SQLView;
    this.context.userBusinessOptions.schema=schema;
    options = this.context.userBusinessOptions;
    console.log("context.page.constructor.name is "+context.page.constructor.name);
    this.context.viewsTabPage=getToUserSQLViewsTab(options);
    const expectedRow = table.hashes();
    if (expectedRow[0].Name) {
        expectedRow[0].Name = this.context.userBusinessOptions.schema+"."+this.context.userBusinessOptions.view;
    }
    const actualRow = this.context.viewsTabPage.processSQLViewsTable(this.context.userBusinessOptions.view).tableHash;
    console.log("expected row is: "+JSON.stringify(expectedRow));
    console.log("Actual row is: "+JSON.stringify(actualRow));
    validateBy(expectedRow, actualRow,includesValidator);
});
//endregion UserSQLViewsSteps

//region UserSQLProceduresSteps

function getToUserSQLProceduresTab(options)  {
    let proceduresTab;
    if (!(context.page instanceof SQLProceduresTabUiService) ) {
        if (context.page instanceof EditUserUiService) {
            proceduresTab=context.page.switchToProceduresTab();
        } else if (context.page instanceof UsersUiService) {
            console.log("Navigating to SQL Procedures tab page from users page");
            proceduresTab=this.nav.usersPage.openUser(options).switchToProceduresTab();
        } else {
            console.log("Navigating to SQL Procedures tab page");
            this.nav.usersPage = this.nav.homePage.goHome().goToSystemAdministrationLeftNav().goToUsers();
            proceduresTab=this.nav.usersPage.openUser(options).switchToProceduresTab();
        }
    } else {
        proceduresTab=context.page;
    }
    return proceduresTab;
}

When(/^I assign the SQL procedure privilege (.*) in schema (.*) to the user$/, function (SQLProcedure,schema) {
    console.log("Adding SQL procedure privilege to user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.procedure=SQLProcedure;
    this.context.userBusinessOptions.schema=schema;
    options=this.context.userBusinessOptions;
    getToUserSQLProceduresTab(options);
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLProcedureToUser(options,this.nav.editUserPage);
});

//procedure is a key-value list with keys "schema" "procedures", "permissions","grantOptions"
//"procedures" is a comma-delimited list of procedures
//"permissions" is a comma-delimited list of procedure permissions
//"grantOptions" is a comma-delimited list of procedure permissions having grant options
//all procedures specified for given step invocation will receive the set of permissions/grant options specified for set of procedures
When(/^I assign the following SQL procedure privileges to the user:$/, function (table) {
    console.log("Adding SQL procedure privileges to user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.newSQLProcedures = table.rowsHash();
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.addSQLProceduresWithPrivilegesToUser(options,this.nav.editUserPage);
});

When(/^I revoke the SQL procedure privilege (.*) from the user$/, function (SQLProcedure) {
    console.log("Revoking SQL procedure privilege from user");
    console.log("context.page is "+ context.page.constructor.name);
    this.context.userBusinessOptions.procedure=SQLProcedure;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.revokeSQLProcedureFromUser(options,this.nav.editUserPage);
});

//procedure is a key-value list with keys  "permissions","grantOptions"
//"permissions" is a comma-delimited list of procedure permissions
//"grantOptions" is a commma-delimited list of procedure permissions having grant options
//all procedures specified for given step invocation will receive the set of permissions/grant options specified for set of procedure
When(/^I edit the user SQL procedure privilege (.*) to add the following permissions:$/, function (SQLProcedure,table) {
    this.context.userBusinessOptions.newSQLProcedurePermissions = table.rowsHash();
    this.context.userBusinessOptions.procedure=SQLProcedure;
    options=this.context.userBusinessOptions;
    this.nav.editUserPage=getToUserGeneralTab(options);
    this.nav.usersPage.editSQLProcedurePrivileges(options,this.nav.editUserPage);
});

Then(/^I validate the following subset of columns for the SQL Procedure (.*) in schema (.*) on the User page SQL Procedures tab$/, function (SQLProcedure,schema,table) {
    this.context.userBusinessOptions.procedure=SQLProcedure;
    this.context.userBusinessOptions.schema=schema;
    options = this.context.userBusinessOptions;
    console.log("context.page.constructor.name is "+context.page.constructor.name);
    this.context.proceduresTabPage=getToUserSQLProceduresTab(options);
    const expectedRow = table.hashes();
    if (expectedRow[0].Name) {
        expectedRow[0].Name = options.schema+"."+options.procedure;
    }
    const actualRow = this.context.proceduresTabPage.processSQLProceduresTable(options.procedure).tableHash;
    console.log("expected row is: "+JSON.stringify(expectedRow));
    console.log("Actual row is: "+JSON.stringify(actualRow));
    validateBy(expectedRow, actualRow,includesValidator);
});
//endregion UserSQLProceduresSteps

//region SQLSteps

Then(/^I confirm the user exists in the database (.*)$/, function (exists) {
    const user=this.context.userBusinessOptions.login;
    const userlc=user.toLowerCase();
    let query: any=[];
    query.push('zn "%SYS"');
    query.push('set result= $SYSTEM.SQL.Execute("SELECT Name FROM Security.Users where id = \''+ userlc+'\'")');
    query.push('do result.%Display()');  //this outputs the result but it doesn't get returned as the POST result
    query=JSON.stringify(query);
    let result='';
    let callback = function(response) {
        let str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            console.log("In confirm user exists in the database response is" +str);
            result=str;
            const contains=result.includes(user);
            if(exists==='true' ||exists==='' || exists==='exists' || user==='' )
                assert.equal(contains,true);
            else
                assert.equal(contains,false);
        });
    };
    //This is the data we are posting, it needs to be a string or a buffer
    browser.pause(speed.fast);
    let req = http.request(testConfig.config.httpOptions, callback);
    req.write(query);
    req.end();
});

Then(/^I confirm via SQL that the new role (.*) has been assigned to the user (.*)$/, function (role,assigned) {
    const user=this.context.userBusinessOptions.login.toLowerCase();
    let query: any=[];
    query.push('zn "%SYS"');
    query.push('set result= $SYSTEM.SQL.Execute("SELECT Roles FROM Security.Users where id = \''+ user+'\'")');
    query.push('do result.%Display()');  //this outputs the result but it doesn't get returned as the POST result
    query=JSON.stringify(query);
    let result='';
    let callback = function(response) {
        let str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            console.log("response is" +str);
            result=str;
            const contains=result.includes(role);
            if (assigned==='true' || !assigned)
                assert.equal(contains,true);
            else
                assert.equal(contains,false);
        });
    };
    //This is the data we are posting, it needs to be a string or a buffer
    browser.pause(speed.slow);
    let req = http.request(testConfig.config.httpOptions, callback);
    req.write(query);
    req.end();
});


Then(/^I confirm via SQL that the role has been assigned to the user (.*)$/, function (assigned) {
    const user=this.context.userBusinessOptions.login.toLowerCase();
    const role=this.context.userBusinessOptions.role;
    let query: any=[];
    query.push('zn "%SYS"');
    query.push('set result= $SYSTEM.SQL.Execute("SELECT Roles FROM Security.Users where id = \''+ user+'\'")');
    query.push('do result.%Display()');  //this outputs the result but it doesn't get returned as the POST result
    query=JSON.stringify(query);
    let result='';
    let callback = function(response) {
        let str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            console.log("response is" +str);
            result=str;
            const contains=result.includes(role);
            if (assigned==='true' || !assigned)
                assert.equal(contains,true);
            else
                assert.equal(contains,false);
        });
    };
    //This is the data we are posting, it needs to be a string or a buffer
    browser.pause(speed.maxSpec);
    let req = http.request(testConfig.config.httpOptions, callback);
    req.write(query);
    req.end();
});

Then(/^I assign the role (.*) to the user via SQL$/, function (role) {
    const user=this.context.userBusinessOptions.login+'@iscinternal.com';
    let query: any =[];
    query.push('do $SYSTEM.SQL.Execute("GRANT '+ role+' TO '+user+ '")');
    query=JSON.stringify(query);
    //This is the data we are posting, it needs to be a string or a buffer
    browser.pause(speed.fast);
    let req = http.request(testConfig.config.httpOptions, callback);
    req.write(query);
    req.end();
});

//endregion SQLSteps