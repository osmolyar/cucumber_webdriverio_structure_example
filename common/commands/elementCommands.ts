import colors from "colors/safe"
import _ from "lodash"
import speed from "../config/speed"
import {max} from "moment";

function _setUniversal(
    value: string,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    if (value) {
        let tagName = element.getTagName()
        if (tagName === "input") {
            let typeName = this.getAttribute("type")
            if (typeName == "checkbox") {
                return this._setCheckBox(value, maxWait, trailingWait)
            } else if (typeName == "radio") {
                return this._setRadio(value, maxWait, trailingWait)
            }
        } else if (tagName === "select") {
            return this._selectLabel( value, maxWait, trailingWait)
        } else {
            let classes = this.getAttribute("class")
            if (tagName === "ui-select-container" || classes?.includes("ui-select-container")) {
                // ui-select-container is in the list of classes
                return this._setTypeAhead(value, maxWait, trailingWait)
            }
        }
        //default
        return this._setValue( value, maxWait, trailingWait)
    }
}

/**
 * @param maxWait
 */
function _getUniversal(maxWait: number = speed.implicit) {
    const element=this
    let tagName = element.getTagName()
    if (tagName === "input") {
        let typeName = element.getAttribute("type")
        if (typeName == "checkbox" || typeName == "radio") {
            return element.isSelected()
        }
    } else if (tagName === "select") {
        //Assume selects by label because this is the most easily retrieved
        return element._getSelectLabel()
    } else if (tagName === "span" || tagName === "div" || tagName === "a" || tagName === "td") {
        return element._getText(maxWait)
    } else {
        let classes = element.getAttribute("class")
        if (tagName === "ui-select-container" || classes?.includes("ui-select-container")) {
            // ui-select-container is in the list of classes
            return element._getTypeAhead()
        }
    }
    //default
    return element._getValue(maxWait)
}

/**
 * @param value
 * @param maxWait
 * @param trailingWait
 */
function _setValue(value: string, maxWait: number = speed.implicit, trailingWait: number = speed.fast) {
    const el=this;
    action(el, setValue, maxWait, trailingWait)
    function setValue() {
        if (value) {
            logSelector(el.selector, "set", value)
            el.setValue(value)
        }
    }
}

/**
 * @param value
 * @param maxWait
 * @param trailingWait
 */
function _setTypeAhead(
    value: string,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, setTypeAheadValue, maxWait, trailingWait)
    function setTypeAheadValue(element: WebdriverIO.Element) {
        element.click()
        logSelector(element.selector, "set", value)
        if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
                let v = value[i]
                let inputSelector = element.selector + ">div.selectize-input>input"
                $(inputSelector).setValue(v)
                let optionSelector =
                    element.selector +
                    ">div.ui-select-choices>div.ui-select-choices-content>div.ui-select-choices-group>div.ui-select-choices-row"
                $(optionSelector).click()
            }
        } else {
            let inputSelector = element.selector + ">div.selectize-input>input"
            $(inputSelector).setValue(value)
            let waitTime = (parseInt($(element.selector + ">div.ui-select-choices").getAttribute("refresh-delay")) || 0) + 500
            browser.pause(waitTime)
            let optionSelector =
                element.selector +
                ">div.ui-select-choices>div.ui-select-choices-content>div.ui-select-choices-group>div.ui-select-choices-row"
            $(optionSelector).click()
        }
    }
}

/**
 * @param element: WebdriverIO.Element
 */
function _getTypeAhead(element: WebdriverIO.Element) {
    let chosen = element.selector + ">.selectize-input" // >.ui-select-match"
    var options = $(chosen)
        .getText()
        .split("\n") // Returns an array of all the options
    options = options.filter(item => item !== "×") //remove the × that is used to remove the item from the list
    if (options.length === 1) {
        return options[0]
    }
    return options
}

/**
 * @param value
 * @param maxWait
 * @param trailingWait
 */
function _appendValue(
    value: string,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, appendValue, maxWait, trailingWait)
    function appendValue(element: WebdriverIO.Element) {
        logSelector(element.selector, "append", value)
        element.addValue(value)
    }
}

/**
 * @param maxWait
 * @param trailingWait
 */
function _clearValue(
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, clearValue, maxWait, trailingWait)
    function clearValue(element: WebdriverIO.Element) {
        logSelector(element.selector, "clear")
        element.clearValue()
    }
}

/**
 * @param state
 * @param maxWait
 * @param trailingWait
 */
