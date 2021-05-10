/**
 * Navigation Service for AddProceduresModal
 * Created by $user on yyyy-mm-dd
 */

// for this page
import AddProceduresModalPage  from '../pageObjects/AddProcedures.modal.page';
import { pushP, popP}  from '../common/utilities/stack_p';
// other pages that can be reached from this page


class AddProceduresModalUiService extends AddProceduresModalPage {

    constructor() {
        super();
        this.switchToIFrame();
        pushP(this);
    };

    assignProcedure(procedure,schema) {
        this.selectASchema(schema);
        if (procedure.toLowerCase()==="all")
            this.assignAllProcedures();
        else {
            this.selectProcedure(procedure);
            this.clickAddOneProcedure();
        }
        this.clickApply();
        this.close();
        return popP(true);
    };

    // Note: will assign all listed procedures with the set of permissions and grant options specified
    assignProceduresWithPermissions(options) {
        this.selectASchema(options.newSQLProcedures.schema);
        const procedures=options.newSQLProcedures.procedures.split(",");
        for (let i = 0; i < procedures.length; i++) {
            if (procedures[i].toLowerCase()==='all')
                this.assignAllProcedures();
            else {
                this.selectProcedure(procedures[i].trim());
                this.clickAddOneProcedure();
            }
        }
        const permissions=options.newSQLProcedures.permissions.split(",");
        for (let i = 0; i < permissions.length; i++) {
            console.log("permissions[i] is "+permissions[i]);
            if (permissions[i]==='All')
                this.selectAllPrivileges();
            else if (permissions[i].trim().toLowerCase().includes("execute")) {
                this.selectExecutePrivilege();
            }
        }
        const grantOptions=options.newSQLProcedures.grantOptions.split(",");
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

    assignAllProcedures() {
        this.clickAddAllProcedures();
    };
    
}



export default AddProceduresModalUiService;