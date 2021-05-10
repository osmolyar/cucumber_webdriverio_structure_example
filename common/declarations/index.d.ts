/// <reference types="chai" />

interface Context {
    page: any
    chart: any
    stackP: any[];
    [key: string]: any
}

declare const context: Context

declare module NodeJS {
    interface Global {
        expect: Chai.ExpectStatic
        assert: Chai.AssertStatic
        should: Chai.Should
        context: any
    }
}

declare module cucumber {
    interface World {
        nav: any;
        context: Context;
        [key: string]: any;
    }
}

declare const expect: Chai.ExpectStatic
declare const assert: Chai.AssertStatic
declare const should: Chai.Should

// for data sets
declare module WebdriverIO {
    interface Browser {
        dataLoadChecked: { [namespace: string]: { [dataset: string]: boolean } };
        _acceptAlert(): string;
        _dismissAlert():  void;
        _getAlertText () :  string;
        _acceptAlertIfPresent(): void;
        _dismissAlertIfPresent(): void;
        _dismissZenAlertsAndRefresh():  void;
        getElement( selector: string, scope?: object ): WebdriverIO.Element;
        getSelector( template, scope: object  ):  string;
        _getTitle( maxWait?: number, trailingWait?:number ):  string;
        _waitForCondition( conditionCb: () => boolean,
                           maxWait?: number,
                           trailingWait?: number ):  void;
        _spinner( selector: string, maxWait?: number, trailingWait?:number ):  void;
        _invisible( selector: string, maxWait?: number, trailingWait?:number ): boolean;
        _urlChange( fromUrl: string ):  void;
        _waitForZenPageReady() :  void;
        _waitForPage( title: string, maxWait?: number, trailingWait?: number ):  void;
        _waitForNotOnPage( title: string, maxWait?: number, trailingWait?:number ):  void;

    }
    interface Element {
        _click( maxWait?: number, trailingWait?:number ):  void;
        _setValue( value: string,
                   maxWait?: number,
                   trailingWait?: number ):  void;
        _setUniversal( value: string,
                       maxWait?: number,
                       trailingWait?: number ):  void;
        _getUniversal( maxWait?: number ): string;
        _setTypeAhead( value: string,
                       maxWait?: number,
                       trailingWait?: number ):  void;
        _getTypeAhead(): string;
        _appendValue( value: string,
                      maxWait?: number,
                      trailingWait?: number):  void;
        _clearValue( maxWait?: number,
                     trailingWait?: number):  void;
        _setCheckBox( state?: string | Boolean,
                      maxWait?: number,
                      trailingWait?: number ):  void;
        _setRadio( state?: string | Boolean,
                   maxWait?: number,
                   trailingWait?: number ):  void;
        _isExisting(): boolean;
        _keys( value: string,
               maxWait?: number,
               trailingWait?: number, ):  void;
        _dragAndDrop( targetElement: WebdriverIO.Element,
                      maxWait?: number,
                      trailingWait?: number ):  void;
        _selectValue( value: string,
                      maxWait?: number,
                      trailingWait?: number): void;
        _selectLabel( value: string,
                      maxWait?: number,
                      trailingWait?: number, ):  void;
        _selectLabelIncludes( value: string,
                              maxWait?: number,
                              trailingWait?: number): boolean;
        _getSelectLabel(): string;
        _selectIndex( index: number,
                      maxWait?: number,
                      trailingWait?: number ):  void;
        _selectByIndex( index: number,
                        maxWait?: number,
                        trailingWait?: number ): void;
        _scrollIntoView( maxWait?: number ):  void;
        _waitForExist( maxWait?: number ):  void;
        _waitForVisible( maxWait?: number ):  void;
        _waitForDisplayed( maxWait?: number ): void;
        _getText( maxWait?: number ): string;
        _getValue( maxWait?: number ):  string;
        _getAttribute( attribute: string,
                       maxWait?: number ):  string;
    }
}

declare module "@babel/register"
