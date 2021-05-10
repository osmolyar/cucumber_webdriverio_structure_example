/**
 * History:
 * Created by osmolyar on yyyy-mm-dd.
 *
 * Description: Locators for RolesTab page
 */
import BasePage  from '../common/pageObjects/base.page';

class SQLPrivilegesTabPageLocators extends BasePage {
    get breadcrumbEditUser() {return $('//*[@id="title"]//a[contains(.,\'Edit User\')]')};
    get breadcrumbEditRole() {return $('//*[@id="title"]//a[contains(.,\'Edit Role\')]')};
    get addOnePrivilege() {return $('//*[@id="SQLPrivs"]/table/tbody/tr[2]/td[2]/div[1]/img')};
    get addAllPrivileges() {return $('//*[@id="SQLPrivs"]/table/tbody/tr[2]/td[2]/div[3]/img')};
    get removeOnePrivilege() {return $('//*[@id="SQLPrivs"]/table/tbody/tr[2]/td[2]/div[2]/img')};
    get removeAllPrivileges() {return $('//*[@id="SQLPrivs"]/table/tbody/tr[2]/td[2]/div[4]/img')};

    get assignPrivilege() {return $('//*[@id="SQLPrivs"]/table/tbody/tr[2]/td[4]/input[1]')};
    get assignWithGrantPermissions() {return $('//*[@id="SQLPrivs"]/table/tbody/tr[2]/td[4]/input[2]')};
    get SQLPrivilegesTable() {return '//*[@id="SQLPrivs"]/div[2]/table'};
    get availablePrivilegesUser() {return '//*[@id="avaList_57"]'};
    get availablePrivilegesRole() {return '//*[@id="avaList_30"]'};
    get switchNamespaceUser() {return '//*[@id="Namespace_57"]'};
    get switchNamespaceRole() {return '//*[@id="Namespace_30"]'};

    availablePrivilege(privilege) {
        if ($(this.availablePrivilegesUser)._isExisting())
            return $(`${this.availablePrivilegesUser}//option[contains(.,"${privilege}")]`);
        else
            return $(`${this.availablePrivilegesRole}//option[contains(.,"${privilege}")]`);
    };

    removeLinkByName(name) {
        return $(`//*[@id="SQLPrivs"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[4]/a`);
    };

    grantOptionByName(name) {
        return $(`//*[@id="SQLPrivs"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[2]/input`);
    };


}
export default SQLPrivilegesTabPageLocators;