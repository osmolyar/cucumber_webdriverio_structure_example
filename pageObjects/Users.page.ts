/**
 * History:
 * Created by osmolyar on 11/29/2018.
 *
 * Description: Page Object for Users
 * Defines UI elements and atomic operations against the elements
 */

import UsersPageLocators  from '../LocatorDefinitions/users.locators';
import speed           from '../common/config/speed';

class UsersPage extends UsersPageLocators  {

    clickUserByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            this.userNameLink(rowId)._click();
        }
        else return 'Row not found';
    };

    clickFullNameHeaderCell(){
        this.fullNameHeaderCell._click();
    };

    clickDeleteHeaderCell(){
        this.deleteHeaderCell._click();
    };

    getUserByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            return  this.userName(rowId)._getText();
        }
        else return 'Row not found';
    };
    getFullNameByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            return this.fullName(rowId)._getText();
        }
        else return 'Row not found';
    };
    getEnabledByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            return this.enabled(rowId)._getText();
        }
        else return 'Row not found';
    };
    getNamespaceByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            return this.namespace(rowId)._getText();
        }
        else return 'Row not found';
    };

    getRoutineByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            return this.routine(rowId)._getText();
        }
        else return 'Row not found';
    };

    getTypeByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            return this.type(rowId)._getText();
        }
        else return 'Row not found';
    };

    clickDeleteUserByRowId(rowId=0){
        if (!this.userRow(rowId)._isExisting()) {
            console.log('Row not found');
        } else {
            this.deleteLink(rowId)._click(speed.implicit,speed.slow);
        }
    };
    clickProfileByRowId(rowId=0){
        if (this.userRow(rowId)._isExisting()) {
            this.profileLink(rowId)._click();
        }
        else console.log("Row not found");
    };

    clickCreateNewUserBtn(){
        this.createNewUserPageBtn._click();
    };

    setNameFilter(value){
        this.nameFilter._setValue(value,speed.slow,speed.slow);
        this.nameFilter._appendValue("\n",speed.slow,speed.slow);
    };

    clickUsersBreadcrumb(){
        this.breadcrumbUsers._click();
    };

    goToUsers() {
        this.clickUsersBreadcrumb();
    };

}
export default UsersPage