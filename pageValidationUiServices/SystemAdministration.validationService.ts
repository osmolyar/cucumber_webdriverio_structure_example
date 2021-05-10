/**
 * Created by osmolyar on 1/8/2017.
 */

import SystemAdministrationPage  from '../pageObjects/SystemAdministration.page';

class SystemAdministrationValidationService extends SystemAdministrationPage {

    //Validation methods
    validatePageOpen() {
        console.log("Verify on System Administration panel");
        assert.include(this.getSysAdmNavSelectorClass(),'selectorOuterSelected');
    };

    validateListItems() {
        console.log("Verifiying System Administration List View items");

        this.validateAdditionalSettingsList();
        this.validateAdministrationList();
        this.validateAdvancedMemoryList();
        this.validateApplicationsList();
        this.validateAuditingList();
        this.validateAuthenticationWebSessionOptionList();
//        this.validateClientApplicationsList();
        this.validateClientList();
        this.validateClusterSettingsList();
        this.validateCompatibilityList();
        this.validateConfigurationList();
        this.validateConfiguredDefaultsList();
        this.validateConfigureSystemEventsList();
        this.validateConfigureUserEventsList();
        this.validateConnectivityList();
        this.validateCopyAuditLogList();
        this.validateCreateAMirrorList();
        this.validateCreateNewEncryptionKeyFileList();
        this.validateWebGatewayManagementList();
        this.validateCumulativeBackupList();
        this.validateDatabaseBackupList();
        this.validateDatabaseBackupListList();
        this.validateDatabaseEncryptionList();
        this.validateDataElementEncryptionList();
        this.validateDeviceSettingsList();
        this.validateDevicesList();
        this.validateDeviceSubtypesList();
        this.validateDocDBApplicationsList();
        this.validateECPSettingsList();
        this.validateEditAsyncList();
        this.validateEditMirrorList();
        this.validateEnableAuditingList();
        this.validateEnableMirrorServiceList();
        this.validateEncryptionList();
        //      this.validateExcelServersList();
        this.validateExportAuditingList();
        //       this.validateFileManConversionSettingsList();  Removed
        this.validateFullBackupOfAllDatabasesList();
        this.validateFullBackupOfAllListList();
        this.validateGeneralObjectSettingsList();
        this.validateGeneralSQLSettingsList();
        this.validateImportLocalesOrTablesList();
        this.validateIncrementalBackupList();
        this.validateIOSettingsList();
        this.validateISQLCompatibilitySettingsList();
        this.validateJDBCGatewayServerList();
        this.validateJoinAsAsyncList();
        this.validateJoinAsFailoverList();
        this.validateJournalSettingsList();
        this.validateLDAPConfigurationsList();
        this.validateLicenseKeyList();
        this.validateLicenseServersList();
        this.validateLocalDatabasesList();
        this.validateLocaleDefinitionsList();
        this.validateMagneticTapeDevicesList();
        this.validateManagedFileTransferConnectionsList();
        this.validateManageEncryptionKeyFileList();
        this.validateMemoryAndStartupListList();
        this.validateMirrorSettingsList();
        this.validateMobilePhoneList();
        this.validateMonitorList();
        this.validateNamespacesList();
        this.validateNaturalLanguageSettingsList();
        this.validateObjectGatewaysList();
        this.validatePrintServersList();
        this.validatePrivilegedRoutineApplicationsList();
        this.validatePublicKeyInfrastructureList();
        this.validatePurgeAuditLogList();
        this.validateQAuth20List();
        this.validateRemoteDatabasesList();
        this.validateRenderServersList();
        this.validateReportServersList();
        this.validateResourcesList();
        this.validateRolesList();
        this.validateSecurityAdvisorList();
        this.validateSecurityList();
        this.validateServerList();
        this.validateServicesList();
        this.validateSettingsList();
        this.validateShadowServerSettingsList();
        this.validateShardingConfigurationList();
        this.validateSourceControlList();
        this.validateSQLAndObjectSettingsList();
        this.validateSQLGatewayConnectionsList();
        this.validateSSLTLSConfigurationsList();
        this.validateStartupList();
        this.validateSystemConfigurationList();
        this.validateSystemSecurityList();
        this.validateSystemDefinedDDLMappingsList();
        this.validateUserDefinedDDLMappingsList();
        this.validateSystemWideSecurityParametersList();
        this.validateTaskManagerEmailList();
        this.validateTelnetSettingsList();
        this.validateTSQLCompatibilitySettingsList();
        this.validateUsersList();
        this.validateConfigureUserEventsList();
        this.validateViewAuditDatabaseList();
        this.validateWebApplicationsList();
        this.validateX509CredentialsList();
        this.validateXSLTGatewayServerList();
        //       this.validateZenReportsList();  removed
    }

