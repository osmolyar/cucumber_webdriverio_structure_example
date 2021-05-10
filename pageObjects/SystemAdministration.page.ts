/**
 * History:
 * Created by osmolyar on 1/3/2017.
 *
 * Description: Page Object for Classes
 * Defines UI elements and atomic operations against the elements
 */

import SystemAdministrationPageLocators  from '../LocatorDefinitions/systemAdministration.locators';
import BasePage  from '../common/pageObjects/base.page';
import speed           from '../common/config/speed';

class SystemAdministrationPage extends SystemAdministrationPageLocators {

    //region navigation

    clickGoButton() {
        if (this.columns_goButton._isExisting())
            this.columns_goButton._click();
    };

    getSysAdmNavSelectorClass() {
        return this.leftNav_SystemAdministrationOuterSelector.getAttribute('class');
    };

    //Configuration
    clickColumnsConfiguration() {
        this.columns_Configuration._click(speed.implicit,speed.implicit);
        return this;
    };
//Configuration->System configuration
    clickColumnsSystemConfiguration() {
        this.columns_SystemConfiguration._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsMemoryandStartup() {
        this.columns_MemoryAndStartup._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsNamespaces() {
        this.columns_Namespaces._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsLocalDatabases() {
        this.columns_LocalDatabases._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsRemoteDatabases() {
        this.columns_RemoteDatabases._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsShardingConfiguration() {
        this.columns_ShardingConfiguration._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsJournalSettings() {
        this.columns_JournalSettings._click(speed.implicit,speed.implicit);
        return this;
    };

    //Configuration->Connectivity
    clickColumnsConnectivity() {
        this.columns_Connectivity._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsECPSettings() {
        this.columns_ECPSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsShadowServerSettings() {
        this.columns_ShadowServerSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsSQLGatewayConnections() {
        this.columns_SQLGatewayConnections._click(speed.implicit,speed.implicit);
        return this;
    };

    clickColumnsJDBCGatewayServer() {
        this.columns_JDBCGatewayServer._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsObjectGateways() {
        this.columns_ObjectGateways._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsXSLT20GatewayServer() {
        this.columns_XSLT20GatewayServer._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsClusterSettings() {
        this.columns_ClusterSettings._click(speed.implicit,speed.implicit);
        return this;
    };

    //Configuration->Mirror Settings
    clickColumnsMirrorSettings() {
        this.columns_MirrorSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsEnableMirrorService() {
        this.columns_EnableMirrorService._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsCreateAMirror() {
        this.columns_CreateAMirror._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsEditMirror() {
        this.columns_EditMirror._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsEditAsync() {
        this.columns_EditAsync._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsJoinAsFailover() {
        this.columns_JoinAsFailover._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsJoinAsAsync() {
        this.columns_JoinAsAsync._click(speed.implicit,speed.implicit);
        return this;
    };

    //Configuration->Database Backup
    clickColumnsDatabaseBackup() {
        this.columns_DatabaseBackup._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsDatabaseBackupList() {
        this.columns_DatabaseBackupList._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsFullBackupofAllDatabases() {
        this.columns_FullBackupOfAllDatabases._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsFullBackupofAllList() {
        this.columns_FullBackupOfAllList._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsIncrementalBackup() {
        this.columns_IncrementalBackup._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsCumulativeBackup() {
        this.columns_CumulativeBackup._click(speed.implicit,speed.implicit);
        return this;
    };

//Configuration->WebGatewayManagement
    clickColumnsWebGatewayManagement() {
        this.columns_WebGatewayManagement._click(speed.implicit,speed.implicit);
        return this;
    };

//Configuration->SQLAndObjectSettings
    clickColumnsSQLandObjectSettings() {
        this.columns_SQLAndObjectSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsGeneralSQLSettings() {
        this.columns_GeneralSQLSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsGeneralObjectSettings() {
        this.columns_GeneralObjectSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsTSQLCompatibilitySettings() {
        this.columns_TSQLCompatibilitySettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsISQLCompatibilitySettings() {
        this.columns_ISQLCompatibilitySettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsSystemDDLMappings() {
        this.columns_SystemDDLMappings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsUserDDLMappings() {
        this.columns_UserDDLMappings._click(speed.implicit,speed.implicit);
        return this;
    };

//Configuration->DeviceSettings
    clickColumnsDeviceSettings() {
        this.columns_DeviceSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsDevices() {
        this.columns_Devices._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsMagneticTapeDevices() {
        this.columns_MagneticTapeDevices._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsDeviceSubtypes() {
        this.columns_DeviceSubtypes._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsIOSettings() {
        this.columns_IOSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsTelnetSettings() {
        this.columns_TelnetSettings._click(speed.implicit,speed.implicit);
        return this;
    };

//Configuration->NationalLanguageSettings
    clickColumnsNationalLanguageSettings() {
        this.columns_NationalLanguageSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsConfiguredDefaults() {
        this.columns_ConfiguredDefaults._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsLocaleDefinitions() {
        this.columns_LocaleDefinitions._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsImportLocalesorTables() {
        this.columns_ImportLocalesorTables._click(speed.implicit,speed.implicit);
        return this;
    };

    //Configuration->ReportServers
    clickColumnsReportServers() {
        this.columns_ReportServers._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsRenderServers() {
        this.columns_RenderServers._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsPrintServers() {
        this.columns_PrintServers._click(speed.implicit,speed.implicit);
        return this;
    };
    // clickColumnsExcelServers() {
    //     this.columns_ExcelServers._click(speed.implicit,speed.implicit);
    //     return this;
    // };
    clickColumnsSettings() {
        this.columns_Settings._click(speed.implicit,speed.implicit);
        return this;
    };

//Configuration->AdditionalSettings
    clickColumnsAdditionalSettings() {
        this.columns_AdditionalSettings._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsCompatibility() {
        this.columns_Compatibility._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsAdvancedMemory() {
        this.columns_AdvancedMemory._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsMonitor() {
        this.columns_Monitor._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsSourceControl() {
        this.columns_SourceControl._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsStartup() {
        this.columns_Startup._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsTaskManagerEmail() {
        this.columns_TaskManagerEmail._click(speed.implicit,speed.implicit);
        return this;
    };

    //Encryption
    clickColumnsEncryption() {
        this.columns_Encryption._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsCreateNewEncryptionKeyFile() {
        this.columns_CreateNewEncryptionKeyFile._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsManageEncryptionKeyFile() {
        this.columns_ManageEncryptionKeyFile._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsDatabaseEncryption() {
        this.columns_DatabaseEncryption._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsDataElementEncryption() {
        this.columns_DataElementEncryption._click(speed.implicit,speed.implicit);
        return this;
    };

    //Licensing
    clickColumnsLicensing() {
        this.columns_Licensing._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsLicenseKey() {
        this.columns_LicenseKey._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsLicenseServers() {
        this.columns_LicenseServers._click();
        return this;
    };

    //Security
    clickColumnsSecurity() {
        this.columns_Security._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsUsers() {
        this.columns_Users._click(speed.implicit,speed.implicit);
        return this;
    };
    clickColumnsRoles() {
        this.columns_Roles._click();
        return this;
    };
    clickColumnsResources() {
        this.columns_Resources._click();
        return this;
    };

    clickColumnsClientApplications() {
        this.columns_ClientApplications._click();
        return this;
    };
    clickColumnsWebApplications() {
        this.columns_WebApplications._click();
        return this;
    };
    clickColumnsDocDBApplications() {
        this.columns_DocDBApplications._click();
        return this;
    };
    clickColumnsPrivilegedRoutineApplications() {
        this.columns_PrivilegedRoutineApplications._click();
        return this;
    };

    clickColumnsApplications() {
        this.columns_Applications._click();
        return this;
    };

    clickColumnsServices() {
        this.columns_Services._click();
        return this;
    };
    clickColumnsSSLTLSConfigurations() {
        this.columns_SSLTLSConfigurations._click();
        return this;
    };
    clickColumnsX509Credentials() {
        this.columns_X509Credentials._click();
        return this;
    };
    clickColumnsOAuth20() {
        this.columns_OAuth20._click();
        return this;
    };

    clickColumnsClient() {
        this.columns_Client._click();
        return this;
    };
    clickColumnsServer() {
        this.columns_Server._click();
        return this;
    };
    clickColumnsAdministration() {
        this.columns_Administration._click();
        return this;
    };
    clickColumnsPublicKeyInfrastructure() {
        this.columns_PublicKeyInfrastructure._click();
        if (browser.getTitle()==='IRIS - Home')
            this.columns_PublicKeyInfrastructure._click();
    };
    clickColumnsMobilePhone() {
        this.columns_MobilePhone._click();
        return this;
    };
    clickColumnsSecurityAdvisor() {
        this.columns_SecurityAdvisor._click();
        return this;
    };
    clickColumnsAuditing() {
        this.columns_Auditing._click();
        return this;
    };
    clickColumnsEnableAuditing() {
        this.columns_EnableAuditing._click();
        return this;
    };
    clickColumnsDisableAuditing() {
        this.columns_DisableAuditing._click();
        return this;
    };
    clickColumnsViewAuditDatabase() {
        this.columns_ViewAuditDatabase._click();
        return this;
    };
    clickColumnsConfigureSystemEvents() {
        this.columns_ConfigureSystemEvents._click();
        return this;
    };
    clickColumnsConfigureUserEvents() {
        this.columns_ConfigureUserEvents._click();
        return this;
    };
    clickColumnsCopyAuditLog() {
        this.columns_CopyAuditLog._click();
        return this;
    };
    clickColumnsExportAuditLog() {
        this.columns_ExportAuditLog._click();
        return this;
    };
    clickColumnsPurgeAuditLog() {
        this.columns_PurgeAuditLog._click();
        return this;
    };
    clickColumnsSystemSecurity() {
        this.columns_SystemSecurity._click();
        return this;
    };
    clickColumnsSystemwideSecurityParameters() {
        this.columns_SystemwideSecurityParameters._click();
        return this;
    };
    clickColumnsAuthenticationWebSessionOptions() {
        this.columns_AuthenticationWebSessionOptions._click();
        return this;
    };
    clickColumnsLDAPConfigurations() {
        this.columns_LDAPConfigurations._click();
        return this;
    };
    clickColumnsManagedFileTransferConnections() {
        this.columns_ManagedFileTransferConnections._click();
        return this;
    };


    //endregion navigation
    getConfigurationListText() {
        return this.list_configuration._getUniversal();
    }
    getSystemConfigurationListText() {
        return this.list_systemConfiguration._getUniversal();
    }
    getMemoryAndStartupListText() {
        return this.list_memoryAndStartup._getUniversal();
    }
    getNamespacesListText() {
        return this.list_namespaces._getUniversal();
    }
    getLocalDatabasesListText() {
        return this.list_localDatabases._getUniversal();
    }

    getRemoteDatabasesListText() {
        return this.list_remoteDatabases._getUniversal();
    }
    getShardingConfigurationListText() {
        return this.list_shardingConfiguration._getUniversal();
    }
    getJournalSettingsListText() {
        return this.list_journalSettings._getUniversal();
    }
    getConnectivityListText() {
        return this.list_connectivity._getUniversal();
    }
    getECPSettingsListText() {
        return this.list_ECPSettings._getUniversal();
    }
    getShadowServerSettingsListText() {
        return this.list_shadowServerSettings._getUniversal();
    }
    getSQLGatewayConnectionsListText() {
        return this.list_SQLGatewayConnections._getUniversal();
    }
    getJDBCGatewayServerListText() {
        return this.list_JDBCGatewayServer._getUniversal();
    }
    getObjectGatewaysListText() {
        return this.list_objectGateways._getUniversal();
    }
    getXSLTGatewayServerListText() {
        return this.list_XSLTGatewayServer._getUniversal();
    }
    getClusterSettingsListText() {
        return this.list_clusterSettings._getUniversal();
    }
    getMirrorSettingsListText() {
        return this.list_mirrorSettings._getUniversal();
    }
    getEnableMirrorServiceListText() {
        return this.list_enableMirrorService._getUniversal();
    }
    getCreateAMirrorListText() {
        return this.list_createAMirror._getUniversal();
    }
    getEditMirrorListText() {
        return this.list_editMirror._getUniversal();
    }
    getEditAsyncListText() {
        return this.list_editAsync._getUniversal();
    }
    getJoinAsFailoverListText() {
        return this.list_joinAsFailover._getUniversal();
    }
    getJoinAsAsyncListText() {
        return this.list_joinAsAsync._getUniversal();
    }
    getDatabaseBackupListText() {
        return this.list_databaseBackup._getUniversal();
    }
    getDatabaseBackupListListText() {
        return this.list_databaseBackupList._getUniversal();
    }
    getFullBackupOfAllDatabasesListText() {
        return this.list_fullBackupOfAllDatabases._getUniversal();
    }
    getFullBackupOfAllListListText() {
        return this.list_fullBackupOfAllList._getUniversal();
    }
    getIncrementalBackupListText() {
        return this.list_incrementalBackup._getUniversal();
    }
    getCumulativeBackupListText() {
        return this.list_cumulativeBackup._getUniversal();
    }
    getWebGatewayManagementListText() {
        return this.list_WebGatewayManagement._getUniversal();
    }
    getSQLAndObjectSettingsListText() {
        return this.list_SQLAndObjectSettings._getUniversal();
    }
    getGeneralSQLSettingsListText() {
        return this.list_generalSQLSettings._getUniversal();
    }
    getGeneralObjectSettingsListText() {
        return this.list_generalObjectSettings._getUniversal();
    }
    getTSQLCompatibilitySettingsListText() {
        return this.list_TSQLCompatibilitySettings._getUniversal();
    }
    getISQLCompatibilitySettingsListText() {
        return this.list_ISQLCompatibilitySettings._getUniversal();
    }
    // getFileManConversionSettingsListText() {
    //     return this.list_FileManConversionSettings._getUniversal();
    // }
    getSystemDefinedDDLMappingsListText() {
        return this.list_systemDDLMappings._getUniversal();
    }
    getUserDefinedDDLMappingsListText() {
        return this.list_userDDLMappings._getUniversal();
    }
    getDeviceSettingsListText() {
        return this.list_deviceSettings._getUniversal();
    }
    getDevicesListText() {
        return this.list_devices._getUniversal();
    }
    getMagneticTapeDevicesListText() {
        return this.list_magneticTapeDevices._getUniversal();
    }
    getDeviceSubtypesListText() {
        return this.list_deviceSubtypes._getUniversal();
    }
    getIOSettingsListText() {
        return this.list_IOSettings._getUniversal();
    }
    getTelnetSettingsListText() {
        return this.list_telnetSettings._getUniversal();
    }
    getNaturalLanguageSettingsListText() {
        return this.list_naturalLanguageSettings._getUniversal();
    }
    getConfiguredDefaultsListText() {
        return this.list_configuredDefaults._getUniversal();
    }
    getLocaleDefinitionsListText() {
        return this.list_localeDefinitions._getUniversal();
    }
    getImportLocalesOrTablesListText() {
        return this.list_importLocalesOrTables._getUniversal();
    }
    //Zen reports removed 1/8/2018
    //getZenReportsListText() {
    //     return this.list_ZenReports._getUniversal();
    // }
    //subsections added back as of 5/10/2018
    getReportServersListText() {
        return this.list_reportServers._getUniversal();
    }
    getRenderServersListText() {
        return this.list_RenderServers._getUniversal();
    }
    getPrintServersListText() {
        return this.list_PrintServers._getUniversal();
    }
    // getExcelServersListText() {
    //     return this.list_ExcelServers._getUniversal();
    // }
    getSettingsListText() {
        return this.list_settings._getUniversal();
    }
    getAdditionalSettingsListText() {
        return this.list_additionalSettings._getUniversal();
    }
    getCompatibilityListText() {
        return this.list_compatibility._getUniversal();
    }
    getAdvancedMemoryListText() {
        return this.list_advancedMemory._getUniversal();
    }
    getMonitorListText() {
        return this.list_monitor._getUniversal();
    }
    getSourceControlListText() {
        return this.list_sourceControl._getUniversal();
    }
    getStartupListText() {
        return this.list_Startup._getUniversal();
    }
    getTaskManagerEmailListText() {
        return this.list_taskManagerEmail._getUniversal();
    }
    getSecurityListText() {
        return this.list_security._getUniversal();
    }
    getUsersListText() {
        return this.list_users._getUniversal();
    }
    getRolesListText() {
        return this.list_roles._getUniversal();
    }
    getResourcesListText() {
        return this.list_resources._getUniversal();
    }
    getServicesListText() {
        return this.list_services._getUniversal();
    }
    getApplicationsListText() {
        return this.list_applications._getUniversal();
    }
    getWebApplicationsListText() {
        return this.list_webApplications._getUniversal();
    }
    getDocDBApplicationsListText() {
        return this.list_docDBApplications._getUniversal();
    }
    getPrivilegedRoutineApplicationsListText() {
        return this.list_privilegedRoutineApplications._getUniversal();
    }
    getClientApplicationsListText() {
        return this.list_clientApplications._getUniversal();
    }
    getSSLTLSConfigurationsListText() {
        return this.list_SSLTLSConfigurations._getUniversal();
    }
    getX509CredentialsListText() {
        return this.list_X509Credentials._getUniversal();
    }
    getOAuth20ListText() {
        return this.list_OAuth20._getUniversal();
    }
    getClientListText() {
        return this.list_client._getUniversal();
    }
    getServerListText() {
        return this.list_server._getUniversal();
    }
    getAdministrationListText() {
        return this.list_administration._getUniversal();
    }
    getManagedFileTransferConnectionsListText() {
        return this.list_managedFileTransferConnections._getUniversal();
    }
    getSystemSecurityListText() {
        return this.list_systemSecurity._getUniversal();
    }
    getSystemWideSecurityParametersListText() {
        return this.list_systemWideSecurityParameters._getUniversal();
    }
    getAuthenticationWebSessionOptionListText() {
        return this.list_authenticationWebSessionOption._getUniversal();
    }
    getLDAPConfigurationsListText() {
        return this.list_LDAPConfigurations._getUniversal();
    }
    getAuditingListText() {
        return this.list_auditing._getUniversal();
    }
    getEnableAuditingListText() {
        return this.list_enableAuditing._getUniversal();
    }
    getDisableAuditingListText() {
        return this.list_disableAuditing._getUniversal();
    }
    getViewAuditDatabaseListText() {
        return this.list_viewAuditDatabase._getUniversal();
    }
    getConfigureSystemEventsListText() {
        return this.list_configureSystemEvents._getUniversal();
    }
    getConfigureUserEventsListText() {
        return this.list_configureUserEvents._getUniversal();
    }
    getCopyAuditLogListText() {
        return this.list_copyAuditLog._getUniversal();
    }
    getExportAuditingListText() {
        return this.list_exportAuditLog._getUniversal();
    }
    getPurgeAuditLogListText() {
        return this.list_purgeAuditLog._getUniversal();
    }
    getSecurityAdvisorListText() {
        return this.list_securityAdvisor._getUniversal();
    }
    getMobilePhoneListText() {
        return this.list_mobilePhone._getUniversal();
    }
    getPublicKeyInfrastructureListText() {
        return this.list_publicKeyInfrastructure._getUniversal();
    }
    getLicensingListText() {
        return this.list_licensing._getUniversal();
    }
    getLicenseKeyListText() {
        return this.list_licenseKey._getUniversal();
    }
    getLicenseServersListText() {
        return this.list_licenseServers._getUniversal();
    }
    getEncryptionListText() {
        return this.list_encryption._getUniversal();
    }
    getCreateNewEncryptionKeyFileListText() {
        return this.list_createNewEncryptionKeyFile._getUniversal();
    }
    getManageEncryptionKeyFileListText() {
        return this.list_manageEncryptionKeyFile._getUniversal();
    }
    getDatabaseEncryptionListText() {
        return this.list_databaseEncryption._getUniversal();
    }
    getDataElementEncryptionListText() {
        return this.list_dataElementEncryption._getUniversal();
    }

//endregion validators

}
export default SystemAdministrationPage;