
import GenericUtilities from '../../common/utilities/genericUtilities';
import SessionUtilities from '../../utilities/sessionUtilities';
import ValidateUtilities  from '../../common/utilities/validateUtilities';
import HomePageUiService from '../../pageNavigationUiServices/ManagementPortal.uiService';
import BasePage from  '../../common/pageObjects/base.page';
import testConfig from '../../testConfig/wdio.local.config';
import LoginPage  from '../../pageNavigationUiServices/Login.uiService';
import CustomWorld from "../support/world";
import { Given, When, Then, setWorldConstructor } from 'cucumber';
setWorldConstructor(CustomWorld);

const basePage=new BasePage();
const loginPage=new LoginPage();

Given(/^I log in to Management Portal and switch to the (.*) namespace$/, function (namespace) {
    this.nav.homePage=loginPage.logInToApplication(this.context.loginBusinessOptions);
    this.nav.namespaceChooser=this.nav.homePage.switchNamespace();
    this.nav.namespaceChooser.selectNamespace(namespace);
});

Given(/^I switch to namespace (.*)$/, function (namespace) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    this.nav.namespaceChooser=this.nav.homePage.switchNamespace();
    this.nav.namespaceChooser.selectNamespace(namespace);
});

Given(/^I switch to an interoperability-enabled namespace$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    this.nav.namespaceChooser=this.nav.homePage.switchNamespace();
    this.nav.namespaceChooser.selectAvailableNamespace();
});

Given(/^I return to the home page$/, function () {
    this.nav.homePage.goHome();
});

Given(/^I log in to the application$/, function () {
    this.nav.homePage=loginPage.logInToApplication(this.context.loginBusinessOptions);
});

Given(/^I reload the browser$/, function () {
    SessionUtilities.reloadBrowser();
});

Given(/^I log into the application as the new user$/, function () {
    this.context.loginBusinessOptions.login=this.context.userBusinessOptions.login;
    this.context.loginBusinessOptions.password=this.context.userBusinessOptions.passwd;
    this.nav.homePage=loginPage.logInToApplication(this.context.loginBusinessOptions);
});

Given(/^I log into the application as user (.*) with password (.*)$/, function (user,password) {
    this.context.loginBusinessOptions.login=user;
    this.context.loginBusinessOptions.password=password;
    this.nav.homePage=loginPage.logInToApplication(this.context.loginBusinessOptions);
});

Given(/^I attempt to log into the application as user (.*) with password (.*) (.*)$/, function (user,password,access) {
    this.context.loginBusinessOptions.login=user;
    this.context.loginBusinessOptions.password=password;
    this.nav.homePage=loginPage.logInToApplication(this.context.loginBusinessOptions,access);
});

Given(/^I log into the application and switch to namespace (.*) as user (.*) with password (.*)$/, function (namespace,user,password) {
    this.context.loginBusinessOptions.login=user;
    this.context.loginBusinessOptions.password=password;
    this.nav.homePage=loginPage.logInToApplication(this.context.loginBusinessOptions);
    this.nav.namespaceChooser=this.nav.homePage.switchNamespace();
    this.nav.namespaceChooser.selectNamespace(namespace);
});

Given(/^I go to the home page$/, function () {
    this.nav.homePage.goHome();
});

Given(/^I log out of the application$/, function () {
    this.nav.homePage.logOut();
});

When(/^I navigate to the left nav item (.*)$/, function (location) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    let locator=location.replace(/ /g,"");
    locator=locator.replace("-","");
    locator=locator.replace("/","");
    locator=locator.replace(".","");
    switch(locator) {
        case 'Analytics':
            context.analyticsPage=this.nav.homePage.goToAnalyticsLeftNav().clickColumnsView();
            break;
        case 'Interoperability':
            context.interoperabilityPage=this.nav.homePage.goToInteroperabilityLeftNav().clickColumnsView();
            break;
        case 'SystemOperation':
            context.systemOperationPage=this.nav.homePage.goToSystemOperationLeftNav().clickColumnsView();
            break;
        case 'SystemExplorer':
            context.systemExplorerPage=this.nav.homePage.goToSystemExplorerLeftNav().clickColumnsView();
            break;
        case 'SystemAdministration':
            context.systemAdministrationPage=this.nav.homePage.goToSystemAdministrationLeftNav().clickColumnsView();
            break;
        default:
            this.nav.homePage.goToHomeLeftNav();
    }
});