    //List item validators

    validateConfigurationList() {
        assert.include(this.getConfigurationListText(),'Configuration');
        console.log("Configuration verified");
    }
    validateSystemConfigurationList() {
        assert.include(this.getSystemConfigurationListText(),'System Configuration');
        console.log("System Configuration label verified");
    }
    validateMemoryAndStartupListList() {
        assert.include(this.getMemoryAndStartupListText(),'Memory and Startup');
        console.log("Memory and Startup label verified");
    }
    validateNamespacesList() {
        assert.include(this.getNamespacesListText(),'Namespaces');
        console.log("Namespaces label verified");
    }
    validateLocalDatabasesList() {
        assert.include(this.getLocalDatabasesListText(),'Local Databases');
        console.log("Local Databases verified");
    }
    validateRemoteDatabasesList() {
        assert.include(this.getRemoteDatabasesListText(),'Remote Databases');
        console.log("Remote Databases label verified");
    }
    validateShardingConfigurationList() {
        assert.include(this.getShardingConfigurationListText(),'Sharding Configuration');
        console.log("Sharding Configuration label verified");
    }
    validateJournalSettingsList() {
        assert.include(this.getJournalSettingsListText(),'Journal Settings');
        console.log("Journal Settings label verified");
    }
    validateConnectivityList() {
        assert.include(this.getConnectivityListText(),'Connectivity');
        console.log("Connectivity label verified");
    }
    validateECPSettingsList() {
        assert.include(this.getECPSettingsListText(),'ECP Settings');
        console.log("ECP Settings label verified");
    }
    validateShadowServerSettingsList() {
        assert.include(this.getShadowServerSettingsListText(),'Shadow Server Settings');
        console.log("Shadow Server Settings label verified");
    }
    validateSQLGatewayConnectionsList() {
        assert.include(this.getSQLGatewayConnectionsListText(),'SQL Gateway Connections');
        console.log("SQL Gateway Connections label verified");
    }
    validateJDBCGatewayServerList() {
        assert.include(this.getJDBCGatewayServerListText(),'JDBC Gateway Server');
        console.log("JDBC Gateway Server label verified");
    }
    validateObjectGatewaysList() {
        assert.include(this.getObjectGatewaysListText(),'Object Gateways');
        console.log("Object Gateways label verified");
    }
    validateXSLTGatewayServerList() {
        assert.include(this.getXSLTGatewayServerListText(),'XSLT Gateway Server');
        console.log("XSLT 2.0 Gateway Server label verified");
    }
    validateClusterSettingsList() {
        assert.include(this.getClusterSettingsListText(),'Cluster Settings');
        console.log("Cluster Settings label  verified");
    }
    validateMirrorSettingsList() {
        assert.include(this.getMirrorSettingsListText(),'Mirror Settings');
        console.log("Mirror Settings label verified");
    }
    validateEnableMirrorServiceList() {
        assert.include(this.getEnableMirrorServiceListText(),'Enable Mirror Service');
        console.log("Enable Mirror Service label verified");
    }
    validateCreateAMirrorList() {
        assert.include(this.getCreateAMirrorListText(),'Create a Mirror');
        console.log("Create a Mirror label verified");
    }
    validateEditMirrorList() {
        assert.include(this.getEditMirrorListText(),'Edit Mirror');
        console.log("Edit Mirror label verified");
    }
    validateEditAsyncList() {
        assert.include(this.getEditAsyncListText(),'Edit Async');
        console.log("Edit Async label verified");
    }
    validateJoinAsFailoverList() {
        assert.include(this.getJoinAsFailoverListText(),'Join as Failover');
        console.log("Join as Failover label verified");
    }
    validateJoinAsAsyncList() {
        assert.include(this.getJoinAsAsyncListText(),'Join as Async');
        console.log("Join as Async label verified");
    }
    validateDatabaseBackupList() {
        assert.include(this.getDatabaseBackupListText(),'Database Backup');
        console.log("Database Backup label verified");
    }
    validateDatabaseBackupListList() {
        assert.include(this.getDatabaseBackupListListText(),'Database Backup List');
        console.log("Database Backup List label verified");
    }
    validateFullBackupOfAllDatabasesList() {
        assert.include(this.getFullBackupOfAllDatabasesListText(),'Full Backup');
        console.log("Full Backup of All Databases label verified");
    }
    validateFullBackupOfAllListList() {
        assert.include(this.getFullBackupOfAllListListText(),'Backup of All on List');
        console.log("Full Backup of All List label verified");
    }
    validateIncrementalBackupList() {
        assert.include(this.getIncrementalBackupListText(),'Incremental Backup');
        console.log("Incremental Backup label verified");
    }
    validateCumulativeBackupList() {
        assert.include(this.getCumulativeBackupListText(),'Cumulative Backup');
        console.log("Cumulative Backup label verified");
    }
    validateWebGatewayManagementList() {
        assert.include(this.getWebGatewayManagementListText(),'Web Gateway Management');
        console.log("Web Gateway Management label verified");
    }
    validateSQLAndObjectSettingsList() {
        assert.include(this.getSQLAndObjectSettingsListText(),'SQL and Object Settings');
        console.log("SQL and Object Settings label verified");
    }
    validateGeneralSQLSettingsList() {
        assert.include(this.getGeneralSQLSettingsListText(),'SQL');
        console.log("General SQL Settings label verified");
    }
    validateGeneralObjectSettingsList() {
        assert.include(this.getGeneralObjectSettingsListText(),'Objects');
        console.log("General Object Settings label verified");
    }
    validateTSQLCompatibilitySettingsList() {
        assert.include(this.getTSQLCompatibilitySettingsListText(),'TSQL Compatibility');
        console.log("TSQL Compatibility Settings label verified");
    }
    validateISQLCompatibilitySettingsList() {
        assert.include(this.getISQLCompatibilitySettingsListText(),'ISQL Compatibility');
        console.log("ISQL Compatibility Settings label verified");
    }
    // validateFileManConversionSettingsList() {
    //     assert.include(this.getFileManConversionSettingsListText(),'FileMan Conversion Settings');
    //     console.log("FileMan Conversion Settings verified");
    // }
    validateSystemDefinedDDLMappingsList() {
        assert.include(this.getSystemDefinedDDLMappingsListText(),'System DDL Mappings');
        console.log("System-defined DDL Mappings label verified");
    }
    validateUserDefinedDDLMappingsList() {
        assert.include(this.getUserDefinedDDLMappingsListText(),'User DDL Mappings');
        console.log("User-defined DDL Mappings label verified");
    }
    validateDeviceSettingsList() {
        assert.include(this.getDeviceSettingsListText(),'Device Settings');
        console.log("Device Settings label verified");
    }
    validateDevicesList() {
        assert.include(this.getDevicesListText(),'Devices');
        console.log("Devices label verified");
    }
    validateMagneticTapeDevicesList() {
        assert.include(this.getMagneticTapeDevicesListText(),'Magnetic Tape Devices');
        console.log("Magnetic Tape Devices label verified");
    }
    validateDeviceSubtypesList() {
        assert.include(this.getDeviceSubtypesListText(),'Device Subtypes');
        console.log("Device Subtypes label verified");
    }
    validateIOSettingsList() {
        assert.include(this.getIOSettingsListText(),'IO Settings');
        console.log("IO Settings label verified");
    }
    validateTelnetSettingsList() {
        assert.include(this.getTelnetSettingsListText(),'Telnet Settings');
        console.log("Telnet Settings label verified");
    }
    validateNaturalLanguageSettingsList() {
        assert.include(this.getNaturalLanguageSettingsListText(),'National Language Settings');
        console.log("National Language Settings label verified");
    }
    validateConfiguredDefaultsList() {
        assert.include(this.getConfiguredDefaultsListText(),'Configured Defaults');
        console.log("Configured Defaults label verified");
    }
    validateLocaleDefinitionsList() {
        assert.include(this.getLocaleDefinitionsListText(),'Locale Definitions');
        console.log("Locale Definitions label verified");
    }
    validateImportLocalesOrTablesList() {
        assert.include(this.getImportLocalesOrTablesListText(),'Import Locales or Tables');
        console.log("Import Locales or Tables label verified");
    }
    // validateZenReportsList() {
    //     assert.include(this.getZenReportsListText(),'Zen Reports');
    //     console.log("Zen Reportslabel verified");
    // }
    validateReportServersList() {
        assert.include(this.getReportServersListText(),'Report Servers');
        console.log("Report Servers label verified");
    }
    validateRenderServersList() {
        assert.include(this.getRenderServersListText(),'Render Servers');
        console.log("Render Servers label verified");
    }
    validatePrintServersList() {
        assert.include(this.getPrintServersListText(),'Print Servers');
        console.log("Print Servers label verified");
    }
    validateExcelServersList() {
        // assert.include(this.getExcelServersListText(),'Excel Servers');
        // console.log("Excel Servers label verified");
    }
    validateSettingsList() {
        assert.include(this.getSettingsListText(),'Settings');
        console.log("Settings label verified");
    }
    validateAdditionalSettingsList() {
        assert.include(this.getAdditionalSettingsListText(),'Additional Settings');
        console.log("Additional Settings label verified");
    }
    validateCompatibilityList() {
        assert.include(this.getCompatibilityListText(),'Compatibility');
        console.log("Compatibility label verified");
    }
    validateAdvancedMemoryList() {
        assert.include(this.getAdvancedMemoryListText(),'Advanced Memory');
        console.log("Advanced Memory label verified");
    }
    validateMonitorList() {
        assert.include(this.getMonitorListText(),'Monitor');
        console.log("Monitor label verified");
    }
    validateSourceControlList() {
        assert.include(this.getSourceControlListText(),'Source Control');
        console.log("Source Control label verified");
    }
    validateStartupList() {
        assert.include(this.getStartupListText(),'Startup');
        console.log("Startup label verified");
    }
    validateTaskManagerEmailList() {
        assert.include(this.getTaskManagerEmailListText(),'Task Manager Email');
        console.log("Task Manager Email label verified");
    }
    validateSecurityList() {
        assert.include(this.getSecurityListText(),'Security');
        console.log("Security label verified");
    }
    validateUsersList() {
        assert.include(this.getUsersListText(),'Users');
        console.log("Users label verified");
    }
    validateRolesList() {
        assert.include(this.getRolesListText(),'Roles');
        console.log("Roles label verified");
    }
    validateResourcesList() {
        assert.include(this.getResourcesListText(),'Resources');
        console.log("Resources label verified");
    }
    validateServicesList() {
        assert.include(this.getServicesListText(),'Services');
        console.log("Services label verified");
    }
    validateApplicationsList() {
        assert.include(this.getApplicationsListText(),'Applications');
        console.log("Applications label verified");
    }
    validateWebApplicationsList() {
        assert.include(this.getWebApplicationsListText(),'Web Applications');
        console.log("Web Applications label verified");
    }
    validateDocDBApplicationsList() {
        assert.include(this.getDocDBApplicationsListText(),'Doc DB Applications');
        console.log("Doc DB Applications label verified");
    }
    validatePrivilegedRoutineApplicationsList() {
        assert.include(this.getPrivilegedRoutineApplicationsListText(),'Privileged Routine Applications');
        console.log("Privileged Routine Applications label verified");
    }
    validateClientApplicationsList() {
        assert.include(this.getClientApplicationsListText(),'Client Applications');
        console.log("Client Applications label verified");
    }

