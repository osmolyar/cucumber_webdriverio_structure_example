/**
 * Navigation Service for AddViewsModal
 * Created by $user on yyyy-mm-dd
 */

// for this page
import AddViewsModalPage  from '../pageObjects/AddViews.modal.page';
import { pushP, popP}  from '../common/utilities/stack_p';
// other pages that can be reached from this page

class AddViewsModalUiService extends AddViewsModalPage {

    constructor() {
        super();
        this.switchToIFrame();
        pushP(this);
    };

    assignView(view,schema) {
        this.selectASchema(schema);
        if (view.toLowerCase()==="all")
            this.assignAllViews();
        else {
            this.selectView(view);
            this.clickAddOneView();
        }
        this.clickApply();
        this.close();
        return popP(true);
    };

    // Note: will assign all listed views with the set of permissions and grant options specified
    assignViewsWithPermissions(options) {
        this.selectASchema(options.newSQLViews.schema);
        const views=options.newSQLViews.views.split(",");
        for (let i = 0; i < views.length; i++) {
            if (views[i].toLowerCase()==='all')
                this.assignAllViews();
            else {
                this.selectView(views[i].trim());
                this.clickAddOneView();
            }
        }
        const permissions=options.newSQLViews.permissions.split(",");
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
        const grantOptions=options.newSQLViews.grantOptions.split(",");
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

    assignAllViews() {
        this.clickAddAllViews();
    };
}

export default AddViewsModalUiService;