Given(/^I switch to columns view$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    this.nav.homePage.selectColumnsView();
});

When(/^I navigate to the System Administration (.*) page$/, function (page) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    context[GenericUtilities.lowercaseFirstLetter(page)+'Page']=this.nav.homePage.goToSystemAdministrationLeftNav()['goTo'+page]();

});

When(/^I navigate to the System Explorer (.*) page$/, function (page) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    context[GenericUtilities.lowercaseFirstLetter(page)+'Page']=this.nav.homePage.goToSystemExplorerLeftNav()['goTo'+page]();
});

When(/^I navigate to the System Operation (.*) page$/, function (page) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    context[GenericUtilities.lowercaseFirstLetter(page)+'Page']=this.nav.homePage.goToSystemOperationLeftNav()['goTo'+page]();
});

When(/^I navigate to the Interoperability (.*) page$/, function (page) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    context[GenericUtilities.lowercaseFirstLetter(page)+'Page']=this.nav.homePage.goToInteroperabilityLeftNav()['goTo'+page]();
});

Given(/^I navigate to the Interoperability page and select namespace (.*)$/, function (namespace) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    context.interoperabilityPage=this.nav.homePage.goToInteroperabilityLeftNav();
    context.interoperabilityPage.selectNewNamespace(namespace);
});

When(/^I navigate to the Analytics (.*) page$/, function (page) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    context[GenericUtilities.lowercaseFirstLetter(page)+'Page']=this.nav.homePage.goToAnalyticsLeftNav()['goTo'+page]();

});

When(/^I navigate to the following path:$/, function (table) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    const nodes=table.rowsHash();
    console.log(JSON.stringify(nodes));
    for (var key in nodes) {
        nodes[key] = nodes[key].replace(/ /g, "");
        nodes[key]  = nodes[key] .replace("-", "");
        nodes[key]  = nodes[key] .replace("/", "");
        nodes[key]  = nodes[key] .replace(".", "");
    }

    this.context.navigationBusinessOptions=nodes;
    try {
        switch (nodes.click1) {
            case 'Analytics':
                context.analyticsPage = this.nav.homePage.goToAnalyticsLeftNav();
                if (nodes.click2) {
                    context.analyticsPage.clickColumnItem(nodes.click2);
                    if (nodes.click3) {
                        context.analyticsPage.clickColumnItem(nodes.click3);
                        if (nodes.click4) {
                            context.analyticsPage.clickColumnItem(nodes.click4);
                        }
                    }
                }
                break;
            case 'Interoperability':
                context.interoperabilityPage = this.nav.homePage.goToInteroperabilityLeftNav();
                if (nodes.click2) {
                    context.interoperabilityPage.clickColumnItem(nodes.click2);
                    if (nodes.click3) {
                        context.interoperabilityPage.clickColumnItem(nodes.click3);
                        if (nodes.click4) {
                            context.interoperabilityPage.clickColumnItem(nodes.click4);
                        }
                    }
                }
                break;
            case 'SystemOperation':
                context.systemOperationPage = this.nav.homePage.goToSystemOperationLeftNav();
                if (nodes.click2) {
                    context.systemOperationPage.clickColumnItem(nodes.click2);
                    if (nodes.click3) {
                        context.systemOperationPage.clickColumnItem(nodes.click3);
                        if (nodes.click4) {
                            context.systemOperationPage.clickColumnItem(nodes.click4);
                        }
                    }
                }
                break;
            case 'SystemExplorer':
                context.systemExplorerPage = this.nav.homePage.goToSystemExplorerLeftNav();
                if (nodes.click2) {
                    context.systemExplorerPage['clickColumns' + nodes.click2]();
                    if (nodes.click3) {
                        context.systemExplorerPage['clickColumns' + nodes.click3]();
                        if (nodes.click4) {
                            context.systemExplorerPage['clickColumns' + nodes.click4]();
                        }
                    }
                }
                break;
            case 'SystemAdministration':
                context.systemAdministrationPage = this.nav.homePage.goToSystemAdministrationLeftNav();
                if (nodes.click2) {
                    console.log('clicking '+ nodes.click2);
                    context.systemAdministrationPage['clickColumns' + nodes.click2]();
                    if (nodes.click3) {
                        console.log('clicking '+ nodes.click3);
                        context.systemAdministrationPage['clickColumns' + nodes.click3]();
                        if (nodes.click4) {
                            console.log('clicking '+ nodes.click4);
                            context.systemAdministrationPage['clickColumns' + nodes.click4]();
                        }
                    }
                }

                break;
            default:
                this.nav.homePage.goToHomeLeftNav();
        }
        this.context.navigationValidationOptions.pathEnabled='true';
    }
    catch(err)
    { this.context.navigationValidationOptions.pathEnabled='false';
        console.log("Navigation error is: "+ err);}
    assert.equal(this.context.navigationValidationOptions.pathEnabled,this.context.navigationBusinessOptions.access,'Navigation access not enabled as expected');
});

