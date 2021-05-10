/**
 * Created by osmolyar on 4/2/2018.
 */

class businessOptions {

    loginBusinessOptions : LoginBusinessOptions;
    userBusinessOptions : UserBusinessOptions;
    roleBusinessOptions : RoleBusinessOptions;
    editedUserBusinessOptions : EditedUserBusinessOptions;
    userExpectedValidationOptions :UserValidationOptions;
    userValidationOptions : UserValidationOptions;
    navigationBusinessOptions :NavigationBusinessOptions;
    navigationValidationOptions : NavigationValidationOptions;

    constructor() {

        this.loginBusinessOptions = {
            login: '_SYSTEM',
            password: 'SYS'
        };

        this.userBusinessOptions = {
            login: 'name',
            passwd: 'password',
            passwdConfirm: 'password',
            exists: 'true',
        };
        this.roleBusinessOptions = {
            name: 'name',
            exists: 'true',
        };
        this.editedUserBusinessOptions = {};
        this.userExpectedValidationOptions = {};
        this.userValidationOptions = {};
        this.navigationBusinessOptions = {};
        this.navigationValidationOptions = {};
    }
    static initializeContext() {
        context.stackP=[];

        context.loginBusinessOptions = {
            login: '_SYSTEM',
            password: 'SYS'
        };
    }
}

export default businessOptions;