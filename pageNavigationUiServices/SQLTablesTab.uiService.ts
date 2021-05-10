/**
 * Navigation Service for SQLPrivilegesTab
 * Created by osmolyar on yyyy-mm-dd
 */

// for this page
import SQLTablesTabPage  from '../pageObjects/SQLTablesTab.page';
// other pages that can be reached from this page
import AddTablesUiService  from './AddTables.modal.uiService';
import AddColumnsUiService  from './AddColumns.modal.uiService';
import GrantPrivilegesUiService  from './GrantPrivileges.modal.uiService';
import GenericUtilities  from '../common/utilities/genericUtilities';
import { processTable }  from '../common/utilities/processTable';
import { pushP, popP}  from '../common/utilities/stack_p';


class SQLTablesTabUiService extends SQLTablesTabPage {

    constructor() {
        super();
        pushP(this);
    }

    assignOneTable(SQLTable,schema) {
        this.selectIncludeSystemItems();
        const addTables=this.openAddTables();
        addTables.assignTable(SQLTable,schema);
    };

    assignOneColumn(column,SQLTable,schema) {
        this.selectIncludeSystemItems();
        const addColumns=this.openAddColumns();
        addColumns.assignColumn(column,SQLTable,schema);
    };

    assignSQLTablesWithPermissions(options) {
        this.selectIncludeSystemItems();
        const addTables=this.openAddTables();
        addTables.assignTablesWithPermissions(options);
    };

    assignSQLColumnsWithPermissions(options) {
        this.selectIncludeSystemItems();
        const addColumns=this.openAddColumns();
        addColumns.assignColumnsWithPermissions(options);
    };

    revokePrivilege(SQLTable) {
        this.selectIncludeSystemItems();
        this.clickRevokeLinkByName(SQLTable);
    };

    revokeColumnPrivilege(column,table) {
        this.selectIncludeSystemItems();
        let editColumns=this.editColumns(table);
        editColumns.clickRevokeLinkByName(column);
        editColumns.clickApply();
        editColumns.close();
    };

    editTablePrivileges(options,SQLTable) {
        this.selectIncludeSystemItems();
        const grantPrivileges=this.editPermissions(SQLTable);
        grantPrivileges.editTablePermissions(options);
    };

    editColumnPrivileges(options,column,table) {
        this.selectIncludeSystemItems();
        const grantPrivileges=this.editColumnPermissions(column,table);
        grantPrivileges.editColumnPermissions(options);
    };

    openAddTables() {
        this.clickAddTables();
        return new AddTablesUiService();
    };

    openAddColumns() {
        this.clickAddColumns();
        return new AddColumnsUiService();
    };

    editPermissions(table) {
        this.clickEditLinkByName(table);
        return new GrantPrivilegesUiService();
    };

    editColumnPermissions(column,table) {
        this.clickEditColumnsLinkByName(table);
        let editColumnsModal = new AddColumnsUiService();
        editColumnsModal.clickEditLinkByName(column);
        return new GrantPrivilegesUiService();
    };

    editColumns(column) {
        this.clickEditColumnsLinkByName(column);
        return new AddColumnsUiService();
    };

    getSQLTableRowId(SQLTable) {
        return GenericUtilities.getRowId(this.tablesTable+'/tbody/tr/td[1]',SQLTable);
    };

    processSQLTablesTable(SQLTable) {
        const rowId=this.getSQLTableRowId(SQLTable);
        return processTable(this.tablesTable,{rowNumbers: [rowId],blankHeaders: ['Edit','Revoke']});
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



export default SQLTablesTabUiService;