When(/^I navigate to the link (.*)$/, function (url) {
    basePage.open(testConfig.config.baseUrl + url);
});

When(/^I navigate to the (.*) menu item$/, function (item) {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    this.nav.homePage.navigateToMenuItem(item);
});

Then(/^I confirm that I have landed on the (.*) page (.*)$/, function (title,access) {
    if (access==='true' || access==='success' || access==='successfully')
        ValidateUtilities.validatePageTitle(title,"Access validation failed-page was not accessible as expected");
    else if (access==='false' && (title==='Web Gateway: Management' || title==='Default Parameters'))
        ValidateUtilities.validateVisibleText('You are not authorized to use this facility');
    else if (access==='false')
        ValidateUtilities.validatePageTitleNotEqual(title,"Access validation failed -page accessible when not expected");
});

Then(/^I confirm the page title is (.*) as expected (.*)$/, function (title,access) {
    // const access=this.context.navigationBusinessOptions.access;
    if (access==='true' || access==='success' || access==='successfully')
        ValidateUtilities.validatePageTitle(title,"Access validation failed-page was not accessible as expected");
    else if (access==='false')
        ValidateUtilities.validatePageTitleNotEqual(title,"Access validation failed -page accessible when not expected");
});

Then(/^the text (.*) appears on the page$/, function (text) {
    ValidateUtilities.validateVisibleText(text,"Text "+ text+ " not visible as expected");
});

Given(/^I validate home page icons$/, function () {
    //Go to Icons view, then Home; verify home link worked and List view remains selected
    this.nav.homePage.selectIconsView();
    this.nav.homePage.goHome();
    this.nav.homePage.uiValidation.validateIconsIconSelected(true);
    //Verify Favorites
    this.nav.homePage.uiValidation.validateFavoritesHeaderText();
    //Verify Did You Know
    this.nav.homePage.uiValidation.validateDidYouKnowHeaderText();
    //Verify Recent
    this.nav.homePage.uiValidation.validateRecentHeaderText();
    //Verify Links
    this.nav.homePage.uiValidation.validateLinksHeaderText();
});

