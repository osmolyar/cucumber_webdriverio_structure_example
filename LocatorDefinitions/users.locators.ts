import editUserPageLocators from "./editUser.locators";

/**
 * History:
 * Created by osmolyar on 1/17/2018.
 *
 * Description: Locators for Users page
 */
import BasePage  from '../common/pageObjects/base.page';

class UsersPageLocators extends BasePage {

    get createNewUserPageBtn() {return $('//*[@id="command_btnNew"]/nobr')};
    get userTable() {return '//*[@id="table"]/table'};
    get nameFilter() {return $('//*[@id="filter_13"]')};
    get firstRowUserName() {return $('//*[@id="tr_0_29"]/td[2]')};
    get iFrame() {return $('iframe[class="modalGroupIframe"]')};
    get fullNameHeaderCell() {return $('//*[@id="th_FullName_29"]')};
    get deleteHeaderCell() {return $('//*[@id="table"]/table/thead/tr/th[8]')};  //*[@id="zen5"]/table/tbody/tr/td[2]/div
    get breadcrumbUsers() {return $('//*[@id="title"]/div//a[contains(.,"Users")]')}; //*[@id="title"]/div//a[contains(.,"Users")]

    userRow(rowId) {
        return $('//*[@id="tr_' + rowId +'_29"]');
    };

    userName(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[2]');
    };

    userNameLink(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[2]/a');
    };

    fullName(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[3]');
    };

    enabled(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[4]');
    };

    namespace(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[5]');
    };

    routine(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[6]');
    };

    type(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[7]');
    };

    deleteLink(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[8]/a');
    };

    profileLink(rowId) {
        return $('//*[@id="tr_' + rowId + '_29"]/td[9]/a');
    };


}

export default UsersPageLocators;