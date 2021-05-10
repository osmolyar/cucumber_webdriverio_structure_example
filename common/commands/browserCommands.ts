import colors from "colors/safe"
import _ from "lodash"
import speed from "../config/speed"
import {max} from "moment";

function _acceptAlert() {
    console.log("in _acceptAlert")
    browser.pause(300)
    browser.acceptAlert()
}

function _dismissAlert() {
    browser.pause(300)
    browser.dismissAlert()
}

function _getAlertText() {
    return browser.getAlertText()
}

function _acceptAlertIfPresent() {
    console.log("accepting alert if present")
    try {
        let alertMessage=browser.getAlertText()
        browser.acceptAlert();
        console.log("Alert was present. Alert message: " + alertMessage)
        return alertMessage
    } catch (error) {
        console.log("No alert was present." )
        return 'noAlert'
    }
}

function _dismissAlertIfPresent() {
    console.log("dismissing alert if present")
    try {
        let alertMessage=browser.getAlertText()
        browser.dismissAlert();
        console.log("Alert was present. Alert message: " + alertMessage)
        return alertMessage
    } catch (error) {
        console.log("No alert was present." )
        return 'noAlert'
    }
}

function _dismissZenAlertsAndRefresh() {
    var isAlertPresent = _acceptAlertIfPresent()
    if (isAlertPresent != "noAlert") {
        isAlertPresent = _acceptAlertIfPresent()
        if (isAlertPresent != "noAlert") {
            _acceptAlertIfPresent()
        }
        browser.refresh()
    }
}
/**
 * Used for interpolating selectors with placeholders with data
 *
 * from:http://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
 * usage:
 *  getSelector('[qd-tag="I am ${NPI}"]', {'npi': 12344555})
 *  => "I am 5
 *  getSelector('[qd-tag="I am ${0}"]', [123456677])
 *  => "I am 5
 *
 * @param template (string)
 * @param scope (object)
 * @returns {string}
 */
const getSelector = function(template = "", scope: object = {}) {
    return template.replace(/\${([^{}]*)}/g, function(match, prop) {
        //e.g. match == "${NPI}", prop == "NPI"
        var replacement = _.get(scope, prop, "")
        return typeof replacement === "string" || typeof replacement === "number" ? replacement : match
    })
}
/**
 * @param element (WebdriverIO.Element or selector string)
 * @param scope
 */
function logExisting(element: any, scope: object) {
    var selector = _.isString(element) ? element : getSelector(element, scope)
    var isExisting = $(selector).isExisting();
    console.log(colors.green(selector), isExisting ? colors.green("exists") : colors.red("not exist"))
}
/**
 * @param selector
 * @param scope
 */
function getElement(selector: string, scope?: object) {
    selector = _.isNil(scope) ? selector : getSelector(selector, scope)
    return $(selector)
}

/**
 * @param maxWait
 * @param trailingWait
 */
function _getTitle(maxWait = speed.slow, trailingWait = 0) {
    let timeout = false
    let title = ""
    setTimeout(function() {
        timeout = true
    }, maxWait)
    while (!timeout) {
        try {
            title = browser.getTitle()
        } catch (e) {}
    }
    browser.pause(trailingWait)
    return title
}

type ActionCallback = (element: WebdriverIO.Element) => void

/**
 * reusable wait and do stuff method - waits for an element to exist and then act on it
 * @param selector
 * @param actionCb      - method to call once the element exists
 * @param maxWait       - max wait time in ms
 * @param trailingWait  - ms to pause once actions has been performed
 * @returns element     - for chaining
 */
const action = function(
    selector: string,
    actionCb: ActionCallback,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    logSelector(selector, "wait", "")
    $(selector).waitForExist({timeout: maxWait})
    const element = $(selector)
    actionCb(element)
    browser.pause(trailingWait)
    return element
}

/**
 * reusable wait and do stuff method - waits for an element to exist and then act on it, returning result of action
 * @param selector
 * @param actionCb      - method to call once the element exists
 * @param maxWait       - max wait time in ms
 * @param trailingWait  - ms to pause once actions has been performed
 * @returns element     - for chaining
 */
const getAction = function(
    selector: string,
    actionCb: ActionCallback,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    logSelector(selector, "wait", "")
    $(selector).waitForExist({timeout: maxWait})
    const element = $(selector)
    let result= actionCb(element)
    browser.pause(trailingWait)
    return result
}

type DualActionCallback = (element1: WebdriverIO.Element, element2: WebdriverIO.Element) => void
/**
 * reusable wait and do stuff method with two input parameters - waits for an element to exist and then act on it
 * @param element1
 * @param element2
 * @param actionCb      - method to call once the element exists
 * @param maxWait       - max wait time in ms
 * @param trailingWait  - ms to pause once actions has been performed
 * @returns element     - for chaining
 */
function dualElementAction(
    selector1: string,
    selector2: string,
    actionCb: DualActionCallback,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    logSelector(selector1, "wait")
    logSelector(selector2, "wait")
    $(selector1).waitForExist({timeout: maxWait})
    $(selector2).waitForExist({timeout: maxWait})
    let element1 = $(selector1)
    let element2 = $(selector2)
    actionCb(element1, element2)
    browser.pause(trailingWait)
    return element1
}

