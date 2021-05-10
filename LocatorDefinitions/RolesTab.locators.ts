/**
 * History:
 * Created by $user on yyyy-mm-dd.
 *
 * Description: Locators for RolesTab page
 */
import BasePage  from '../common/pageObjects/base.page';

class RolesTabPageLocators extends BasePage {

    get rolesTable() {return '//*[@id="UserRoles"]/div[1]/table'};

    get availableRoles() {return $('//*[@id="avaList_54"]')};
    get addOneRole() {return $('//*[@id="UserRoles"]/table/tbody/tr[2]/td[2]/div[1]/img')};
    get addAllRoles() {return $('//*[@id="UserRoles"]/table/tbody/tr[2]/td[2]/div[3]/img')};
    get removeOneRole() {return $('//*[@id="UserRoles"]/table/tbody/tr[2]/td[2]/div[2]/img')};
    get removeAllRoles() {return $('//*[@id="UserRoles"]/table/tbody/tr[2]/td[2]/div[4]/img')};

    get assignRole() {return $('//*[@id="UserRoles"]/table/tbody/tr[2]/td[4]/input[1]')};
    get assignWithGrantPermissions() {return $('//*[@id="UserRoles"]/table/tbody/tr[2]/td[4]/input[2]')};
    get breadcrumbEditUser() {return $('//*[@id="title"]//a[contains(.,\'Edit User\')]')};
    get breadcrumbEditRole() {return $('//*[@id="title"]//a[contains(.,\'Edit Role\')]')};

    nameLink(rowId) {
        return $('//*[@id="UserRoles"]/div[1]/table/tbody/tr[' + rowId + ']/td[1]/a');
    };

    name(rowId) {
        return $('//*[@id="UserRoles"]/div[1]/table/tbody/tr[' + rowId + ']/td[1]');
    };

    grantOption(rowId) {
        return $('//*[@id="UserRoles"]/div[1]/table/tbody/tr[' + rowId + ']/td[2]/input');
    };

    removeLink(rowId) {
        return $('//*[@id="UserRoles"]/div[1]/table/tbody/tr[' + rowId + ']/td[3]/a');
    };

    removeLinkByName(name) {
        const string="zenPage.getComponent('54').doRemoveRole(\'" + name + "\',\'UserRole\');";
        return $('//*[@id="UserRoles"]/div[1]/table/tbody//a[@onclick=\"' +string+ '\"]');
    };

    grantOptionByName(name) {
        const string="zenPage.getComponent('54').doChangeGrantOption(\'" + name + "\',this.checked);";
        return $('//*[@id="UserRoles"]/div[1]/table/tbody//input[@onclick=\"' +string+ '\"]');
    };


}
export default RolesTabPageLocators;