/**
 * History:
 * Created by osmolyar on 11/6/2017.
 *
 * Description: Page Object for Management portal
 * Defines UI elements and atomic operations against the elements
 */

import ManagementPortalLocators from '../LocatorDefinitions/homePage.locators';
import BasePage  from '../common/pageObjects/base.page';
import homePageLocators from "../LocatorDefinitions/homePage.locators"

class managementPortal extends homePageLocators {

    /**
     * define elements
     */

//region NavigationMethods

    /**
     * define methods
     */
    clickHome() {
        this.homeLink._click()
    };
    clickHelp() {
        this.helpLink._click()
    };
    clickAbout() {
        this.aboutLink._click()
    };
    clickContact() {
        this.contactLink._click()
    };
    clickLogout() {
        this.logoutLink._click()
    };
    clickListView() {
        this.viewList._click()
    };
    clickColumnsView() {
        this.viewColumns._click()
    };
    clickIconsView() {
        this.viewIcons._click()
    };
    clickHomeNavItem() {
        this.leftNav_Home._click();
    };
    clickAnalyticsNavItem() {
        this.leftNav_Analytics._click();
    };
    clickInteroperabilityNavItem() {
        this.leftNav_Interoperability._click();
    };
    clickSystemOperationNavItem() {
        this.leftNav_SystemOperation._click();
    };
    clickSystemExplorerNavItem() {
        this.leftNav_SystemExplorer._click()
    };
    clickSystemAdministrationNavItem() {
        this.leftNav_SystemAdministration._click();
    };
    clickMenu() {
         this.menuButton._click()
    }
    selectNamespacesMenuItem() {
        this.menu_configureNamespacesMenuItem._click()
    }
    selectDatabasesMenuItem() {
        this.menu_configureDatabasesMenuItem._click()
    }
    selectMemoryMenuItem() {
        this.menu_configureMemoryMenuItem._click()
    }
    selectSQLMenuItem() {
        this.menu_viewSQLMenuItem._click()
    }
    selectClassesMenuItem() {
       this.menu_viewClassesMenuItem._click()
    }
    selectRoutinesMenuItem() {
       this.menu_viewRoutinesMenuItem._click()
    }
    selectGlobalsMenuItem() {
        this.menu_viewGlobalsMenuItem._click()
    }
    selectWebApplicationsMenuItem() {
        this.menu_manageWebApplications._click()
    }
    selectUsersMenuItem() {
        this.menu_manageUsers._click()
    }
    selectRolesMenuItem() {
        this.menu_manageRoles._click()
    }
    selectServicesMenuItem() {
        this.menu_manageServices._click()
    }
    selectResourcesMenuItem() {
        this.menu_manageResources._click()
    }
    selectSystemDashboardMenuItem() {
        this.menu_viewSystemDashboardMenuItem._click()
    }
    selectLocksMenuItem() {
        this.menu_manageLocksMenuItem._click()
    }
    selectProcessesMenuItem() {
        this.menu_viewProcessesMenuItem._click()
    }
    selectConsoleLogMenuItem() {
        this.menu_viewConsoleLogMenuItem._click()
    }
    selectBackgroundTasksMenuItem() {
        this.menu_viewBackgroundTasksMenuItem._click()
    }
    clickSwitch() {
        this.switchLink._click();
    };
    //endregion NavigationMethods

    //region validationUtilities
    getHomeNavItemText() {
        return this.leftNav_Home._getText();
    }
    getAnalyticsNavItemText() {
        return this.leftNav_Analytics._getText();
    }
    getInteroperabilityNavItemText() {
        return this.leftNav_Interoperability._getText();
    }
    getSystemOperationNavItemText() {
        return this.leftNav_SystemOperation._getText();
    }
    getSystemExplorerNavItemText() {
        return this.leftNav_SystemExplorer._getText();
    }
    getSystemAdministrationNavItemText() {
        return this.leftNav_SystemAdministration._getText();
    }
    getColumnsIconClass() {
        return this.viewColumns.getAttribute('class');
    }
    getListIconClass() {
        return this.viewList.getAttribute('class');
    }
    getIconsIconClass() {
        return this.viewIcons.getAttribute('class');
    }
    getFavoritesHeaderText() {
        return this.rightPane_favorites._getText();
    }
    getDidYouKnowHeaderText() {
        return this.rightPane_didYouKnow._getText();
    }
    getRecentHeaderText() {
        return this.rightPane_recent._getText();
    }
    getLinksHeaderText() {
        return this.rightPane_links._getText();
    }
    getHomeLinkText() {
        return this.homeLink._getText();
    };
    getMenuButtonText() {
        return this.menuButton._getText();
    };
    getHelpLinkText() {
        return this.helpLink._getText();
    };
    getAboutLinkText() {
        return this.aboutLink._getText();
    };
    getContactLinkText() {
        return this.contactLink._getText();
    };
    getLogoutLinkText() {
        return this.logoutLink._getText();
    };
    getLeftNavAccessList() {
        let titleList=[];
        titleList.push(this.leftNav_HomeOuterSelector.getAttribute('title'));
        titleList.push(this.leftNav_AnalyticsOuterSelector.getAttribute('title'));
        titleList.push(this.leftNav_InteroperabilityOuterSelector.getAttribute('title'));
        titleList.push(this.leftNav_SystemOperationOuterSelector.getAttribute('title'));
        titleList.push(this.leftNav_SystemExplorerOuterSelector.getAttribute('title'));
        titleList.push(this.leftNav_SystemAdministrationOuterSelector.getAttribute('title'));

        console.log("title list is: "+ JSON.stringify(titleList));

        let enabledList=[];

        titleList.forEach(function(title) {
            if (title==="You do not have privilege to view this page.")
                enabledList.push(false);
            else
                enabledList.push(true);
        });
        return enabledList;
    };
    //endregion validationUtilities
}
export default  managementPortal;