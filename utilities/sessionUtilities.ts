/**
 * Created by osmolyar on 11/6/2017.
 */
import {legacyBrowser} from "../common/commands/customCommands";

class utilities {

//add some generic utilities here as wrappers to Webdriverio  functions

    static logOutOrReload() {
        try {
            $('//div[@id="portalTitleMenuBox"]/a[contains(.,"Logout")]').click();
            legacyBrowser._acceptAlertIfPresent();
            legacyBrowser._acceptAlertIfPresent();
        } catch (err) {
            console.log("Logout error: " + JSON.stringify(err));
            if (!JSON.stringify(err).includes("UnexpectedAlertOpen")) {
                browser.reloadSession();
            }
        }
    };

    static reloadBrowser() {
        browser.reloadSession();
        console.log('Setting viewport size');
        browser.setWindowSize(1900,900);
        //   browser.windowHandleMaximize();
        const windowSize = browser.getWindowSize();
        console.log("Window size is: " + JSON.stringify(windowSize));
    };

}

export default utilities