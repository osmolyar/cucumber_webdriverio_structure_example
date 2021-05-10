/**
 * History:
 * Created by osmolyar on yyyy-mm-dd.
 *
 * Description: Locators for RolesTab page
 */
import BasePage  from '../common/pageObjects/base.page';

class SQLTablesTabPageLocators extends BasePage {
    get tablesTable() {return '//*[@id="SQLTables"]/div[2]/table'};
    get breadcrumbEditUser() {return $('//*[@id="title"]//a[contains(.,\'Edit User\')]')};
    get breadcrumbEditRole() {return $('//*[@id="title"]//a[contains(.,\'Edit Role\')]')};
    get addTablesButton() {return $('//*[@id="SQLTables"]/div[1]/input[1]')};
    get addColumnsButton() {return $('//*[@id="SQLTables"]/div[1]/input[2]')};
    get includeSystemItemsUser() { return $('//*[@id="SystemItems_60"]')};
    get includeSystemItems() {return this.includeSystemItemsUser._isExisting() ? $('//*[@id="SystemItems_60"]')  : $('//*[@id="SystemItems_33"]') }
    get switchNamespace() {return this.includeSystemItemsUser._isExisting() ? $('//*[@id="Namespace_60"]')  : $('//*[@id="Namespace_33"]') };

    alterCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[2]`);
    };
    selectCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[3]`);
    };
    insertCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[4]`);
    };
    updateCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[5]`);
    };
    deleteCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[6]`);
    };
    referencesCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[7]`);
    };
    grantedViaCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[8]`);
    };
    grantedByCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[9]`);
    };
    columnPrivCellByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[10]`);
    };
    editLinkByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[11]/a`);
    };
    editColumnsLinkByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[10]/a`);
    };
    revokeLinkByName(name) {
        return $(`//*[@id="SQLTables"]/div[2]/table/tbody/tr[td[contains(.,"${name}")]]/td[12]/a`);
    };
}
export default SQLTablesTabPageLocators;