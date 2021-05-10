/**
 * Page Object for SQLPrivileges
 * Created by osmolyar on yyyy-mm-dd
 */

import AddTablesModal  from './AddTables.modal.page';

class AddViewsModal extends AddTablesModal {

    selectView(view){
        this.availableTables(view)._click();
    };

    clickAddOneView(){
        this.addOneTable._click();
    };

    clickAddAllViews(){
        this.addAllTables._click();
    };

    clickRemoveOneView(){
        this.removeOneTable._click();
    };

    clickRemoveAllViews(){
        this.removeAllTables._click();
    };
}

export default AddViewsModal;