    validateSSLTLSConfigurationsList() {
        assert.include(this.getSSLTLSConfigurationsListText(),'SSL\/TLS Configurations');
        console.log("SSL/TLS Configurations");
    }
    validateX509CredentialsList() {
        assert.include(this.getX509CredentialsListText(),'X.509 Credentials');
        console.log("X.509 Credentials label verified");
    }
    validateQAuth20List() {
        assert.include(this.getOAuth20ListText(),'OAuth 2.0');
        console.log("OAuth 2.0 label verified");
    }
    validateClientList() {
        assert.include(this.getClientListText(),'Client');
        console.log("Client label verified");
    }
    validateServerList() {
        assert.include(this.getServerListText(),'Server');
        console.log("Server label verified");
    }
    validateAdministrationList() {
        assert.include(this.getAdministrationListText(),'Administration');
        console.log("Administration label verified");
    }
    validateManagedFileTransferConnectionsList() {
        assert.include(this.getManagedFileTransferConnectionsListText(),'Managed File Transfer Connections');
        console.log("Managed File Transfer Connections label verified");
    }
    validateSystemSecurityList() {
        assert.include(this.getSystemSecurityListText(),'System Security');
        console.log("System Security label verified");
    }
    validateSystemWideSecurityParametersList() {
        assert.include(this.getSystemWideSecurityParametersListText(),'System-wide Security Parameters');
        console.log("System-wide Security Parameters verified");
    }
    validateAuthenticationWebSessionOptionList() {
        //   assert.include(this.getAuthenticationWebSessionOptionListText(),'Authentication/CSP Session Options')
        assert.include(this.getAuthenticationWebSessionOptionListText(),'Authentication/Web Session Options');
        console.log("Authentication/Web Session Options");
    }
    validateLDAPConfigurationsList() {
        assert.include(this.getLDAPConfigurationsListText(),'LDAP/Kerberos Configurations');
        console.log("LDAP/Kerberos Configurations label verified");
    }
    validateAuditingList() {
        assert.include(this.getAuditingListText(),'Auditing');
        console.log("Auditing label verified");
    }
    validateEnableAuditingList() {
        assert.include(this.getEnableAuditingListText(),'Enable Auditing');
        console.log("Enable Auditing label verified");
    }
    validateDisableAuditingList() {
        assert.include(this.getDisableAuditingListText(),'Disable Auditing');
        console.log("Disable Auditing label verified");
    }
    validateViewAuditDatabaseList() {
        assert.include(this.getViewAuditDatabaseListText(),'View Audit Database');
        console.log("View Audit Database label verified");
    }
    validateConfigureSystemEventsList() {
        assert.include(this.getConfigureSystemEventsListText(),'Configure System Events');
        console.log("Configure System Events label verified");
    }
    validateConfigureUserEventsList() {
        assert.include(this.getConfigureUserEventsListText(),'Configure User Events');
        console.log("Configure User Events label verified");
    }
    validateCopyAuditLogList() {
        assert.include(this.getCopyAuditLogListText(),'Copy Audit Log');
        console.log("Copy Audit Log label verified");
    }
    validateExportAuditingList() {
        assert.include(this.getExportAuditingListText(),'Export Audit Log');
        console.log("Export Audit Log label verified");
    }

