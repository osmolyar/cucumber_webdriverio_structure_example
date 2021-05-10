/**
 * Navigation Service for AddTablesModal
 * Created by $user on yyyy-mm-dd
 */

// for this page
import AddTablesModalPage  from '../pageObjects/AddTables.modal.page';
import { pushP, popP}  from '../common/utilities/stack_p';
// other pages that can be reached from this page


class AddTablesModalUiService extends AddTablesModalPage {

    constructor() {
        super();
        this.switchToIFrame();
        pushP(this);
    };

    assignTable(table,schema) {
        this.selectASchema(schema);
        if (table.toLowerCase()==="all")
            this.assignAllTables();
        else {
            this.selectATable(table);
            this.clickAddOneTable();
        }
        this.clickApply();
        this.close();
        return popP(true);
    };

    // Note: will assign all listed tables with the set of permissions and grant options specified
    assignTablesWithPermissions(options) {
        this.selectASchema(options.newSQLTables.schema);
        const tables=options.newSQLTables.tables.split(",");
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].toLowerCase()==='all')
                this.assignAllTables();
            else {
                this.selectATable(tables[i].trim());
                this.clickAddOneTable();
            }
        }
        const permissions=options.newSQLTables.permissions.split(",");
        for (let i = 0; i < permissions.length; i++) {
            if (permissions[i]==='All')
                this.selectAllPrivileges();
            else if (permissions[i].trim().toLowerCase().includes("select")) {
                this.selectSelectPrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("alter")) {
                this.selectAlterPrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("update")) {
                this.selectUpdatePrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("insert")) {
                this.selectInsertPrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("delete")) {
                this.selectDeletePrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesPrivilege();
            }
        }
        const grantOptions=options.newSQLTables.grantOptions.split(",");
        for (let i = 0; i < grantOptions.length; i++) {
            if (grantOptions[i]==='All')
                this.grantAllAdminPrivileges();
            else if (grantOptions[i].trim().toLowerCase().includes("select")) {
                this.selectSelectGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("alter")) {
                this.selectAlterGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("update")) {
                this.selectUpdateGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("insert")) {
                this.selectInsertGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("delete")) {
                this.selectDeleteGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesGrantAdmin();
            }
        }
        this.clickApply();
        this.close();
        return popP(true);
    };

    assignAllTables() {
        this.clickAddAllTables();
    };
    
}



export default AddTablesModalUiService;