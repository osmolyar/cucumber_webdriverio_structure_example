/**
 * Navigation Service for Edit User page RolesTab
 * Also represents Members tab of Edit Role page and Assigned To tab of Edit Rule page
 * Created by osmolyar on 9/27/2018
 */

// for this page
import RolesTabPage  from '../pageObjects/RolesTab.page';
import GenericUtilities  from '../common/utilities/genericUtilities';
import { processTable }  from '../common/utilities/processTable';
import { pushP, popP}  from '../common/utilities/stack_p';
import speed from "../common/config/speed";

class RolesTabUiService extends RolesTabPage {

    constructor() {
        super();
        pushP(this);
        console.log("this in RolesTabUiService is "+ this.constructor.name);
    }

    assignOneRole(options,role) {
        // if (this.rolesRadio && this.rolesRadio._isExisting()) {
        //     this.rolesRadio._setRadio();
        // }
        console.log("selecting role "+ role);
        if (role)
            this.selectRole(role);
        else
            this.selectRole(options.role);
        this.clickAddOneRole();
        if (options.grantOption && options.grantOption!=='false') {
            this.clickAssignWithGrantPermissions();
        } else {
            this.clickAssignRole();
        }
    };

    assignOneUser(options,memberOfUser) {
        if (memberOfUser)
            this.selectUserIncludes(memberOfUser);
        else
            this.selectUserIncludes(options.memberOfUser);
        this.clickAddOneRole();
        if (options.grantOption && options.grantOption!=='false') {
            this.clickAssignWithGrantPermissions();
        } else {
            this.clickAssignRole();
        }
    };


    removeRole(role) {
        this.clickRemoveLinkByName(role);
    };

    clickGrantOption(role) {
        this.clickGrantOptionByName(role);
    };

    assignAllRoles(options) {
        // if (this.rolesRadio && this.element.isExisting(this.rolesRadio)) {
        //     this.element.setRadio(this.rolesRadio);
        // }
        this.clickAddAllRoles();
        if (options.grantOption && options.grantOption!=='false') {
            this.clickAssignWithGrantPermissions();
        } else {
            this.clickAssignRole();
        }
    };

    assignAllUsers(options) {
        this.clickAddAllRoles();
        if (options.grantOption && options.grantOption!=='false') {
            this.clickAssignWithGrantPermissions();
        } else {
            this.clickAssignRole();
        }
    };

    getRoleRowId(role) {
        console.log("role is: "+role);
        let rowId=-1;
        let maxWait=speed.slow;
        let frequency=250;
        while (maxWait > 0 && rowId==-1) {
            rowId=GenericUtilities.getRowId(this.rolesTable+'/tbody/tr/td[1]',role);
            maxWait = maxWait - frequency;
        }
        return rowId;
    };

    processRolesTable(role) {
        const rowId=this.getRoleRowId(role);
        return processTable(this.rolesTable,{rowNumbers: [rowId],blankHeaders: ['Remove']});
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



export default RolesTabUiService;