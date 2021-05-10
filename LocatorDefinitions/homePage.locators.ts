/**
 * History:
 * Created by osmolyar on 11/6/17.
 *
 * Description: Locators for Management Portal Home Screen
 */
import BasePage  from '../common/pageObjects/base.page';

class homePageLocators extends BasePage {

//get homeLink='//*[@onclick="return zenPage.goHome();"]')};
        get homeLink() {return $('//*[@id="title"]/div/div[1]/a[1]')};
        get aboutLink() {return $('//*[@id="title"]/div/div[1]/a[2]')};
        get helpLink() {return $('//*[@id="title"]/div/div[1]/a[3]')};
        get contactLink() {return $('//*[@id="title"]/div/div[1]/a[4]')};
        get logoutLink() {return $('//div[@class="portalTitleMenuBox"]/a[contains(.,"Logout")]')};
        get switchLink() {return $( '//*[@id=\"title\"]/div[3]/span[4]/a')};



        get leftNav_Home() {return $('//*[@id="cat_HOME"]/div/a/table/tbody/tr/td[2]/nobr')};
        get leftNav_HealthShare() {return $('//*[@id="cat_HS"]/div/a/table/tbody/tr/td[2]/nobr')};
        get leftNav_Analytics() {return $('//div[contains(@id,"DEEPSEE")]/div/a/table/tbody/tr/td[2]/nobr')};
        get leftNav_Interoperability() {return $('//div[contains(@id,"ENS")]/div/a/table/tbody/tr/td[2]/nobr')};
        get leftNav_SystemOperation() {return $('//*[@id="cat_SYSOP"]/div/a/table/tbody/tr/td[2]/nobr')};
        get leftNav_SystemExplorer() {return $('//*[@id="cat_SYSEXP"]/div/a/table/tbody/tr/td[2]/nobr')};
        get leftNav_SystemAdministration() {return $('//*[@id="cat_SYSADM"]/div/a/table/tbody/tr/td[2]/nobr')};

        get leftNav_OuterSelectors() {return $('[id*="cat_"]')};
        get leftNav_innerSelectorDivs() {return $('div[class*="selectorInner"]')};
        get leftNav_innerTDSelectors() {return $('_selectorInnerTD')};
        get leftNav_HomeOuterSelector() {return $('//*[@id="cat_HOME"]')};
        get leftNav_HealthShareOuterSelector() {return $('//*[@id="cat_HS"]')};
        get leftNav_AnalyticsOuterSelector() {return $('//div[contains(@id,"DEEPSEE")]')};
        get leftNav_InteroperabilityOuterSelector() {return $('//div[contains(@id,"ENS")]')};
        get leftNav_SystemOperationOuterSelector() {return $('//*[@id="cat_SYSOP"]')};
        get leftNav_SystemExplorerOuterSelector() {return $('//*[@id="cat_SYSEXP"]')};
        get leftNav_SystemAdministrationOuterSelector() {return $('//*[@id="cat_SYSADM"]')};

        get leftNav_HomeInnerSelector() {return $('//*[@id="cat_HOME"]//a')};
        get leftNav_HealthShareInnerSelector() {return $('//*[@id="cat_HS"]//a')};
        get leftNav_AnalyticsInnerSelector() {return $('//*[@id="cat_DEEPSEE"]//a')};

        get leftNav_InteroperabilityInnerSelector() {return $('//*[@id="cat_XENS"]//a')};
        get leftNav_SystemOperationInnerSelector() {return $('//*[@id="cat_SYSOP"]//a')};
        get leftNav_SystemExplorerInnerSelector() {return $('//*[@id="cat_SYSEXP"]//a')};
        get leftNav_SystemAdministrationInnerSelector() {return $('//*[@id="cat_SYSADM"]//a')};

        get viewList() {return $('//*[@id="view_list"]')};
        get viewIcons() {return $('//*[@id="view_icons"]')};
        get viewColumns() {return $('//*[@id="view_columns"]')};


        get menuButton() {return $('//*[@id="csMenuBarItem_6"]/div[3]')};
        get menu_configureNamespacesMenuItem() {return $('//*[@id="csMenuItem_27"]/div[2]')};
        get menu_configureDatabasesMenuItem() {return $('//*[@id="csMenuBarItem_6"]')};
        get menu_configureMemoryMenuItem() {return $('//*[@id="csMenuItem_29"]/div[2]')};

        get menu_viewSQLMenuItem() {return $('//*[@id="csMenuItem_37"]/div[2]')};
        get menu_viewClassesMenuItem() {return $('//*[@id="csMenuItem_38"]/div[2]')};
        get menu_viewRoutinesMenuItem() {return $('//*[@id="csMenuItem_39"]/div[2]')};
        get menu_viewGlobalsMenuItem() {return $('//*[@id="csMenuItem_40"]/div[2]')};

        get menu_manageWebApplications() {return $('//*[@id="csMenuItem_31"]/div[2]')};
        get menu_manageUsers() {return $('//*[@id="csMenuItem_32"]/div[2]')};
        get menu_manageRoles() {return $('//*[@id="csMenuItem_33"]/div[2]')};
        get menu_manageServices() {return $('//*[@id="csMenuItem_34"]/div[2]')};
        get menu_manageResources() {return $('//*[@id="csMenuItem_35"]/div[2]')};

        get menu_viewSystemDashboardMenuItem() {return $('//*[@id="csMenuItem_42"]/div[2]')};
        get menu_manageLocksMenuItem() {return $('//*[@id="csMenuItem_43"]/div[2]')};
        get menu_viewProcessesMenuItem() {return $('//*[@id="csMenuItem_44"]/div[2]')};
        get menu_viewConsoleLogMenuItem() {return $('//*[@id="csMenuItem_45"]/div[2]')};
        get menu_viewBackgroundTasksMenuItem() {return $('//*[@id="csMenuItem_46"]/div[2]')};

        get rightPane_favorites() {return $('//*[@id="finder"]/div/table/tbody/tr[1]/td[1]/table/tbody/tr[1]/td')};
        get rightPane_didYouKnow() {return $('//*[@id="finder"]/div/table/tbody/tr[1]/td[2]/table/tbody/tr/td')};
        get rightPane_recent() {return $('//*[@id="finder"]/div/table/tbody/tr[2]/td[1]/table/tbody/tr[1]/td')};
        get rightPane_links() {return $('//*[@id="finder"]/div/table/tbody/tr[2]/td[2]/table/tbody/tr[1]/td')};
 }


export default homePageLocators;