    validatePurgeAuditLogList() {
        assert.include(this.getPurgeAuditLogListText(),'Purge Audit Log');
        console.log("Purge Audit Log label verified");
    }
    validateSecurityAdvisorList() {
        assert.include(this.getSecurityAdvisorListText(),'Security Advisor');
        console.log("Security Advisor label verified");
    }
    validateMobilePhoneList() {
        assert.include(this.getMobilePhoneListText(),'Mobile Phone');
        console.log("Mobile Phone label verified");
    }
    validatePublicKeyInfrastructureList() {
        assert.include(this.getPublicKeyInfrastructureListText(),'Public Key Infrastructure');
        console.log("Public Key Infrastructure label verified");
    }
    validateLicensingList() {
        assert.include(this.getLicensingListText(),'Licensing');
        console.log("Licensing label verified");
    }
    validateLicenseKeyList() {
        assert.include(this.getLicenseKeyListText(),'License Key');
        console.log("License Key label verified");
    }
    validateLicenseServersList() {
        assert.include(this.getLicenseServersListText(),'License Servers');
        console.log("License Servers label verified");
    }
    validateEncryptionList() {
        assert.include(this.getEncryptionListText(),'Encryption');
        console.log("Encryption label verified");
    }
    validateCreateNewEncryptionKeyFileList() {
        assert.include(this.getCreateNewEncryptionKeyFileListText(),'Create New Encryption Key File');
        console.log("Create New Encryption Key File label verified");
    }
    validateManageEncryptionKeyFileList() {
        assert.include(this.getManageEncryptionKeyFileListText(),'Manage Encryption Key File');
        console.log("Manage Encryption Key File label verified");
    }
    validateDatabaseEncryptionList() {
        assert.include(this.getDatabaseEncryptionListText(),'Database Encryption');
        console.log("Database Encryption label verified");
    }
    validateDataElementEncryptionList() {
        assert.include(this.getDataElementEncryptionListText(),'Data Element Encryption');
        console.log("Data Element Encryption label verified");
    }

}

export default  SystemAdministrationValidationService;


