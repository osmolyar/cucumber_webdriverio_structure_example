/**
 * Navigation Service for AddColumnsModal
 * Created by $user on yyyy-mm-dd
 */

// for this page
import AddColumnsModalPage  from '../pageObjects/AddColumns.modal.page';
import { pushP, popP}  from '../common/utilities/stack_p';
// other pages that can be reached from this page


class AddColumnsModalUiService extends AddColumnsModalPage {

    constructor() {
        super();
        this.switchToIFrame();
        pushP(this);
    };

    assignColumn(column,table,schema) {
        this.selectASchema(schema);
        this.selectATable(table);
        if (column.toLowerCase()==="all")
            this.assignAllColumns();
        else {
            // this.selectColumn(column);  //blocked - no HTML select
            // this.clickAddOneColumn();
        }
        this.clickApply();
        this.close();
        return popP(true);
    };

    // Note: will assign all listed columns with the set of permissions and grant options specified
    assignColumnsWithPermissions(options) {
        this.selectASchema(options.newSQLColumns.schema);
        if (options.newSQLColumns.table)
            this.selectATable(options.newSQLColumns.table);
        else if (options.newSQLColumns.view)
            this.selectAView(options.newSQLColumns.view);
        const columns=options.newSQLColumns.columns.split(",");
        for (let i = 0; i < columns.length; i++) {
            if (columns[i].toLowerCase()==='all')
                this.assignAllColumns();
            else {
                // this.selectColumn(columns[i].trim());  //blocked - not HTML select
                // this.clickAddOneColumn();
            }
        }
        const permissions=options.newSQLColumns.permissions.split(",");
        for (let i = 0; i < permissions.length; i++) {
            if (permissions[i]==='All')
                this.selectAllPrivileges();
            else if (permissions[i].trim().toLowerCase().includes("select")) {
                this.selectSelectPrivilege();
            }  else if (permissions[i].trim().toLowerCase().includes("update")) {
                this.selectUpdatePrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("insert")) {
                this.selectInsertPrivilege();
            }  else if (permissions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesPrivilege();
            }
        }
        const grantOptions=options.newSQLColumns.grantOptions.split(",");
        for (let i = 0; i < grantOptions.length; i++) {
            if (grantOptions[i]==='All')
                this.grantAllAdminPrivileges();
            else if (grantOptions[i].trim().toLowerCase().includes("select")) {
                this.selectSelectGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("update")) {
                this.selectUpdateGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("insert")) {
                this.selectInsertGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesGrantAdmin();
            }
        }
        this.clickApply();
        this.close();
        return popP(true);
    };

    assignAllColumns() {
        this.clickAddAllColumns();
    };
    
}



export default AddColumnsModalUiService;