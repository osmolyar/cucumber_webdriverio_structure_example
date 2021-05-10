/**
 * Created by osmolyar on 11/6/2017.
 */


import LoginPageValidationService from './Login.validationService';
import validateUtilities  from '../common/utilities/validateUtilities';
import ManagementPortalHome from '../pageObjects/HomeManagementPortal.page';

class ManagementPortalValidationService extends ManagementPortalHome {

 //validation methods

    validateLogin(loginStatus) {
        if (loginStatus === true)
            this.validateSuccessfulLogIn();
        else
            LoginPageValidationService.validateUnsuccessfulLogIn();
    }

    //region validators
    validateSuccessfulLogIn() {
        //   validateUtilities.validatePageTitle('IRIS - Home','Failed to navigate to Home page');
        //for custardvm 57776
        //  validateUtilities.validatePageTitle('I20182 - Home','Failed to navigate to Home page');
        //for wellfleet 57689
        validateUtilities.validatePageTitle('AMLTRDB - Home','Failed to navigate to Home page');
    }

    validatePageTitle() {
        //   validateUtilities.validatePageTitle('IRIS - Home','Failed to navigate to Home page');
        //for custardvm 57776
        //  validateUtilities.validatePageTitle('I20182 - Home','Failed to navigate to Home page');
        //for wellfleet 57689
        validateUtilities.validatePageTitle('AMLTRDB - Home','Failed to navigate to Home page');
    }

    validateHomeLeftNavText () {
        expect(this.getHomeNavItemText()).toContain('Home');
    };

    validateAnalyticsLeftNavText () {
        expect(this.getAnalyticsNavItemText()).toContain('Analytics');
    };

    validateInteroperabilityLeftNavText () {
        expect(this.getInteroperabilityNavItemText()).toContain('Interoperability');
    };

    validateSystemExplorerLeftNavText () {
        expect(this.getSystemExplorerNavItemText()).toContain('System Explorer');
    };

    validateSystemOperationLeftNavText () {
        expect(this.getSystemOperationNavItemText()).toContain('System Operation');
    };

    validateSystemAdministrationLeftNavText () {
        expect(this.getSystemAdministrationNavItemText()).toContain('System Administration');
    };

    validateMenuButtonText () {
        expect(this.getMenuButtonText()).toBe('Menu');
    };

    validateHomeLinkText () {
        expect(this.getHomeLinkText()).toBe('Home');
    };

    validateAboutLinkText () {
        expect(this.getAboutLinkText()).toBe('About');
    };

    validateHelpLinkText () {
        expect(this.getHelpLinkText()).toBe('Help');
    };

    validateContactLinkText () {
        expect(this.getContactLinkText()).toBe('Contact');
    };

    validateLogoutLinkText () {
        expect(this.getLogoutLinkText()).toBe('Logout');
    };

    validateFavoritesHeaderText () {
        expect(this.getFavoritesHeaderText()).toBe('Favorites');
    };

    validateDidYouKnowHeaderText () {
        expect(this.getDidYouKnowHeaderText()).toBe('Did you know?');
    };

    validateRecentHeaderText () {
        expect(this.getRecentHeaderText()).toBe('Recent');
    };

    validateLinksHeaderText () {
        expect(this.getLinksHeaderText()).toBe('Links');
    };

    validateColumnsIconSelected (status=true) {
        if (status=true){
            expect(this.getColumnsIconClass()).toBe('viewIconSelected');
        }
        else if (status=false)
        expect(this.getColumnsIconClass()).toBe('viewIcon');
    };

    validateListIconSelected (status=true) {
        if (status=true){
            expect(this.getListIconClass()).toBe('viewIconSelected');
        }
        else if (status=false)
            expect(this.getListIconClass()).toBe('viewIcon');
    };

    validateIconsIconSelected (status=true) {
        if (status=true){
            expect(this.getIconsIconClass()).toBe('viewIconSelected');
        }
        else if (status=false)
            expect(this.getIconsIconClass()).toBe('viewIcon');
    };

    //endregion validators
}

export default ManagementPortalValidationService;
