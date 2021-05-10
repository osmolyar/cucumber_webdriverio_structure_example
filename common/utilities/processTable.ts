import * as chai from "chai"
import colors from "colors/safe"
import { forEach, has, zip, zipObject } from "lodash"
/**
 * The accepted options for processTable
 */
interface PTOptions {
    selectors?: {
        headers: string
        rows: string
        rowCells: string
    }

    blankHeaders?: string[]

    altAttributes?: { [key: string]: string }

    rowNumbers?: number[]
}

/**
 * The default options for processTable
 */
const defaultOptions: Required<PTOptions> = {
    selectors: {
        headers: "thead:first-child > tr > *",
        rows: "tbody > tr",
        rowCells: "td",
    },
    blankHeaders: [],
    altAttributes: {},
    rowNumbers: [],
}

/**
 * if you want to use processTable with a faux-table, use these selectors
 * for example, processTable(<whatever>, { selectors: fauxTableSelectors })
 */
export const fauxTableSelectors = {
    headers: ".th",
    rows: ".tbody > .tr",
    rowCells: ".td",
}

/**
 * Returns whether the element doesn't have a display value of none
 * @param element
 */
function checkDisplay(element: WebdriverIO.Element) {
    const display = element.getCSSProperty("display")
    return display.value !== "none"
}

/**
 * Given the selector of a table, returns an object with two properties:
 * `tableHash`, and object that mirrors the form of the cucumber table `hashes()` method,
 * and `tableElements`, an array of objects where each key is a table header and each value is the corresponding webdriver element.
 * With the `options` parameter, you can populate `selectors` with alternate selector strings to find table elements, `blankHeaders` with
 * names to provide blank headers, `altAttributes` with alternate element attributes to retrieve, such as an element class, and `rowNumbers` with specific
 * rows to get data from.
 * @author Alexander Urizar <aurizar@intersystems.com>
 * @param  tableSelector
 * @param  options
 * @example
 * // will name the first blank column 'StatusType', retrieve its class, and only retrieve rows 1, 3, and 4
 * processTable('#tOEOrdItem_ListEMR_0', {
 *   blankHeaders: ['StatusType'],
 *   altAttributes: { StatusType: 'class' },
 *   rowNumbers: [1, 3, 4]
 * })
 */
export function processTable(tableSelector: string, options: PTOptions = defaultOptions) {
    console.log(colors.green("processTable"), "->", tableSelector)

    // overwrite any of the default options with the options parameter
    const finalOptions = {
        ...defaultOptions,
        ...options,
    }

    const { blankHeaders, altAttributes, rowNumbers, selectors } = finalOptions

    /**
     * determine headers
     */

    // grab the table element
    const table = $(tableSelector)
    // grab the headers, returning an array of strings
    const headerElements = table.$$(selectors.headers).filter(checkDisplay)
    // not sure what happens if you mutate input parameters, and I'm not about to find out
    const blanks = [...blankHeaders]

    if (blanks.length > 0) {
        console.log("blanks is " + JSON.stringify(blanks))
    }

    // for each blank header, grab a value from `blanks` and replace it with that
    const headers = headerElements.map((headerElement, i) => {
        const header = headerElement.getText()
        if (!header.trim()) {
            if (blanks.length > 0) {
                return blanks.shift() as string
            }
            // if there's a blank header detected but blanks is empty, return a generic name
            return `Header${i}`
        }
        return header.trim()
    })

    console.log(colors.green("processTable"), `// headers -> ${headers.join(", ")}`)

    /**
     * determine row numbers
     */

    const allrows = table.$$(selectors.rows)
    const rows = rowNumbers.length === 0 ? allrows : rowNumbers.map(i => allrows[i])

    /**
     * start processing the table
     */

    const processedTable = rows.map(row => {
        const cells = row.$$(selectors.rowCells).filter(checkDisplay)

        const mappedCells = cells.map((cell, i) => {
            const header = headers[i]
            // if the altAttributes object has the header, return the specified attribute instead
            if (has(altAttributes, header)) {
                return cell.getAttribute(altAttributes[header])
            }
            // by default, grab the cell text
            return cell.getText().trim()
        })

        // create an object which will be in a form similar to a DataTable `hashes()` method
        const rowHash = zipObject(headers, mappedCells)
        // create an object with values of the found WebdriverElement
        const rowElements = zipObject(headers, cells)
        return { rowHash, rowElements }
    })
    console.log()

    /**
     * process and return the result
     */

    /** This is the form equal to a cucumber table's `hashes()` method */
    const tableHash = processedTable.map(r => r.rowHash)
    /** This is a form with just the WebdriverElements */
    const tableElements = processedTable.map(r => r.rowElements)
    return { tableHash, tableElements }
}

/**
 * Validates the expected value is equal to the actual value
 * @param eValue
 * @param aValue
 * @param col
 * @param index
 */
function defaultValidator(eValue: string, aValue: string, col: string, index: number) {
    const errMsg = `Column "${col}" Row ${index + 1} incorrect`
    chai.expect(aValue, errMsg).to.equal(eValue)
}

/**
 * Type for tables input into 'validateBy'
 */
type Table = { [key: string]: string }[]

/**
 * Validates the two tables given
 * @param expectedTable
 * @param actualTable
 * @param validator
 */
export function validateBy(expectedTable: Table, actualTable: Table, validator = defaultValidator) {
    zip(expectedTable, actualTable).forEach(([eRow, aRow], index) => {
        forEach(eRow, (eValue, col) => {
            if (!aRow) {
                throw Error("row was undefined")
            }
            const aValue = aRow[col]
            validator(eValue, aValue, col, index)
        })
    })
}
