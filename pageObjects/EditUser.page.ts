/**
 * History:
 * Created by osmolyar on 1/17/2018.
 *
 * Description: Page Object for Create/Edit editUser panel
 * Defines UI elements and atomic operations against the elements
 */

import EditUserPageLocators  from '../LocatorDefinitions/editUser.locators';
import speed           from '../common/config/speed';

class EditUserPage extends EditUserPageLocators  {

    clickSaveBtn(){
        this.saveBtn._click(speed.implicit);
    };
    clickProfileBtn(){
        this.profileBtn._click();
    };
    clickCancelBtn(){
        this.cancelBtn._click();
    };
    clickUsersBreadcrumb(){
        this.breadcrumbUsers._click();
    };
    clickEditUserBreadcrumb(){
        this.breadcrumbEditUser._click();
    };
    setName(value){
        if (value)
            this.name._setValue(value);
    };
    setCopyFrom(value=''){
        if (value)
            this.copyFrom._selectValue(value);
    };
    setFullName(value=''){
        this.fullName._setValue(value);
    };
    setComment(value=''){
        this.comment._setValue(value);
    };
    selectUpdatePasswd(){
        this.updatePasswordRadio._click();
    };
    selectLeavePasswd(){
        this.leavePasswordRadio._click();
    };
    setPasswd(value){
        this.passwd._setValue(value);
    };
    setConfirmPasswd(value){
        this.passwdConfirm._setValue(value);
    };
    setChgPasswdNextLogin(state=false){
        this.chgPasswdNextLogin._setCheckBox(state);
    };
    setPasswdNeverExpires(state=false){
        this.passwdNeverExpires._setCheckBox(state);
    };
    setUserEnabled(state=true){
        this.userEnabled._setCheckBox(state);
    };
    //yyyy-mm-dd
    setExpDate(value=''){
        this.expDate._setValue(value);
    };
    setAcctNeverExpires(state=false){
        this.acctNeverExpires._setCheckBox(state);
    };

    selectStartupNamespace(value=''){
        if (value) {
            this.startupNamespace._selectValue(value);
        }
    };
    setStartupTagRoutine(value=''){
        this.startupTagRoutine._setValue(value);
    };
    setEmailAddress(value=''){
        this.emailAddress._setValue(value);
    };
    selectMobilePhoneServiceProvider(value=''){
        if (value) {
            this.mobilePhoneServiceProvider._selectValue(value);
        }
    };
    setMobilePhoneNumber(value=''){
        this.mobilePhoneNumber._setValue(value);
    };
    setTwoFactorAuthentication(value=''){
        this.twoFactorAuthentication._setValue(value);
    };

    getResponseText() {
        return this.responseText.getText();
    };

    getNameErrorHintHighlighted() {
        if (this.nameErrorText._isExisting())
            if (!(this.nameErrorText._getAttribute('class')=== 'redText'))
                return 'false';
            else return 'true';
    };

    getPasswdErrorHintHighlighted() {
        if (this.passwordErrorText._isExisting())
            if (!(this.passwordErrorText._getAttribute('class') === 'redText'))
                return 'false';
            else return 'true';
    };

    getPasswordConfirmErrorHintHighlighted() {
        if (this.confirmPasswdErrorText._isExisting())
            if (!(this.confirmPasswdErrorText._getAttribute('class') === 'redText'))
                return 'false';
            else return 'true';
    };

    getStartupRoutineHint() {
        if (this.routineHint._isExisting())
            return this.routineHint.getText();
    };
    getStartupNamespaceHint() {
        if (this.namespaceHint._isExisting())
            return this.namespaceHint.getText();
    };



    //region RolesTab

    goToRolesTab() {
        let success = false;
        while (!success) {
            try {
                browser.execute(`jQuery(document.getElementById('frame_15').getSVGDocument().querySelector("#tabBar > g:nth-child(10) > text")).click()`);
                success = true;
            } catch (e) {
                browser.pause(speed.fast);
            }
        }
    };

    goToPrivilegesTab(){
        let success = false;
        while (!success) {
            try {
                browser.execute(`jQuery(document.getElementById('frame_15').getSVGDocument().querySelector("#tabBar > g:nth-child(8) > text")).click()`);
                success = true;
            } catch (e) {
                browser.pause(speed.fast);
            }
        }
    };

    goToTablesTab(){
        let success = false;
        while (!success) {
            try {
                browser.execute(`jQuery(document.getElementById('frame_15').getSVGDocument().querySelector("#tabBar > g:nth-child(6) > text")).click()`);
                success = true;
            } catch (e) {
                browser.pause(speed.fast);
            }
        }
    };

    goToViewsTab(){
        let success = false;
        while (!success) {
            try {
                browser.execute(`jQuery(document.getElementById('frame_15').getSVGDocument().querySelector("#tabBar > g:nth-child(4) > text")).click()`);
                success = true;
            } catch (e) {
                browser.pause(speed.fast);
            }
        }
    };

    goToProceduresTab(){
        let success = false;
        while (!success) {
            try {
                browser.execute(`jQuery(document.getElementById('frame_15').getSVGDocument().querySelector("#tabBar > g:nth-child(2) > text")).click()`);
                success = true;
            } catch (e) {
                browser.pause(speed.fast);
            }
        }
    };


    //endregion RolesTab

}
export default EditUserPage;