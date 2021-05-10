
/**
 * Created by osmolyar on 1/17/2018
 */

import BaseModalPage  from '../common/pageObjects/base.modal.page';

class confirmDeleteLocators extends BaseModalPage {

    get modalOkBtn() {return $('//*[@id="control_13"]')};
    get modalCancelBtn() {return $('//*[@id="control_11"]')};
    get warningText() {return $('//*[@id="zen5"]/table/tbody/tr/td[2]/div')};
    get titleText() {return $('//*[@id="titleText_50"]')};

}

export default confirmDeleteLocators;


