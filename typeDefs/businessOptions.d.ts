interface Context {
    // business options
    loginBusinessOptions: LoginBusinessOptions;
    userBusinessOptions: UserBusinessOptions;
    roleBusinessOptions: RoleBusinessOptions;
    editedUserBusinessOptions: EditedUserBusinessOptions;
    navigationBusinessOptions: NavigationBusinessOptions;

    // validation options
    userExpectedValidationOptions: UserValidationOptions;
    userValidationOptions: UserValidationOptions;
    navigationValidationOptions: NavigationValidationOptions;
}

type LoginBusinessOptions = {
    login:string,
    password: string
};

type UserBusinessOptions= {
    login: string,
    passwd: string,
    passwdConfirm: string,
    fullName?: string,
    comment?: string,
    chgPasswdNextLogin?: string,
    passwdNeverExpires?: string,
    userEnabled?: string,
    expDate?: string,
    acctNeverExpires?:string,
    startupNamespace?: string,
    emailAddress?: string,
    mobilePhoneServiceProvider?: string,
    mobilePhoneNumber?: string,
    exists?: string,
    role?: string,
    privilege?:string,
    table?:string,
    view?:string,
    schema?: string,
    column?: string,
    procedure?:string,
    grantOption?: string,
    newSQLPrivileges?:string,
    newSQLTables?:string,
    newSQLColumns?:string,
    newSQLTablePermissions?:string,
    newSQLColumnPermissions?:string,
    newSQLViews?:string,
    newSQLViewPermissions?:string,
    newSQLProcedures?:string,
    newSQLProcedurePermissions?:string,
}

type EditedUserBusinessOptions= {
    passwd?: string,
    passwdConfirm?: string,
    fullName?: string,
    comment?: string,
    chgPasswdNextLogin?: string,
    passwdNeverExpires?: string,
    userEnabled?: string,
    expDate?: string,
    acctNeverExpires?:string,
    startupNamespace?: string,
    emailAddress?: string,
    mobilePhoneServiceProvider?: string,
    mobilePhoneNumber?: string,
    exists?: string,
    role?: string,
    privilege?:string,
    table?:string,
    view?:string,
    schema?: string,
    column?: string,
    procedure?:string,
    grantOption?: string,
    newSQLPrivileges?:string,
    newSQLTables?:string,
    newSQLColumns?:string,
    newSQLTablePermissions?:string,
    newSQLColumnPermissions?:string,
    newSQLViews?:string,
    newSQLViewPermissions?:string,
    newSQLProcedures?:string,
    newSQLProcedurePermissions?:string,
}

type UserValidationOptions = {
    responseText?: string,
    nameHintRed?: string,
    passwdHintRed?: string,
    passwdConfirmHintRed?: string,
    routineHint?: string,
    namespaceHint?:string,
};

type RoleBusinessOptions= {
    name: string,
    memberOfRole?:string,
    memberOfUser?:string,
    assignedToRole?:string,
    description?: string,
    permissions?: string,
    privilege?: string,
    table?:string,
    view?:string,
    procedure?:string,
    grantOption?: string,
    schema?:string,
    column?:string,
    exists?: string,
    newSQLPrivileges?:string,
    newSQLTables?:string,
    newSQLViews?:string,
    newSQLProcedures?:''
};

type NavigationBusinessOptions = {
    click1?:string,
    click2?:string,
    click3?:string,
    click4?:string,
    access?:string,
};

type NavigationValidationOptions = {
    pathEnabled?:string,
};



