/**
 * Navigation Service for GrantPrivilegesModal
 * Created by $user on yyyy-mm-dd
 */

// for this page
import GrantPrivilegesModalPage  from '../pageObjects/GrantPrivileges.modal.page';
import { pushP, popP}  from '../common/utilities/stack_p';
// other pages that can be reached from this page

class GrantPrivilegesModalUiService extends GrantPrivilegesModalPage {

    constructor() {
        super();
        this.switchToIFrame();
        pushP(this);
    };

    // Note: will assign all listed tables with the set of permissions and grant options specified
   editTablePermissions( options) {
        const permissions=options.newSQLTablePermissions.permissions.split(",");
        for (let i = 0; i < permissions.length; i++) {
           console.log("permissions[i] is "+permissions[i]);
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
            } else if (permissions[i].trim().toLowerCase().includes("alter")) {
                this.selectAlterPrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("delete")) {
                this.selectDeletePrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesPrivilege();
            }
        }
       const grantOptions=options.newSQLTablePermissions.grantOptions.split(",");
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
            } else if (grantOptions[i].trim().toLowerCase().includes("alter")) {
                this.selectAlterGrantAdmin();
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

    // Note: will assign all listed tables with the set of permissions and grant options specified
    editViewPermissions( options) {
        const permissions=options.newSQLViewPermissions.permissions.split(",");
        for (let i = 0; i < permissions.length; i++) {
            console.log("permissions[i] is "+permissions[i]);
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
            } else if (permissions[i].trim().toLowerCase().includes("alter")) {
                this.selectAlterPrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("delete")) {
                this.selectDeletePrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesPrivilege();
            }
        }
        const grantOptions=options.newSQLViewPermissions.grantOptions.split(",");
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
            } else if (grantOptions[i].trim().toLowerCase().includes("alter")) {
                this.selectAlterGrantAdmin();
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

    // Note: will assign all listed tables with the set of permissions and grant options specified
    editProcedurePermissions( options) {
        const permissions=options.newSQLProcedurePermissions.permissions.split(",");
        for (let i = 0; i < permissions.length; i++) {
            console.log("permissions[i] is "+permissions[i]);
            if (permissions[i]==='All')
                this.selectAllPrivileges();
            else if (permissions[i].trim().toLowerCase().includes("execute")) {
                this.selectExecutePrivilege();
            }
        }
        const grantOptions=options.newSQLProcedurePermissions.grantOptions.split(",");
        for (let i = 0; i < grantOptions.length; i++) {
            if (grantOptions[i]==='All')
                this.grantAllAdminPrivileges();
             else if (grantOptions[i].trim().toLowerCase().includes("execute")) {
                this.selectExecuteGrantAdmin();
            }
        }
        this.clickApply();
        this.close();
        return popP(true);
    };

    editColumnPermissions( options) {
        const permissions=options.newSQLColumnPermissions.permissions.split(",");
        for (let i = 0; i < permissions.length; i++) {
            console.log("permissions[i] is "+permissions[i]);
            if (permissions[i]==='All')
                this.selectAllPrivileges();
            else if (permissions[i].trim().toLowerCase().includes("select")) {
                this.selectSelectPrivilege();
            }else if (permissions[i].trim().toLowerCase().includes("update")) {
                this.selectUpdatePrivilege();
            } else if (permissions[i].trim().toLowerCase().includes("insert")) {
                this.selectInsertPrivilege();
            }  else if (permissions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesPrivilege();
            }
        }
        const grantOptions=options.newSQLColumnPermissions.grantOptions.split(",");
        for (let i = 0; i < grantOptions.length; i++) {
            if (grantOptions[i]==='All')
                this.grantAllAdminPrivileges();
            else if (grantOptions[i].trim().toLowerCase().includes("select")) {
                this.selectSelectGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("update")) {
                this.selectUpdateGrantAdmin();
            } else if (grantOptions[i].trim().toLowerCase().includes("insert")) {
                this.selectInsertGrantAdmin();
            }  else if (grantOptions[i].trim().toLowerCase().includes("references")) {
                this.selectReferencesGrantAdmin();
            }
        }
        this.clickApply();
        this.close();
        popP();
        return popP();
    };

}

export default GrantPrivilegesModalUiService;