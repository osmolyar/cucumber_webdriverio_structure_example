/**
 * Navigation Service for SQLPrivilegesTab
 * Created by osmolyar on yyyy-mm-dd
 */

// for this page
import SQLViewsTabPage  from '../pageObjects/SQLViewsTab.page';
// other pages that can be reached from this page
import AddViewsUiService  from './AddViews.modal.uiService';
//import AddColumnsUiService  from './AddColumns.modal.uiService';
import GrantPrivilegesUiService  from './GrantPrivileges.modal.uiService';
import GenericUtilities  from '../common/utilities/genericUtilities';
import { processTable }  from '../common/utilities/processTable';
import { pushP, popP}  from '../common/utilities/stack_p';


class SQLViewsTabUiService extends SQLViewsTabPage {

    constructor() {
        super();
        pushP(this);
    }

    assignOneView(SQLView,schema) {
        this.selectIncludeSystemItems();
        const addViews=this.openAddViews();
        addViews.assignView(SQLView,schema);
    };

    assignSQLViewsWithPermissions(options) {
        this.selectIncludeSystemItems();
        const addViews=this.openAddViews();
        addViews.assignViewsWithPermissions(options);
    };

    revokePrivilege(SQLView) {
        this.selectIncludeSystemItems();
        this.clickRevokeLinkByName(SQLView);
    };

    editViewPrivileges(options,SQLView) {
        this.selectIncludeSystemItems();
        const grantPrivileges=this.editPermissions(SQLView);
        grantPrivileges.editViewPermissions(options);
    };

    openAddViews() {
        this.clickAddViews();
        return new AddViewsUiService();
    };

    // openAddColumns() {  //columns blocked because table select on tab is not HTML element
    //     this.clickAddColumns();
    //     return new AddColumnsUiService();
    // };

    editPermissions(view) {
        this.clickEditLinkByName(view);
        return new GrantPrivilegesUiService();

    };
    getSQLViewRowId(SQLView) {
        return GenericUtilities.getRowId(this.SQLViewsTable+'/tbody/tr/td[1]',SQLView);
    };

    processSQLViewsTable(SQLView) {
        const rowId=this.getSQLViewRowId(SQLView);
        return processTable(this.SQLViewsTable,{rowNumbers: [rowId],blankHeaders: ['Edit','Revoke']});
    };

    goToEditUser() {
        console.log("clicking Edit User breadcrumb");
        this.clickEditUserBreadcrumb();
        return popP(true);
    };
    goToEditRole() {
        this.clickEditRoleBreadcrumb();
        return popP(true);
    }
}



export default SQLViewsTabUiService;