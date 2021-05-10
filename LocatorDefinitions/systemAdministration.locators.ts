/**
 * History:
 * Created by osmolyar on 1/2/17.
 *
 * Description: Locators for System Administration landing page
 */
import BasePage  from '../common/pageObjects/base.page';

class systemAdministrationPageLocators extends BasePage {

    get modalGroupTitle() {return $('.modalGroupTitle.modalGroupDialog')};

    get columns_goButton() {return $('//*[@id="fc_2_24"]/div/a[1]')};
    get leftNav_SystemAdministrationOuterSelector() {return $('//*[@id="cat_SYSADM"]')};

    //Configuration
    // get columns_Configuration() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Configuration")]')};
    get columns_Configuration() {return $('//*[@id="a_0_24"]')};
    //Configuration->System Configuration:
    get columns_SystemConfiguration() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"System Configuration")]')};
    get columns_MemoryAndStartup() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Memory and Startup")]/span')};
    get columns_Namespaces() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Namespaces")]/span')};
    get columns_LocalDatabases() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Local Databases")]/span')};
    get columns_RemoteDatabases() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Remote Databases")]/span')};
    get columns_ShardingConfiguration() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Sharding Configuration")]/span')};
    get columns_JournalSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Journal Settings")]/span')};

    //Connectivity
    get columns_Connectivity() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Connectivity")]')};
    get columns_ECPSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"ECP Settings")]/span')};
    get columns_ShadowServerSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Shadow Server Settings")]/span')};
    get columns_SQLGatewayConnections() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"SQL Gateway Connections")]/span')};
    get columns_JDBCGatewayServer() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"JDBC Gateway Server")]/span')};
    get columns_ObjectGateways() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Object Gateways")]/span')};
    get columns_XSLT20GatewayServer() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"XSLT Gateway Server")]/span')};
    get columns_ClusterSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Cluster Settings")]/span')};

    //Mirror Settings
    get columns_MirrorSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Mirror Settings")]')};
    get columns_EnableMirrorService() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Enable Mirror Service")]/span')};
    get columns_CreateAMirror() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Create a Mirror")]/span')};
    get columns_EditMirror() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Edit Mirror")]/span')};
    get columns_EditAsync() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Edit Async")]/span')};
    get columns_JoinAsFailover() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Join as Failover")]/span')};
    get columns_JoinAsAsync() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Join as Async")]/span')};

    //Database Backup
    get columns_DatabaseBackup() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Database Backup")]')};
    get columns_DatabaseBackupList() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Database Backup List")]/span')};
    get columns_FullBackupOfAllDatabases() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Full Backup")]/span')};
    get columns_FullBackupOfAllList() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Backup of All on List")]/span')};
    get columns_IncrementalBackup() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Incremental Backup")]/span')};
    get columns_CumulativeBackup() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Cumulative Backup")]/span')};

    //WebGatewayManagement
    get columns_WebGatewayManagement() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Web Gateway Management")]/span')};

    //SQLAndObjectSettings
    get columns_SQLAndObjectSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"SQL and Object Settings")]')};
    // get columns_GeneralSQLSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"SQL")]/span')};
    get columns_GeneralSQLSettings() {return $('//*[@id="a_0,5,0_24"]/span')};
    get columns_GeneralObjectSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Objects")]/span')};
    get columns_TSQLCompatibilitySettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"TSQL Compatibility")]/span')};
    get columns_ISQLCompatibilitySettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"ISQL Compatibility")]/span')};
    get columns_SystemDDLMappings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"System DDL Mappings")]/span')};
    get columns_UserDDLMappings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"User DDL Mappings")]/span')};

    //DeviceSettings
    get columns_DeviceSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Device Settings")]')};
    get columns_Devices() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Devices")]/span')};
    get columns_MagneticTapeDevices() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Magnetic Tape Devices")]/span')};
    get columns_DeviceSubtypes() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Device Subtypes")]/span')};
    get columns_IOSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"IO Settings")]/span')};
    get columns_TelnetSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Telnet Settings")]/span')};

    //NationalLanguageSettings
    get columns_NationalLanguageSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"National Language Settings")]')};
    get columns_ConfiguredDefaults() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Configured Defaults")]/span')};
    get columns_LocaleDefinitions() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Locale Definitions")]/span')};
    get columns_ImportLocalesorTables() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Import Locales or Tables")]/span')};

    //ReportServers
    get columns_ReportServers() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Report Servers")]')};
    get columns_RenderServers() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Render Servers")]/span')};
    get columns_PrintServers() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Print Servers")]/span')};
    //get columns_ExcelServers() {return $('//*[@id="a_0,8,2_24"]/span')};
    // get columns_Settings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Settings")]/span')};
    get columns_Settings() {return $('//*[@id="a_0,8,2_24"]/span')};

    //AdditionalSettings
    get columns_AdditionalSettings() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Additional Settings")]')};
    get columns_Compatibility() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Compatibility")]/span')};
    get columns_AdvancedMemory() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Advanced Memory")]/span')};
    get columns_Monitor() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Monitor")]/span')};
    get columns_SourceControl() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Source Control")]/span')};
    get columns_Startup() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Startup")]/span')};
    get columns_TaskManagerEmail() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Task Manager Email")]/span')};

    //System Administration->Security:
    get columns_Security() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Security")]')};
    get columns_Users() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Users")]/span')};
    get columns_Roles() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Roles")]/span')};
    get columns_Resources() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Resources")]/span')};
    get columns_Services() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Services")]/span')};

    get columns_Applications() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Applications")]')};
    get columns_WebApplications() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Web Applications")]/span')};
    get columns_DocDBApplications() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Doc DB Applications")]/span')};
    get columns_PrivilegedRoutineApplications() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Privileged Routine Applications")]/span')};
    get columns_ClientApplications() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Client Applications")]/span')};

    get columns_SSLTLSConfigurations() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"SSL/TLS Configurations")]/span')};
    get columns_X509Credentials() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"X.509 Credentials")]/span')};

    get columns_OAuth20() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"OAuth 2.0")]')};
    get columns_Client() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Client")]/span')};
    get columns_Server() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Server")]/span')};
    get columns_Administration() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Administration")]/span')};

    get columns_ManagedFileTransferConnections() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Managed File Transfer Connections")]/span')};

    get columns_SystemSecurity() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"System Security")]')};
    get columns_SystemwideSecurityParameters() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"System-wide Security Parameters")]/span')};
    get columns_AuthenticationWebSessionOptions() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Authentication")]/span')};
    get columns_LDAPConfigurations() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"LDAP")]/span')};

    get columns_Auditing() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Auditing")]')};
    get columns_EnableAuditing() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Enable Auditing")]/span')};
    get columns_DisableAuditing() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Disable Auditing")]/span')};
    get columns_ViewAuditDatabase() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"View Audit Database")]/span')};
    get columns_ConfigureSystemEvents() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Configure System Events")]/span')};
    get columns_ConfigureUserEvents() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Configure User Events")]/span')};
    get columns_CopyAuditLog() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Copy Audit Log")]/span')};
    get columns_ExportAuditLog() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Export Audit Log")]/span')};
    get columns_PurgeAuditLog() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Purge Audit Log")]/span')};

    get columns_SecurityAdvisor() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Security Advisor")]/span')};
    get columns_MobilePhone() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Mobile Phone")]/span')};
    get columns_PublicKeyInfrastructure() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Public Key Infrastructure")]/span')};

    //Licensing
    get columns_Licensing() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Licensing")]')};
    get columns_LicenseKey() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"License Key")]/span')};
    get columns_LicenseServers() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"License Servers")]/span')};

    //Encryption
    get columns_Encryption() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Encryption")]')};
    get columns_CreateNewEncryptionKeyFile() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Create New Encryption Key File")]/span')};
    get columns_ManageEncryptionKeyFile() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Manage Encryption Key File")]/span')};
    get columns_DatabaseEncryption() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Database Encryption")]/span')};
    get columns_DataElementEncryption() {return $('//table/tbody/tr/td/div/div/div//a[contains(.,"Data Element Encryption")]/span')};


    // get list_configuration () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Configuration")][1]')};
    get list_configuration () {return $('//*[@id="row_0_24"]/td[2]')};
    get list_systemConfiguration () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"System Configuration")]')};
    get list_memoryAndStartup () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Memory and Startup")]/a')};
    get list_namespaces () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Namespaces")]/a')};
    get list_localDatabases () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Local Databases")]/a')};
    get list_remoteDatabases () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Remote Databases")]/a')};
    get list_shardingConfiguration () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Sharding Configuration")]/a')};
    get list_journalSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Journal Settings")]/a')};
    get list_connectivity () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Connectivity")]')};
    get list_ECPSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"ECP Settings")]/a')};
    get list_shadowServerSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Shadow Server Settings")]/a')};
    get list_SQLGatewayConnections () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"SQL Gateway Connections")]/a')};
    get list_JDBCGatewayServer () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"JDBC Gateway Server")]/a')};
    get list_objectGateways () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Object Gateways")]/a')};
    get list_XSLTGatewayServer () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"XSLT Gateway Server")]/a')};

    get list_clusterSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Cluster Settings")]/a')};
    get list_mirrorSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Mirror Settings")]')};
    get list_enableMirrorService () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Enable Mirror Service")]/a')};
    get list_createAMirror () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Create a Mirror")]/a')};
    get list_editMirror () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Edit Mirror")]/a')};
    get list_editAsync () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Edit Async")]/a')};
    get list_joinAsFailover () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Join as Failover")]/a')};
    get list_joinAsAsync () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Join as Async")]/a')};
    // get list_databaseBackup () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Database Backup")]')};
    get list_databaseBackup () {return $('//*[@id="row_0,3_24"]/td[2]')};
    get list_databaseBackupList () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Database Backup List")]/a')};
    get list_fullBackupOfAllDatabases () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Full Backup")]/a')};
    get list_fullBackupOfAllList () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Backup of All on List")]/a')};

    get list_incrementalBackup () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Incremental Backup")]/a')};
    get list_cumulativeBackup () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Cumulative Backup")]/a')};
    get list_WebGatewayManagement () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Web Gateway Management")]/a')};
    get list_SQLAndObjectSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"SQL and Object Settings")]')};
    // get list_generalSQLSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"SQL")]/a')};
    get list_generalSQLSettings () {return $('//*[@id="row_0,5,0_24"]/td[2]/a')};
    get list_generalObjectSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Objects")]/a')};
    get list_TSQLCompatibilitySettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"TSQL Compatibility")]/a')};
    get list_ISQLCompatibilitySettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"ISQL Compatibility")]/a')};
    // get list_fileManConversionSettings () {return $('//*[@id="row_0,5,4_24"]/td[2]/a')};
    get list_systemDDLMappings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"System DDL Mappings")]/a')};
    get list_userDDLMappings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"User DDL Mappings")]/a')};
    get list_deviceSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Device Settings")]')};
    // get list_devices () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Devices")]/a')};
    get list_devices () {return $('//*[@id="row_0,6,0_24"]/td[2]/a')};

    get list_magneticTapeDevices () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Magnetic Tape Devices")]/a')};
    get list_deviceSubtypes () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Device Subtypes")]/a')};
    get list_IOSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"IO Settings")]/a')};
    get list_telnetSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Telnet Settings")]/a')};

    get list_naturalLanguageSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"National Language Settings")]')};
    get list_configuredDefaults () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Configured Defaults")]/a')};
    get list_localeDefinitions () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Locale Definitions")]/a')};
    get list_importLocalesOrTables () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Import Locales or Tables")]/a')};
    //Zen reports removed as of 1/8/2018
    //get list_ZenReports () {return $('//*[@id="row_0,8_24"]/td[2]/a')};

    //Report Servers and subsections previously removed with Zen Reports restored as of 5/10/2018
    get list_reportServers () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Report Servers")]')};
    get list_RenderServers () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Render Servers")]/a')};
    get list_PrintServers () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Print Servers")]/a')};
    //get list_ExcelServers() {return $('//*[@id="row_0,8,2_24"]/td[2]/a')};
    // get list_settings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Settings")]/a')};
    get list_settings () {return $('//*[@id="row_0,8,2_24"]/td[2]/a')};
    get list_additionalSettings () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Additional Settings")]')};
    get list_compatibility () {return $('//*[@id="row_0,9,0_24"]/td[2]/a')};
    // get list_compatibility () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Compatibility")]/a')};
    get list_advancedMemory () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Advanced Memory")]/a')};
    get list_monitor () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Monitor")]/a')};
    get list_sourceControl () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Source Control")]/a')};
    // get list_Startup () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Startup")]/a')};
    get list_Startup () {return $('//*[@id="row_0,9,4_24"]/td[2]/a')};
    get list_taskManagerEmail () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Task Manager Email")]/a')};

    // get list_security () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Security")]')};
    get list_security () {return $('//*[@id="row_1_24"]/td[2]')};

    get list_users () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Users")]/a')};
    get list_roles () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Roles")]/a')};
    get list_resources () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Resources")]/a')};
    get list_services () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Services")]/a')};
    get list_applications() {return $('//*[@id="row_1,4_24"]/td[2]')};
    //get list_applications() {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Applications")]')};
    get list_webApplications () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Web Applications")]/a')};
    get list_docDBApplications () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Doc DB Applications")]/a')};
    get list_privilegedRoutineApplications () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Privileged Routine Applications")]/a')};
    get list_clientApplications () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Client Applications")]/a')};
    get list_SSLTLSConfigurations () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"SSL/TLS Configurations")]/a')};

    get list_X509Credentials () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"X.509 Credentials")]/a')};

    get list_OAuth20 () {return $('//*[@id="row_1,7_24"]/td[2]')};

    get list_client () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Client")]/a')};
    // get list_server () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Server")]/a')};
    get list_server () {return $('//*[@id="row_1,7,1_24"]/td[2]/a')};

    get list_administration () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Administration")]/a')};
    get list_managedFileTransferConnections () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Managed File Transfer Connections")]/a')};

    get list_systemSecurity () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"System Security")]')};
    get list_systemWideSecurityParameters () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"System-wide Security Parameters")]/a')};
    get list_authenticationWebSessionOption() {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Authentication/Web Session Options")]/a')};
    get list_LDAPConfigurations () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"LDAP/Kerberos Configurations")]/a')};

    // get list_auditing () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Auditing")]')};
    get list_auditing () {return $('//*[@id="row_1,10_24"]/td[2]')};
    get list_enableAuditing () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Enable Auditing")]/a')};
    get list_disableAuditing () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Disable Auditing")]/a')};
    get list_viewAuditDatabase () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"View Audit Database")]/a')};

    get list_configureSystemEvents () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Configure System Events")]/a')};
    get list_configureUserEvents () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Configure User Events")]/a')};
    get list_copyAuditLog () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Copy Audit Log")]/a')};
    get list_exportAuditLog () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Export Audit Log")]/a')};
    get list_purgeAuditLog () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Purge Audit Log")]/a')};
    get list_securityAdvisor () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Security Advisor")]/a')};
    get list_mobilePhone () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Mobile Phone")]/a')};
    get list_publicKeyInfrastructure () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Public Key Infrastructure")]/a')};

    get list_licensing() {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Licensing")]')};
    get list_licenseKey () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"License Key")]/a')};
    get list_licenseServers () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"License Servers")]/a')};

    // get list_encryption () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Encryption")]')};
    get list_encryption () {return $('//*[@id="row_3_24"]/td[2]')};
    get list_createNewEncryptionKeyFile () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Create New Encryption Key File")]/a')};
    get list_manageEncryptionKeyFile () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Manage Encryption Key File")]/a')};
    get list_databaseEncryption () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Database Encryption")]/a')};
    get list_dataElementEncryption () {return $('//table[@class="finderListTable"]//tbody/tr/td[contains(.,"Data Element Encryption")]/a')};
}
export default systemAdministrationPageLocators;