function _setCheckBox(
    state: string | Boolean = true,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, setCheckboxValue, maxWait, trailingWait)
    function setCheckboxValue(element: WebdriverIO.Element) {
        logSelector(element.selector, "set", state)
        if (typeof state === "string" || state instanceof String) {
            state = state.toLowerCase() === "true"
        }
        if (element.isSelected() != state) {
            element.click()
        }
    }
}

/**
 * @param state
 * @param maxWait
 * @param trailingWait
 */
function _setRadio(
    state: string | Boolean = true,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, setRadioValue, maxWait, trailingWait)
    function setRadioValue(element: WebdriverIO.Element) {
        logSelector(element.selector, "set", state)
        if (typeof state === "string" || state instanceof String) {
            state = state.toLowerCase() === "true"
        }
        if (element.isSelected() != state && state === true) {
            element.click()
        }
    }
}

/**
 */
function _isExisting() {
    const element=this
    logSelector(element.selector, "check")
    return element.isExisting()
}

/**
 * @param value
 * @param maxWait
 * @param trailingWait
 */
function _keys(value: string, maxWait: number = speed.implicit, trailingWait: number = speed.fast) {
    const element=this
    element.waitForEnabled({timeout: maxWait})
    logSelector(element.selector, "keys", value)
    element.click();
    browser.keys(value);
    browser.pause(trailingWait);
}

/**
 * @param maxWait
 * @param trailingWait
 */
function _click(maxWait: number = speed.implicit, trailingWait: number = speed.fast) {
    this.waitForClickable({timeout: maxWait})
    logSelector(this.selector, "click")
    this.click()
    browser.pause(trailingWait)
}

/**
 * @param targetElement: WebdriverIO.Element
 * @param maxWait
 * @param trailingWait
 */
function _dragAndDrop(
    targetElement: WebdriverIO.Element,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const sourceElement=this
    dualElementAction(sourceElement, targetElement, dragAndDrop, maxWait, trailingWait)
    function dragAndDrop(element1: WebdriverIO.Element, element2: WebdriverIO.Element) {
        logSelector(sourceElement.selector,"drag ",  " to " + targetElement.selector)
        element1.dragAndDrop(element2)
    }
}

/**
 * @param value
 * @param maxWait
 * @param trailingWait
 */
function _selectValue(
    value: string,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, selectVal, maxWait, trailingWait)

    function selectVal(element: WebdriverIO.Element) {
        if (value) {
            logSelector(element.selector, "select", value)
            // element.selectByValue(value)
            element.selectByAttribute("value", value)
        }
    }
}

/**
 * @param value
 * @param maxWait
 * @param trailingWait
 */
function _selectLabel(
    value: string,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element,selectVal, maxWait, trailingWait)
    function selectVal(element: WebdriverIO.Element) {
        if (value) {
            logSelector(element.selector, "select", value)
            element.selectByVisibleText(value)
        }
    }
}

/**
 * @param value
 * @param maxWait
 * @param trailingWait
 */
function _selectLabelIncludes(
    value: string,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, selectVal, maxWait, trailingWait)

    function selectVal(element: WebdriverIO.Element) {
        if (value) {
            var options = element
                .getText()
                .split("\n") // Returns an array of all the options
            logSelector(element.selector, "select", value)
            let index = options.findIndex(function(v) {
                return v.includes(value)
            })
            element.selectByIndex(index) // Arrays start at 1, instead of 0
        }
    }
}

/**
 */
function _getSelectLabel() {
    const element=this
    let value = element.getValue()
    if (value === "") {
        return ""
    }
    let chosen = element.selector + '>option[value="' + value + '"]'
    return $(chosen).getText()
}

/**
 * @param index
 * @param maxWait
 * @param trailingWait
 */
function _selectByIndex(
    index: number,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    action(element, selectVal, maxWait, trailingWait)

    function selectVal(element: WebdriverIO.Element) {
        if (index) {
            var options = element
                .getText()
                .split("\n") // Returns an array of all the options
            logSelector(element.selector, "select", options[index])
            element.selectByIndex(index) // Some teams needs orig selectByIndex
        }
    }
}

/**
 * @param index
 * @param maxWait
 * @param trailingWait
 */
function _selectIndex(
    index: number,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    const element=this
    _selectByIndex(element, index + 1, maxWait)
}

/**
 * @param maxWait
 */