/*================================================================================
=                           wait and CHECK stuff                                =
================================================================================*/
/**
 * wait a condition to meet where the condition is defined in the callback
 *
 * @description if the condition hasn't been meet, check every 250ms until condition has been met or maxWait has been reached
 *
 * @param conditionCb - return true if condition has been met
 * @param maxWait
 * @param trailingWait
 */

function _waitForCondition(
    conditionCb: () => boolean,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    var frequency = 250
    var isValid = false
    browser.pause(frequency) // time before condition met
    while (maxWait > 0 && !isValid) {
        isValid = conditionCb()
        browser.pause(frequency)
        maxWait = maxWait - frequency
    }
    browser.pause(trailingWait) //post spinner processing takes time
}

/**
 * wait for spinner to disappear (display:none)
 * @param selector
 * @param maxWait       - max wait time in ms
 * @param trailingWait  - ms to pause once actions has been performed
 */
function _spinner(
    selector = '[qd-tag="cmp-page-modal-spinner"]',
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    $(selector).waitForDisplayed({timeout: maxWait,reverse: true})
    browser.pause(trailingWait)
    return browser
}

/**
 * wait for spinner to disappear (display:none)
 * @param maxWait
 * @param selector
 * @param trailingWait
 */
function _invisible(selector: string, maxWait: number = speed.implicit, trailingWait: number = speed.fast) {
    $(selector).waitForDisplayed({timeout: maxWait,reverse: true})
    browser.pause(trailingWait)
    return browser
}

/**
 * wait for element to be displayed (for backwards compatibility)
 * @param maxWait
 * @param selector
 */

/**
 * @param fromUrl
 */
function _urlChange(fromUrl = browser.getUrl()) {
    browser.waitUntil(() => {
        return fromUrl != browser.getUrl()
    })
    _spinner()
    return browser
}

/**
 * wait for Zen Mouse Trap to disappear (display:none)
 * @param maxWait
 * @param element: WebdriverIO.Element
 * @param trailingWait
 */
function _waitForZenPageReady(
    element = $('//*[@id="zenMouseTrap"]'),
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    // _dismissZenAlertsAndRefresh()
    hasStyleDisplaySetToNone(element, maxWait, trailingWait)
    return browser
}

/**
 * wait for style (display:none)
 * @param maxWait
 * @param element: WebdriverIO.Element
 * @param trailingWait
 */
function hasStyleDisplaySetToNone(
    element: WebdriverIO.Element,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    _waitForCondition(
        () => {
            return _isExisting(element) && !element.isDisplayed()
        },
        maxWait,
        trailingWait
    )
    browser.pause(trailingWait)
    return browser
}

/**
 * @param element: WebdriverIO.Element
 */
function _isExisting(element: WebdriverIO.Element) {
    logSelector(element.selector, "check")
    return element.isExisting()
}

/**
 * wait for Home Page to appear (Title='IRIS - Home')
 * @param maxWait
 * @param trailingWait
 * @param title  page title to wait for
 */
function _waitForPage(title = "Title='IRIS - Home", maxWait: number = speed.implicit, trailingWait = speed.slow) {
    browser.waitUntil(
        () => {
            return browser.getTitle() == title
        },
        {timeout: maxWait}
    )
    browser.pause(trailingWait)
    return browser
}

/**
 * wait for Home Page to disappear (Title='IRIS - Home')
 * @param maxWait
 * @param trailingWait
 * @param title  page title to wait for disappearance
 */
function _waitForNotOnPage(title = "Title='IRIS - Home", maxWait: number = speed.implicit, trailingWait = speed.slow) {
    browser.waitUntil(
        () => {
            return browser.getTitle() != title
        },
        {timeout: maxWait}
    )
    browser.pause(trailingWait)
}

/**
 * @param selector
 * @param prefix
 * @param value
 */
function logSelector(selector, prefix,  value?: any) {
    let message: string=''
    let waitActions = ['wait','check','check clickable','check displayed','check enabled']
    switch (waitActions.includes(prefix)) {
        case true:
            message = `  ${colors.bold('-' )} ${colors.bold(prefix)}:   ${selector}`
            console.log(message)
            break
        case false:
            message = value? `  ${colors.bold('-' )} ${colors.bold(prefix)}:   ${colors.green(selector)} => ${colors.green(value)}` : `  ${colors.bold('-' )} ${colors.bold(prefix)}:   ${colors.green(selector)}`
            console.log(message)
            break
        default:
            console.log(selector)
    }
}

export const customBrowser = {
    _acceptAlert,
    _dismissAlert,
    _getAlertText,
    _acceptAlertIfPresent,
    _dismissAlertIfPresent,
    _dismissZenAlertsAndRefresh,
    getElement,
    getSelector,
    _getTitle,
    _waitForCondition,
    _spinner,
    _invisible,
    _urlChange,
    _waitForZenPageReady,
    _waitForPage,
    _waitForNotOnPage,
}

/**
 * Binds all of the legacyBrowser commands to the browser object
 */
export function registerCustomBrowserCommands() {
    Object.entries(customBrowser).forEach(([name, cb]) => {
        browser.addCommand(name, cb)
    })
}