Given(/^I walk the front page and validate displayed elements$/, function () {
    //Verify Menu button exists
    this.nav.homePage.uiValidation.validateMenuButtonText();
    //Verify Home link exists
    this.nav.homePage.uiValidation.validateHomeLinkText();
    // Verify About link exists
    this.nav.homePage.uiValidation.validateAboutLinkText();
    // Verify Help link exists
    this.nav.homePage.uiValidation.validateHelpLinkText();
    // Removed in 2018.1.1
    // Verify Contact link exists
    //     this.nav.homePage.uiValidation.validateContactLinkText();
    //Verify Logout link exists
    this.nav.homePage.uiValidation.validateLogoutLinkText();
    //Verify Views do not navigate
    this.nav.homePage.goHome();
    this.nav.homePage.selectListView();
    this.nav.homePage.uiValidation.validatePageTitle();
    this.nav.homePage.selectColumnsView();
    this.nav.homePage.uiValidation.validatePageTitle();
    // Verify Home Item
    this.nav.homePage.uiValidation.validateHomeLeftNavText();
    // Verify Analytics Item
    this.nav.homePage.uiValidation.validateAnalyticsLeftNavText();
    // Verify Interoperability Item
    this.nav.homePage.uiValidation.validateInteroperabilityLeftNavText();
    // Verify System Operation Item
    this.nav.homePage.uiValidation.validateSystemOperationLeftNavText();
    // Verify System Explorer Item
    this.nav.homePage.uiValidation.validateSystemExplorerLeftNavText();
    // Verify System Administration Item
    this.nav.homePage.uiValidation.validateSystemAdministrationLeftNavText();
});

Given(/^I validate home page list items$/, function () {
    //Go to List view, then Home; verify home link worked and List view remains selected
    this.nav.homePage.selectListView();
    this.nav.homePage.goHome();
    this.nav.homePage.uiValidation.validateListIconSelected(true);
    //Verify Favorites
    this.nav.homePage.uiValidation.validateFavoritesHeaderText();
    //Verify Did you know?
    this.nav.homePage.uiValidation.validateDidYouKnowHeaderText();
    //Verify Recent
    this.nav.homePage.uiValidation.validateRecentHeaderText();
    //Verify Links
    this.nav.homePage.uiValidation.validateLinksHeaderText();
});

Given(/^I validate Analytics page list items$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    const analytics=this.nav.homePage.goToAnalyticsLeftNav();
    //Verify List Items
    this.nav.homePage.selectListView();
    analytics.uiValidation.validateAnalyticsPageIdText();
    analytics.uiValidation.validateSelectNamespaceText();
    analytics.uiValidation.validateAvailableAnalyticsNamespacesText();
});

Given(/^I validate Interoperability page list items$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    //Go to interoperability page
    const interoperability=this.nav.homePage.goToInteroperabilityLeftNav();
    //Verify List Items
    this.nav.homePage.selectListView();
    interoperability.uiValidation.validateInteroperabilityPageIdText();
    interoperability.uiValidation.validateSelectNamespaceText();
    interoperability.uiValidation.validateAvailableInteroperabilityNamespacesText();
});

Given(/^I validate System Operation page list items$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    //Go to System Operations screen
    const systemOperations=this.nav.homePage.goToSystemOperationLeftNav();
    // Verify List Items
    this.nav.homePage.selectListView();
    systemOperations.uiValidation.validateListItems();
});

Given(/^I validate System Explorer page list items$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    //Go to  System Explorer screen
    const systemExplorer=this.nav.homePage.goToSystemExplorerLeftNav();
    //Verify List Items
    this.nav.homePage.selectListView();
    systemExplorer.uiValidation.validateListItems();
});

Given(/^I validate System Administration page list items$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    //Go to System Administration page
    const systemAdministration=this.nav.homePage.goToSystemAdministrationLeftNav();
    //Verify List Items
    this.nav.homePage.selectListView();
    systemAdministration.uiValidation.validateListItems();
});

Given(/^I navigate to About page and verify all labels$/, function () {
    if (!(context.page instanceof HomePageUiService)) {
        this.nav.homePage.goHome();
    }
    //Navigate to About screen
    const aboutPage = this.nav.homePage.goToAbout();
    //Verify all labels - Configuration, DB Cache, Routine Cache, Journal File, Superserver Port, Web Service Port, License Server Port,Licensed To, Cluster Support, Mirroring, Time System Started, Encryption Key ID,NLS Locale, Preferred Language ', function(){
    aboutPage.uiValidation.validateAllLabels();
});