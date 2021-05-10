/**
 * History:
 * Created by osmolyar on 1/17/2018.
 *
 * Description: Locators for EditUser page
 */
import BasePage  from '../common/pageObjects/base.page';

class editUserPageLocators extends BasePage {

    get saveBtn() {return $('//*[@id="command_btnSave"]/nobr')};
    get profileBtn() {return $('//*[@id="command_btnProfile"]/nobr')};
    get cancelBtn() {return $('//*[@id="command_btnCancel"]/nobr')};
    get breadcrumbUsers() {return $('//*[@id="title"]//a[contains(.,\'Users\')]')};
    get breadcrumbEditUser() {return $('//*[@id="title"]//a[contains(.,\'Edit User\')]')};

    get name() {return $('//div[@id="Name"]/input')};
    get copyFrom() {return $('//div[@id="CopyUser"]/select')};
    get fullName() {return $('//div[@id="FullName"]/input')};
    get comment() {return $('//div[@id="Comment"]/input')};
    get passwd() {return $('//div[@id="Password"]/input')};
    get passwdConfirm() {return $('//div[@id="PasswordVer"]/input')};

    get updatePasswordRadio() {return $('//*[@id="textRadio_1_24"]')};
    get leavePasswordRadio() {return $('//*[@id="textRadio_2_24"]')};

    get chgPasswdNextLogin() {return $('//div[@id="ChangePassword"]/span/input')};
    get passwdNeverExpires() {return $('//div[@id="PasswordNeverExpires"]/span/input')};
    get userEnabled() {return $('//div[@id="Enabled"]/span/input')};
    get expDate() {return $('//div[@id="ExpirationDate"]/input')};
    get acctNeverExpires() {return $('//div[@id="AccountNeverExpires"]/span/input')};
    get startupNamespace() {return $('//div[@id="NameSpace"]/select')};

    get startupTagRoutine() {return $('//div[@id="Routine"]/input')};
    get emailAddress() {return $('//div[@id="EmailAddress"]/input')};
    get mobilePhoneServiceProvider() {return $('//*[@id="control_38"]')};
    get mobilePhoneNumber() {return $('//div[@id="PhoneNumber"]/input')};
    get twoFactorAuthentication() {return $('//*[@id="control_41"]')};

    get responseText() {return $('//*[@id="idRespond"]')};
    get nameErrorText() {return $('//*[@id="zenhint_20"]')};
    get passwordErrorText() {return $('//*[@id="zenhint_25"]')};
    get confirmPasswdErrorText() {return $('//*[@id="zenhint_26"]')};
    get routineHint() {return $('//*[@id="zenhint_35"]')};
    get namespaceHint() {return $('//*[@id="zenhint_34"]')};

    get svgTabAreaZendiv() {return $('div#svgTabArea.zendiv')};
    get generalTab() {return $('[onclick*="zenPage.getComponent(16).tabClicked(0)"]')};
    //get rolesTab() {return $('[onclick*="zenPage.getComponent(16).tabClicked(1)"]')};
    get rolesTab() {return $('//*[@id="tabBar"]/g[6]/path')};
    get sqlPrivilegesTab() {return $('[onclick*="zenPage.getComponent(16).tabClicked(2)"]')};
    get sqlTablesTab() {return $('[onclick*="zenPage.getComponent(16).tabClicked(3)"]')};
    get sqlViewsTab() {return $('[onclick*="zenPage.getComponent(16).tabClicked(4)"]')};
    get sqlProceduresTab() {return $('[onclick*="zenPage.getComponent(16).tabClicked(5)"]')};
}

export default editUserPageLocators;