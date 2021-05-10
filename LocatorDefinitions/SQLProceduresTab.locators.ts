/**
 * History:
 * Created by osmolyar on yyyy-mm-dd.
 *
 * Description: Locators for RolesTab page
 */
import BasePage  from '../common/pageObjects/base.page';

class SQLProceduresTabPageLocators extends BasePage {

    get SQLProceduresTable() {return '//*[@id="SQLProcs"]/div[2]/table'};
    get breadcrumbEditUser() {return $('//*[@id="title"]//a[contains(.,\'Edit User\')]')};
    get breadcrumbEditRole() {return $('//*[@id="title"]//a[contains(.,\'Edit Role\')]')};
    get addProceduresButton() {return $('//*[@id="SQLProcs"]/div[1]/input[1]')};
    get includeSystemItemsUser() { return $('//*[@id="SystemItems_66"]')};
    get includeSystemItems() {return this.includeSystemItemsUser._isExisting() ? $('//*[@id="SystemItems_66"]')  : $('//*[@id="SystemItems_39"]') }
    get switchNamespace() {return this.includeSystemItemsUser._isExisting() ? $('//*[@id="Namespace_66"]')  : $('//*[@id="Namespace_39"]') }

    executeCellByName(name) {
        return $(`//*[@id="SQLProcs"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[2]`);
    };

    grantedViaCellByName(name) {
        return $(`//*[@id="SQLProcs"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[3]`);
    };
    grantedByCellByName(name) {
        return $(`//*[@id="SQLProcs"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[4]`);
    };

    editLinkByName(name) {
        return $(`//*[@id="SQLProcs"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[5]/a`);
    };

    revokeLinkByName(name) {
        return $(`//*[@id="SQLProcs"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[6]/a`);
    };
}
export default SQLProceduresTabPageLocators;