/**
 * History:
 * Created by osmolyar on yyyy-mm-dd.
 *
 * Description: Locators for RolesTab page
 */
import BasePage  from '../common/pageObjects/base.page';

class SQLViewsTabPageLocators extends BasePage {

    get SQLViewsTable() {return '//*[@id="SQLViews"]/div[2]/table'};
    get breadcrumbEditUser() {return $('//*[@id="title"]//a[contains(.,\'Edit User\')]')};
    get breadcrumbEditRole() {return $('//*[@id="title"]//a[contains(.,\'Edit Role\')]')};
    get addViewsButton() {return $('//*[@id="SQLViews"]/div[1]/input[1]')};
    get addColumnsButton() {return $('//*[@id="SQLViews"]/div[1]/input[2]')};
    get includeSystemItemsUser() { return $('//*[@id="SystemItems_63"]')};
    get includeSystemItems() {return this.includeSystemItemsUser._isExisting() ? $('//*[@id="SystemItems_63"]')  : $('//*[@id="SystemItems_36"]') }
    get switchNamespace() {return this.includeSystemItemsUser._isExisting() ? $('//*[@id="Namespace_63"]')  : $('//*[@id="Namespace_36"]') }

    alterCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[2]`);
    };
    selectCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[3]`);
    };
    insertCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[4]`);
    };
    updateCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[5]`);
    };
    deleteCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[6]`);
    };
    referencesCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[7]`);
    };
    grantedViaCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[8]`);
    };
    grantedByCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[9]`);
    };
    columnPrivCellByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[10]`);
    };
    editLinkByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[11]/a`);
    };
    revokeLinkByName(name) {
        return $(`//*[@id="SQLViews"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[12]/a`);
    };
}
export default SQLViewsTabPageLocators;