import colors from "colors"
import { legacyBrowser } from "../commands/customCommands"
import _ from "lodash"
import speed from "../config/speed"
import Element from "./element"

class Page {
    // orig comment on map declaration: needs to be commented out pending phase 2 removal of "get rawSelectors" in page objects
    // 6/23/20:  Update:  even with "get rawSelectors" not used in page objects,
    // Putting 'public map: any' or 'map: any" in base page results in map being undefined in the pages even though they get map as before.
    // (public map: any={} results in the selectors being undefined).
    // And not even within the custom commands - just in direct references to this.map in pages, so they're not being overwritten somehow.
    // map: any
    //workaround:
    private _map: any

    get map() {
        return this._map
    }

    set map(value) {
        this._map = value
    }

    element = new Element()
    spinner = legacyBrowser._spinner

    constructor() {
    }

    get speed() {
        return speed
    }

    /**
     * meant to be overridden by inherited classes
     * to include another "page". e.g. banner and footer
     *
     * @returns {Array}
     */
    get components() {
        return []
    }

    open(path = "") {
        const url = path
        browser.url(url)
        console.log("- navigate to:", colors.cyan(url))
    }

    getElement(selector) : WebdriverIO.Element {
        return legacyBrowser.getElement(selector, this)
    }

    getSelector(template = ""): string {
        return legacyBrowser.getSelector(template, this)
    }

    acceptAlertIfPresent=legacyBrowser._acceptAlertIfPresent
    dismissAlertIfPresent=legacyBrowser._dismissAlertIfPresent
    getTitle = legacyBrowser._getTitle
    waitForZenPageReady=legacyBrowser._waitForZenPageReady


    setProperties(businessOptions, itemArray, maxWait?, trailingWait?) {
        for (let i = 0; i < itemArray.length; i++) {
            this.element.setUniversal(this.map[itemArray[i]], businessOptions[itemArray[i]], maxWait, trailingWait)
        }
    }

    getProperties(validationOptions, itemArray, maxWait?) {
        for (let i = 0; i < itemArray.length; i++) {
            if (this.element.isExisting(this.map[itemArray[i]])) {
                validationOptions[itemArray[i]] = this.element.getUniversal(
                    this.map[itemArray[i]],
                    maxWait
                )
            }
        }
    }

    setElementProperties(businessOptions, itemArray, maxWait?, trailingWait?) {
        for (let i = 0; i < itemArray.length; i++) {
            if (businessOptions[itemArray[i]] && this[itemArray[i]]._isExisting())
                this[itemArray[i]]._setUniversal(businessOptions[itemArray[i]], maxWait, trailingWait)
        }
    }

    getElementProperties(validationOptions, itemArray, maxWait?) {
        for (let i = 0; i < itemArray.length; i++) {
            if (this[itemArray[i]]._isExisting()) {
                validationOptions[itemArray[i]] =
                    this[itemArray[i]]._getUniversal(maxWait)
            }
        }
    }

    acceptAlert() : string {
        console.log("accepting alert")
        const alertMessage = browser.getAlertText()
        legacyBrowser._acceptAlert()
        return alertMessage
    }

    dismissAlert() : string {
        console.log("dismissing alert")
        const alertMessage = browser.getAlertText()
        legacyBrowser._dismissAlert()
        return alertMessage
    }

    getErrorHintHighlighted(selector) : string {
        if (legacyBrowser._isExisting(selector))
            if (!($(selector).getAttribute("class") === "redText")) return "false"
            else return "true"
    }

    pause(time) {
        browser.pause(time)
    }
}

export default Page
