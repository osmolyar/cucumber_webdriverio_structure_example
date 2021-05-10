/**
 * Navigation Service for SQLPrivilegesTab
 * Created by osmolyar on yyyy-mm-dd
 */

// for this page
import SQLPrivilegesTabPage  from '../pageObjects/SQLPrivilegesTab.page';
import GenericUtilities  from '../common/utilities/genericUtilities';
import { processTable }  from '../common/utilities/processTable';
import { pushP, popP}  from '..//common/utilities/stack_p';

// other pages that can be reached from this page


class SQLPrivilegesTabUiService extends SQLPrivilegesTabPage {

    constructor() {
        super();
        pushP(this);
    }

    assignOnePrivilege(options) {
        this.selectPrivilege(options.privilege);
        this.clickAddOnePrivilege();
        if (options.grantOption && options.grantOption!=='false') {
            this.clickAssignWithGrantPermissions();
        } else {
            this.clickAssignPrivilege();
        }
    };

    assignPrivileges(options) {
        const arrayLength = options.newSQLPrivileges.length;
        for (let i = 0; i < arrayLength; i++) {
            if (options.newSQLPrivileges[i].SQLPrivilege==='All')
                this.assignAllPrivileges(options.newSQLPrivileges[i]);
            else {
                this.selectPrivilege(options.newSQLPrivileges[i].SQLPrivilege);
                this.clickAddOnePrivilege();
                if (options.newSQLPrivileges[i].grantOption && options.newSQLPrivileges[i].grantOption!=='false') {
                    this.clickAssignWithGrantPermissions();
                } else {
                    this.clickAssignPrivilege();
                }
            }
        }
    };

    removePrivilege(privilege) {
        this.clickRemoveLinkByName(privilege);
    };

    clickGrantOption(privilege) {
        this.clickGrantOptionByName(privilege);
    };

    assignAllPrivileges(options) {
        this.clickAddAllPrivileges();
        if (options.grantOption && options.grantOption!=='false') {
            this.clickAssignWithGrantPermissions();
        } else {
            this.clickAssignPrivilege();
        }
    };

    getSQLPrivilegeRowId(SQLPrivilege) {
        return GenericUtilities.getRowId(this.SQLPrivilegesTable+'/tbody/tr/td[1]',SQLPrivilege);
    };

    processSQLPrivilegesTable(SQLPrivilege) {
        const rowId=this.getSQLPrivilegeRowId(SQLPrivilege);
        return processTable(this.SQLPrivilegesTable,{rowNumbers: [rowId],blankHeaders: ['Remove']});
    };

    goToEditUser() {
        this.clickEditUserBreadcrumb();
        return popP(true);
    }

    goToEditRole() {
        this.clickEditRoleBreadcrumb();
        return popP(true);
    }
}

export default SQLPrivilegesTabUiService;