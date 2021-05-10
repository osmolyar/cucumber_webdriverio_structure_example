/**
 * Navigation Service for SQLPrivilegesTab
 * Created by osmolyar on yyyy-mm-dd
 */

// for this page
import SQLProceduresTabPage  from '../pageObjects/SQLProceduresTab.page';
// other pages that can be reached from this page
import AddProceduresUiService  from './AddProcedures.modal.uiService';
//import AddColumnsUiService  from './AddColumns.modal.uiService';
import GrantPrivilegesUiService  from './GrantPrivileges.modal.uiService';
import GenericUtilities  from '../common/utilities/genericUtilities';
import { processTable }  from '../common/utilities/processTable';
import { pushP, popP}  from '../common/utilities/stack_p';


class SQLProceduresTabUiService extends SQLProceduresTabPage {

    constructor() {
        super();
        pushP(this);
    }

    assignOneProcedure(SQLProcedure,schema) {
        this.selectIncludeSystemItems();
        const addProcedures=this.openAddProcedures();
        addProcedures.assignProcedure(SQLProcedure,schema);
    };

    assignSQLProceduresWithPermissions(options) {
        this.selectIncludeSystemItems();
        const addProcedures=this.openAddProcedures();
        addProcedures.assignProceduresWithPermissions(options);
    };

    revokePrivilege(SQLProcedure) {
        this.selectIncludeSystemItems();
        this.clickRevokeLinkByName(SQLProcedure);
    };

    editProcedurePrivileges(options,SQLProcedure) {
        this.selectIncludeSystemItems();
        const grantPrivileges=this.editPermissions(SQLProcedure);
        grantPrivileges.editProcedurePermissions(options);
    };

    openAddProcedures() {
        this.clickAddProcedures();
        return new AddProceduresUiService();
    };

    editPermissions(procedure) {
        this.clickEditLinkByName(procedure);
        return new GrantPrivilegesUiService();

    };
    getSQLProcedureRowId(SQLProcedure) {
        return GenericUtilities.getRowId(this.SQLProceduresTable+'/tbody/tr/td[1]',SQLProcedure);
    };

    processSQLProceduresTable(SQLProcedure) {
        const rowId=this.getSQLProcedureRowId(SQLProcedure);
        return processTable(this.SQLProceduresTable,{rowNumbers: [rowId],blankHeaders: ['Edit','Revoke']});
    };

    goToEditUser() {
        this.clickEditUserBreadcrumb();
        return popP(true);
    };
    goToEditRole() {
        this.clickEditRoleBreadcrumb();
        return popP(true);
    }
}



export default SQLProceduresTabUiService;