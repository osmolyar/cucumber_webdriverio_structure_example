/**
 * Page Object for SQLProcedures
 * Created by osmolyar on yyyy-mm-dd
 */

import AddTablesModal  from './AddTables.modal.page';
// import AddProceduresLocators  from '../LocatorDefinitions/AddTablesModal.locators';

class AddProceduresModal extends AddTablesModal {


    selectProcedure(procedure){
        this.availableTables(procedure)._click();
    };

    clickAddOneProcedure(){
        this.addOneTable._click();
    };

    clickAddAllProcedures(){
        this.addAllTables._click();
    };

    clickRemoveOneProcedure(){
        this.removeOneTable._click();
    };

    clickRemoveAllProcedures(){
        this.removeAllTables._click();
    };
}

export default AddProceduresModal;