function _scrollIntoView(
    maxWait: number = speed.implicit,
) {
    const element=this
    action(element, scrollIntoView, maxWait)

    function scrollIntoView(element: WebdriverIO.Element) {
        logSelector(element.selector, "getValue")
        return element.scrollIntoView()
    }
}

/**
 * @param maxWait
 */
function _getText(
    maxWait: number = speed.implicit,
) {
    const element=this
    getAction(element, getText, maxWait)
    var result: string
    function getText(element: WebdriverIO.Element) {
        logSelector(element.selector, "getText")
        result= element.getText()
    }
    return result
}

/**
 * @param maxWait
 */
function _getValue(
    maxWait: number = speed.implicit,
) {
    const element=this
    getAction(element, getValue, maxWait)
    var result: string
    function getValue(element: WebdriverIO.Element) {
        logSelector(element.selector, "getValue")
        result= element.getValue()
    }
    return result
}

/**
 * @param attribute
 * @param maxWait
 */
function _getAttribute(
    attribute: string,
    maxWait: number = speed.implicit,
) {
    const element=this
    getAction(element, getAttribute, maxWait)
    var result: string
    function getAttribute(element: WebdriverIO.Element) {
        logSelector(element.selector, "getAttribute")
        result= element.getAttribute(attribute)
    }
    return result
}


type ActionCallback = (element: WebdriverIO.Element) => void

/**
 * reusable wait and do stuff method - waits for an element to exist and then act on it
 * @param element
 * @param actionCb      - method to call once the element exists
 * @param maxWait       - max wait time in ms
 * @param trailingWait  - ms to pause once actions has been performed
 * @returns element     - for chaining
 */
const action = function(
    element: WebdriverIO.Element,
    actionCb: ActionCallback,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    logSelector(element.selector, "wait", "")
    element.waitForExist({timeout: maxWait})
    actionCb(element)
    browser.pause(trailingWait)
    return element
}

/**
 * reusable wait and do stuff method - waits for an element to exist and then act on it, returning result of action
 * @param element: WebdriverIO.Element
 * @param actionCb      - method to call once the element exists
 * @param maxWait       - max wait time in ms
 * @param trailingWait  - ms to pause once actions has been performed
 * @returns element     - for chaining
 */
const getAction = function(
    element: WebdriverIO.Element,
    actionCb: ActionCallback,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    logSelector(element.selector, "wait", "")
    element.waitForExist({timeout: maxWait})
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
    element1: WebdriverIO.Element,
    element2: WebdriverIO.Element,
    actionCb: DualActionCallback,
    maxWait: number = speed.implicit,
    trailingWait: number = speed.fast
) {
    logSelector(element1.selector, "wait")
    logSelector(element2.selector, "wait")
    element1.waitForExist({timeout: maxWait})
    element2.waitForExist({timeout: maxWait})
    actionCb(element1, element2)
    browser.pause(trailingWait)
    return element1
}

/*================================================================================
=                           wait and CHECK stuff                                =
================================================================================*/

/**
 * wait for element to be displayed (for backwards compatibility)
 * @param maxWait
 */
function _waitForExist( maxWait: number = speed.implicit) {
    this.waitForExist({timeout: maxWait});
    return browser
}

/**
 * wait for element to be displayed (documentation says it accepts a time parameter but webdriverio-core.d.ts doesn't have the parameter in the def, so will cause ts errors)
 * @param maxWait
 */
function _waitForDisplayed( maxWait: number = speed.implicit) {
    const element=this
    element.waitForDisplayed({timeout: maxWait});
    return browser
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

export const customElement = {
    _click,
    _setValue,
    _setUniversal,
    _getUniversal,
    _setTypeAhead,
    _getTypeAhead,
    _appendValue,
    _clearValue,
    _setCheckBox,
    _setRadio,
    _isExisting,
    _keys,
    _dragAndDrop,
    _selectValue,
    _selectLabel,
    _selectLabelIncludes,
    _getSelectLabel,
    _selectIndex,
    _selectByIndex,
    _scrollIntoView,
    _waitForExist,
    _waitForDisplayed,
    _getText,
    _getValue,
    _getAttribute,
}

/**
 * Binds all of the legacyBrowser commands to the browser object
 */
export function registerCustomElementCommands() {
    Object.entries(customElement).forEach(([name, cb]) => {
        browser.addCommand(name, cb, true)
    })
    browser.addCommand("_waitForExist",_waitForExist,true);
}
